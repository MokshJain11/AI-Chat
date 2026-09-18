import { useEffect, useRef } from "react"
import FormDropupMenu from "./FormDropupMenu"
import { useNavigate } from "react-router-dom"

export default function Form({ currentChat, chats, setChats, isCompactActions, modelData, drafts, setDrafts, loadingChats, setLoadingChats, selectedCompany, setSelectedCompany, selectedModel, setSelectedModel, showErrorModal, setShowErrorModal}) {

    const btnClass = 'flex justify-center items-center gap-1 px-3 text-xs font-semibold text-gray-500 rounded-4xl border border-gray-200 hover:bg-[#c9c9c9]/40'    
    
    const draftKey=currentChat?.id ??'new-chat'
    const textAreaRef = useRef(null)
    const navigate = useNavigate()

    useEffect(()=>{
        if(textAreaRef.current){
            textAreaRef.current.focus()
        }
    },[currentChat?.id])
    useEffect(() => {
        const textarea = textAreaRef.current

        if (!textarea) return

        textarea.style.height = 'auto'
        textarea.style.height = `${textarea.scrollHeight}px`
    },[drafts[draftKey]])

    function handleChange(value) {
        setDrafts(prev => ({
            ...prev,
            [draftKey]: value
        }))
    }

    function generateChatId() {
        return `${Date.now()}-${Math.random().toString(36).slice(2)}`
    }

    async function handleSubmit(e){
        
        e.preventDefault()
        const currentMsg = drafts[draftKey]?.trim()

        if (!currentMsg) return

        setDrafts(prev => ({
            ...prev,
            [draftKey]: ''
        }))
        
        let currentChatId=currentChat?.id
        if(!currentChatId){
            currentChatId=generateChatId()
            setChats(prevChats => 
                [...prevChats,{
                    id:currentChatId,
                    title:currentMsg,
                    messages:[currentMsg],
                    results:['']
                }]
            )
            navigate(`/chat/${currentChatId}`)
        }
        else{
            setChats(prevChats=>
                prevChats.map(chat=>
                    chat.id===currentChatId    
                        ?{
                            ...chat,
                            messages:[...chat.messages,currentMsg],
                            results:[...chat.results,'']
                        }
                        : chat
                )
            )
        }
        setLoadingChats(prevLoadingChats=>({
            ...prevLoadingChats,
            [currentChatId]:true
        }))

        try{
            const modelId = modelData[selectedCompany]?.models
                    ?.find(m => m.name === selectedModel)?.id
            const response= await fetch('http://localhost:3000/',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    message:currentMsg,
                    model:modelId
                })      
            })
            if(!response.ok) throw new Error(`HTTP error! Status:${response.status}`)

            const reader = response.body?.getReader()

            if (!reader) {
                throw new Error('Response body is not readable')
            }

            const decoder = new TextDecoder()

            let fullResponse = ''

            while (true) {
                const { done, value } = await reader.read()

                if (done) break

                const chunk = decoder.decode(value, { stream: true })

                // console.log('RECEIVED:', chunk)
                fullResponse += chunk

                setChats(prevChats =>
                    prevChats.map(chat =>
                        chat.id === currentChatId
                        ? 
                        {
                            ...chat,
                            results: [
                                ...chat.results.slice(0, -1),
                                fullResponse
                            ]
                        }
                        : chat
                    )
                )
            }
            
        }
        catch(error){
            console.log('Error posting data: ',error)
            setShowErrorModal(true)

        }
        finally{
            setLoadingChats(prevLoadingChats=>({
            ...prevLoadingChats,
            [currentChatId]:false
        }))

        }
    }

    
    function handleKeyDown(e){
        if(e.key==='Enter'  && !e.shiftKey && drafts[draftKey]?.trim()){
            e.preventDefault()
            handleSubmit(e)
            console.log('enter is pressed')
        }
    }


    return (
        <form onSubmit={handleSubmit} className={'bg-[#f7f7f7]/50 w-full min-w-0 max-h-[300px] max-w-[768px] flex flex-col mx-auto sm:border-b-0 rounded-3xl sm:rounded-b-none sm:rounded-t-3xl border-[8px] border-[#ebebeb]/80 py-3 px-1'}>
            <textarea ref={textAreaRef} onKeyDown={handleKeyDown} value={drafts[draftKey]?? ''} onChange={(e) => handleChange(e.target.value)} className={'text-[#363636] placeholder-[#585858]/60 resize-none focus:outline-none px-2 pb-3'} rows={2} placeholder='Type your message here...'></textarea>
            <div className={'w-full flex justify-between px-1'}>
                <div className={'flex gap-2'}>

                    {isCompactActions && (
                        <>
                            <button type='button' className="cursor-pointer rounded-full px-2 text-[#585858] hover:bg-[#c9c9c9]/40">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus size-5" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                            </button>
                        </>
                    )}


                    <FormDropupMenu selectedModel={selectedModel} setSelectedModel={setSelectedModel} selectedCompany={selectedCompany} setSelectedCompany={setSelectedCompany} modelData={modelData} />

                    {!isCompactActions && (
                        <>
                            <button className={btnClass}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12,4.69c0-1.66,1.33-3,2.99-3.01,1.18,0,1.94,.82,2.65,1.65,.94,1.09,1.84,2.27,2.51,3.55,.82,1.55,1.08,3.17,1.27,4.89,.1,.94,.12,1.9-.02,2.84s-.5,1.7-.92,2.56c-.45,.94-.7,2.03-1.26,2.89-.57,.88-1.68,1.46-2.7,1.59-2.19,.28-4.2-1.26-4.48-3.45-.02-.17-.03-.34-.03-.51V4.69Z"></path><path d="M12,17.69c0,.17-.01,.34-.03,.51-.28,2.19-2.29,3.74-4.48,3.45-1.02-.13-2.13-.71-2.7-1.59-.56-.86-.81-1.96-1.26-2.89-.42-.87-.78-1.59-.92-2.56s-.12-1.9-.02-2.84c.19-1.72,.45-3.34,1.27-4.89,.67-1.28,1.57-2.46,2.51-3.55,.71-.83,1.47-1.66,2.65-1.65,1.66,0,3,1.35,2.99,3.01v13Z"></path><path d="M13.32,12.24c-.76-.27-1.28-.96-1.32-1.76-.04,.8-.57,1.5-1.32,1.76"></path></svg>
                                <span>Low</span>
                            </button>
                            <button className={btnClass}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide size-4"><path d="M19.0809 19.0799C18.1512 20.0097 17.0474 20.7472 15.8326 21.2504C14.6178 21.7536 13.3158 22.0126 12.0009 22.0126C10.686 22.0126 9.38403 21.7536 8.16924 21.2504C6.95446 20.7472 5.85067 20.0097 4.92091 19.0799C3.99115 18.1502 3.25363 17.0464 2.75045 15.8316C2.24727 14.6168 1.98828 13.3148 1.98828 11.9999C1.98828 10.685 2.24727 9.38304 2.75045 8.16825C3.25363 6.95346 3.99115 5.84968 4.92091 4.91992" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15.8203 9.80648C15.3735 6.8922 14.0451 4.16416 11.9877 2.00391C11.3017 2.72421 10.6968 3.50764 10.1785 4.34005" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15.4961 15.7512C14.8738 18.0772 13.6765 20.2317 11.9886 22.004C9.42085 19.3079 7.98862 15.7273 7.98862 12.004C7.98862 10.8719 8.12105 9.75289 8.37756 8.66797" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21.9883 12.0039H17.8647" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M11.9805 12.0039H1.98703" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2 2L22 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8.35156 2.68916C10.1622 1.98199 12.1397 1.81784 14.0421 2.21681C15.9445 2.61577 17.6895 3.56055 19.0634 4.93557C20.4374 6.31059 21.3808 8.05624 21.7783 9.95899C22.1758 11.8617 22.0101 13.8391 21.3016 15.6492" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                <span>Search</span>
                            </button>
                            <button className={btnClass}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-paperclip size-4" aria-hidden="true"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path></svg>
                                <span>Attach</span>
                            </button>
                        </>
                    )
                    }
                </div>
                <button
                    disabled={!drafts[draftKey]?.trim()}
                    type='submit'
                    className={`disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[rgb(162,59,103)] font-semibold bg-[rgb(162,59,103)] hover:bg-[#d56698] active:bg-[rgb(162,59,103)] ml-auto rounded-lg p-2 text-pink-50`}
                >
                    {loadingChats[draftKey] ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square size-5!" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2"></rect></svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up size-5!" aria-hidden="true"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
                    }
                </button>
            </div>
        </form>
    )
}
