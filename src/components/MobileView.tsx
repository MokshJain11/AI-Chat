import SidebarMenu from "./SidebarMenu"
import Form from './Form'
import Conversation from "./Conversation"


export default function MobileView({isSidebarOpen, setIsSidebarOpen, currentChat, chats, setChats, isCompactActions, modelData, drafts, setDrafts, loadingChats, setLoadingChats, selectedCompany, setSelectedCompany, selectedModel, setSelectedModel, showErrorModal, setShowErrorModal,errorMsg, setErrorMsg, focusTextArea, setFocusTextArea}){
        
    const draftKey=currentChat?.id ??'new-chat'
    return(
        <main className={`h-full min-w-0 min-h-0 flex flex-col flex-1 py-2 px-[6px] z-5 bg-[#f7f7f7] border-box`}>
            <div className={`flex ${isSidebarOpen? 'justify-end' : 'justify-between'} mb-2`}>
                {!isSidebarOpen && <SidebarMenu setIsSidebarOpen={setIsSidebarOpen}/>}
                <div className={`${isSidebarOpen? 'mt-1': ''} bg-[#ebebeb] flex gap-1 mx-1 px-1 py-1 rounded-md`}>
                    <button className='text-[#585858] hover:text-[#363636] hover:bg-[#c9c9c9]/40 px-2 py-[2px] rounded-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock size-4" aria-hidden="true"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                    </button>
                    <button className='text-[#585858] hover:text-[#363636] hover:bg-[#c9c9c9]/40 px-2 py-[2px] rounded-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings2 lucide-settings-2 size-4" aria-hidden="true"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
                    </button>
                </div>
            </div>        
            {(currentChat===undefined) ?
                (
                    <div className="flex flex-col flex-1 min-h-0 justify-center items-center">
                        {drafts[draftKey]==='' && <h2 className={'mb-4 text-2xl flex justify-center text-[#363636] font-semibold'}>How can I help you?</h2>}
                        <Form chats={chats} setChats={setChats} currentChat={currentChat} isCompactActions={isCompactActions} modelData={modelData}  drafts={drafts} setDrafts={setDrafts} loadingChats={loadingChats} setLoadingChats={setLoadingChats} selectedCompany={selectedCompany} setSelectedCompany={setSelectedCompany} selectedModel={selectedModel} setSelectedModel={setSelectedModel} showErrorModal={showErrorModal} setShowErrorModal={setShowErrorModal}  errorMsg={errorMsg} setErrorMsg={setErrorMsg}  focusTextArea={focusTextArea} setFocusTextArea={setFocusTextArea}/>        
                    </div>
                 
                ) :
                (
                    <>
                        <Conversation currentChat={currentChat} loadingChats={loadingChats}/>
                        <Form chats={chats} setChats={setChats} currentChat={currentChat} isCompactActions={isCompactActions} modelData={modelData}  drafts={drafts} setDrafts={setDrafts} loadingChats={loadingChats} setLoadingChats={setLoadingChats} selectedCompany={selectedCompany} setSelectedCompany={setSelectedCompany} selectedModel={selectedModel} setSelectedModel={setSelectedModel} showErrorModal={showErrorModal} setShowErrorModal={setShowErrorModal}  errorMsg={errorMsg} setErrorMsg={setErrorMsg}  focusTextArea={focusTextArea} setFocusTextArea={setFocusTextArea}/>        
                    </>
                ) 
            }
        </main>
    )
}