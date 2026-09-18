import { useEffect, useState } from 'react'
import { Outlet, useMatch } from 'react-router-dom'
import Sidebar from './Sidebar'
import {ModelIcons} from '../data/ModelIcons'
import ErrorModal from './ErrorModal'

export default function AppLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768)
    const [chats, setChats] = useState([])
    const [modelData, setModelData]=useState({})
    const [drafts, setDrafts]=useState({})
    const [loadingChats, setLoadingChats]=useState({})
    const [selectedModel, setSelectedModel] = useState('')
    const [selectedCompany, setSelectedCompany] = useState('')
    const [showErrorModal, setShowErrorModal] = useState(false)


    const match=useMatch('/chat/:chatId')
    const chatId=match?.params.chatId
    const currentChat=chats.find(chat=>chat.id===chatId)

    useEffect(() => {
        async function getModels() {
            console.log('use effect is running')

            try {
                const response = await fetch('http://localhost:3000/models')

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`)
                }

                const data = await response.json()

                const orderedCompanies = {}

                Object.keys(ModelIcons).forEach((companyKey) => {
                    if (companyKey === 'others') return

                    if (data[companyKey]) {
                        orderedCompanies[companyKey] = data[companyKey]
                    }
                })

                const otherCompanies = Object.keys(data).filter(
                    companyKey => !ModelIcons[companyKey]
                )

                if (otherCompanies.length > 0) {
                    orderedCompanies.others = {
                        name: 'others',
                        models: otherCompanies.flatMap(
                            companyKey => data[companyKey].models
                        )
                    }
                }

                setModelData(orderedCompanies)

                // Select random company/model from the processed data
                const companies = Object.values(orderedCompanies)

                const randomCompany =
                    companies[Math.floor(Math.random() * companies.length)]

                setSelectedCompany(randomCompany.name)

                const randomModel =
                    randomCompany.models[
                        Math.floor(Math.random() * randomCompany.models.length)
                    ]

                setSelectedModel(randomModel.name)

                console.log(orderedCompanies)

            } catch (error) {
                console.error('Error fetching models:', error)
            }
        }

        getModels()
    }, [])
    return (
        <div className="flex h-dvh z-0">
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
                chats={chats}
                setChats={setChats}
                currentChat={currentChat}
                loadingChats={loadingChats}
            />
            <Outlet
                context={{
                    selectedCompany,
                    setSelectedCompany,
                    selectedModel,
                    setSelectedModel,
                    isSidebarOpen,
                    setIsSidebarOpen,
                    chats,
                    setChats,
                    modelData,
                    currentChat,
                    drafts,
                    setDrafts,
                    loadingChats,
                    setLoadingChats,
                    showErrorModal,
                    setShowErrorModal
                }}
            />
            {showErrorModal && <ErrorModal onClose={()=>setShowErrorModal(false)}/>}
        </div>
    )
}