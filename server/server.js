import cors from 'cors'
import express from 'express' 
import dotenv from 'dotenv'
import rateLimit from 'express-rate-limit'

const app=express()
dotenv.config()
app.use(cors())
app.use(express.json())

const chatLimiter = rateLimit({
    windowMs: 24 * 60 * 60 * 1000,
    max: 4,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        error: 'You have used your 4 free prompts for today. Please try again tomorrow.'
    }
})


app.get('/models', async(req,res)=>{
    const response=await fetch("https://openrouter.ai/api/v1/models",{
        headers:{
            'Authorization':`Bearer ${process.env.OPENROUTER_API_KEY}`
        }
    })
    const data=await response.json()
    const freeCompaniesModels = {}
    

    data.data.forEach((model) => {

        if (
            model.pricing.prompt === '0' &&
            model.pricing.completion === '0'
        ) {

            const companyName = model.id.split('/')[0]
            
            if (!freeCompaniesModels[companyName]) {
                freeCompaniesModels[companyName] = {
                    name: companyName,
                    models: []
                }
            }

            freeCompaniesModels[companyName].models.push({
                id: model.id,
                name: (model.name.split(': ')[1] || model.name).replace('(free)','').trim(),
                description: model.description,
                price: 'Free'
            })
        }
    })
    console.log(freeCompaniesModels)
    res.json(freeCompaniesModels)
    
})

app.post('/', chatLimiter, async (req, res) => {
    const { message, model } = req.body

    try {
        const response = await fetch(
            'https://openrouter.ai/api/v1/chat/completions',
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model,
                    messages: [
                        {
                            role: 'user',
                            content: message
                        }
                    ],
                    stream: true
                })
            }
        )

        if (!response.ok) {
            const errorData = await response.json()

            return res.status(response.status).json({
                error: errorData.error?.message || 'OpenRouter request failed'
            })
        }

        res.setHeader('Content-Type', 'text/event-stream')
        res.setHeader('Cache-Control', 'no-cache')
        res.setHeader('Connection', 'keep-alive')

        const reader = response.body.getReader()
        const decoder = new TextDecoder()

        let buffer = ''

        while (true) {
            const { done, value } = await reader.read()

            if (done) break

            buffer += decoder.decode(value, { stream: true })

            const events = buffer.split('\n\n')

            buffer = events.pop() ?? ''

            for (const event of events) {
                const line = event.trim()

                if (!line.startsWith('data: ')) continue

                const data = line.slice(6)

                if (data === '[DONE]') continue

                const parsed = JSON.parse(data)

                const content = parsed.choices?.[0]?.delta?.content

                if (content) {
                    // console.log('SENDING:', content)
                    res.write(content)
                }
            }
        }

        res.end()

    } catch (error) {
        console.error('Streaming error:', error)

        if (!res.headersSent) {
            res.status(500).json({
                error: 'Something went wrong'
            })
        }
    }
})

const PORT=process.env.PORT || 3000
app.listen(PORT, '0.0.0.0', () => {
    console.log(`server is running on port ${PORT}`)
})
