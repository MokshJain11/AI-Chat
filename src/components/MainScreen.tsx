import DesktopView from './DesktopView'
import {useState, useEffect} from 'react'
import { useOutletContext } from "react-router-dom"
import MobileView from './MobileView'
export default function MainScreeen() {

    type Chat={
        id:string,
        title:string,
        messages:string[],
        results:string[],
        resultStatus:string[]
    }

    const {
        selectedCompany,
        setSelectedCompany,
        selectedModel,
        setSelectedModel,
        chats,
        setChats,
        isSidebarOpen,
        setIsSidebarOpen,
        modelData,
        currentChat,
        drafts,
        setDrafts,
        loadingChats,
        setLoadingChats,
        showErrorModal,
        setShowErrorModal,
        errorMsg,
        setErrorMsg,
        focusTextArea,
        setFocusTextArea
    } = useOutletContext<{
        selectedCompany:string
        setSelectedCompany:React.Dispatch<React.SetStateAction<string>>
        selectedModel:string
        setSelectedModel:React.Dispatch<React.SetStateAction<string>>
        chats: Chat[]
        setChats: React.Dispatch<React.SetStateAction<any[]>>
        isSidebarOpen: boolean
        setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
        modelData: any[]
        currentChat: Chat | undefined
        drafts:Record<string, string>
        setDrafts: React.Dispatch<React.SetStateAction<Record<string, string>>>
        loadingChats: Record<string, boolean>
        setLoadingChats: React.Dispatch<React.SetStateAction<Record<string, boolean>>> 
        showErrorModal:boolean
        setShowErrorModal:React.Dispatch<React.SetStateAction<boolean>>
        errorMsg: string
        setErrorMsg: React.Dispatch<React.SetStateAction<string>>
        focusTextArea: boolean
        setFocusTextArea: React.Dispatch<React.SetStateAction<boolean>>
    }>()


    const [isCompactActions, setIsCompactActions]=useState(false)
    const [isMobile, setIsMobile]=useState(window.innerWidth<640)

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth

            setIsMobile(width<640)
            if (width < 768) {
                setIsCompactActions(true)
            }
            else if (width <= 1028 && isSidebarOpen) {
                setIsCompactActions(true)
            }
            else {
                setIsCompactActions(false)
            }
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [isSidebarOpen])

    return (
        isMobile
            ? <MobileView 
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
                chats={chats}
                setChats={setChats}
                isCompactActions={isCompactActions}
                currentChat={currentChat}
                modelData={modelData}
                drafts={drafts}
                setDrafts={setDrafts}
                loadingChats={loadingChats}
                setLoadingChats={setLoadingChats}
                selectedCompany={selectedCompany}
                setSelectedCompany={setSelectedCompany}
                selectedModel={selectedModel}
                setSelectedModel={setSelectedModel}
                showErrorModal={showErrorModal}
                setShowErrorModal={setShowErrorModal}
                errorMsg={errorMsg}
                setErrorMsg={setErrorMsg}
                focusTextArea={focusTextArea}
                setFocusTextArea={setFocusTextArea}
            />
            : <DesktopView
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
                chats={chats}
                setChats={setChats}
                isCompactActions={isCompactActions}
                currentChat={currentChat}
                modelData={modelData}
                drafts={drafts}
                setDrafts={setDrafts}
                loadingChats={loadingChats}
                setLoadingChats={setLoadingChats}
                selectedCompany={selectedCompany}
                setSelectedCompany={setSelectedCompany}
                selectedModel={selectedModel}
                setSelectedModel={setSelectedModel}
                showErrorModal={showErrorModal}
                setShowErrorModal={setShowErrorModal}
                errorMsg={errorMsg}
                setErrorMsg={setErrorMsg}
                focusTextArea={focusTextArea}
                setFocusTextArea={setFocusTextArea}
            />
    )
}