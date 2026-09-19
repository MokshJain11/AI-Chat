import SidebarMenu from "./SidebarMenu"
import Form from "./Form"
import Conversation from "./Conversation";
import { useEffect, useState } from "react";

export default function DesktopView({isSidebarOpen, setIsSidebarOpen, currentChat, chats, setChats, isCompactActions, modelData, drafts, setDrafts, loadingChats, setLoadingChats, selectedCompany, setSelectedCompany, selectedModel, setSelectedModel, showErrorModal, setShowErrorModal, errorMsg, setErrorMsg, focusTextArea, setFocusTextArea}){


    const [btnSelected, setBtnSelected]=useState('')

    // const prompts = {
    //     default: [
    //         "How does AI work? ",
    //         "Are black holes real? ",
    //         "How many Rs are in the whole strawberry? ",
    //         "What is the meaning of life? "
    //     ],

    //     create: [
    //         "Write a short story about a robot discovering emotions ",
    //         "Help me outline a sci-fi novel set in a post-apocalyptic world ",
    //         "Create a character profile for a complex villain with sympathetic motives ",
    //         "Give me 5 creative writing prompts for flash fiction "
    //     ],

    //     explore: [
    //         "Good books for fans of Rick Rubin",
    //         "Countries ranked by number of corgis ",
    //         "Most successful companies in the world ",
    //         "How much does Claude cost? "
    //     ],

    //     code: [
    //         "Write code to invert a binary search tree in Python ",
    //         "What's the difference between Promise.all and Promise.allSettled? ",
    //         "Explain React's useEffect cleanup function ",
    //         "Best practices for error handling in async/await "
    //     ],

    //     learn: [
    //         "Beginner's guide to TypeScript",
    //         "Explain the CAP theorem in distributed systems ",
    //         "Why is AI so expensive? ",
    //         "Are black holes real? "
    //     ]
    // }

    const draftKey=currentChat?.id ??'new-chat'

    const btnClass=(btnName)=>` ${btnSelected===btnName? 'text-pink-50 bg-[rgb(162,59,103)] hover:bg-[#d56698] active:bg-[rgb(162,59,103)]':''} flex gap-2 text-sm justify-center items-center text-[#585858]/90 bg-[#dbdbdb]/30 hover:bg-[#c9c9c9]/40 font-semibold rounded-4xl px-5 py-2 border-b border-gray-300`
    
    function handleClick(e){
        setBtnSelected('')
        const text=e.currentTarget.textContent?? ''
        setDrafts(prevDrafts=>({
            ...prevDrafts,
            [draftKey]:text
        }))
        setFocusTextArea(true)
    }

    return(
        <main className={`${isSidebarOpen? 'mt-[14px] rounded-tl-xl border-t-1 border-l-1 border-[#d6d6d6]' : 'pt-2' } px-[6px] z-5 min-w-0 min-h-0 flex flex-col flex-1 bg-[#f7f7f7] border-box`}>
                <div className={`flex ${isSidebarOpen? 'justify-end' : 'justify-between'} mb-2`}>
                    {!isSidebarOpen && <SidebarMenu setIsSidebarOpen={setIsSidebarOpen}/>}
                    <div className={`${isSidebarOpen? 'mt-1': ''} bg-[#ebebeb] flex gap-1 px-1 py-1 rounded-md`}>
                        <button className='text-[#585858] hover:text-[#363636] hover:bg-[#c9c9c9]/40 px-2 py-[2px] rounded-md'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock size-4" aria-hidden="true"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                        </button>
                        <button className='text-[#585858] hover:text-[#363636] hover:bg-[#c9c9c9]/40 px-2 py-[2px] rounded-md'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings2 lucide-settings-2 size-4" aria-hidden="true"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
                        </button>
                    </div>
                </div>        
                {(currentChat===undefined && (!drafts[draftKey]?.trim() && !loadingChats[draftKey])) ?
                    (
                        <div className={"overflow-y-auto min-h-0 mt-auto sm:flex-1 w-full max-w-[768px] mx-auto px-10"}>
                            <div className="min-h-full flex flex-col gap-6 items-start pt-[max(15vh,2.5rem)]">
                                <h2 className={'mb-4 sm:mb-0 text-2xl sm:text-3xl flex justify-center sm:block text-[#363636] font-semibold'}>How can I help you?</h2>
                                <div className={'sm:flex gap-4 flex-wrap hidden'}>
                                    <button className={btnClass('create')} onClick={()=>setBtnSelected('create')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles" aria-hidden="true"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                                        <span>Create</span>
                                    </button>
                                    <button className={btnClass('explore')} onClick={()=>setBtnSelected('explore')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-newspaper" aria-hidden="true"><path d="M15 18h-5"></path><path d="M18 14h-8"></path><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"></path><rect width="8" height="4" x="10" y="6" rx="1"></rect></svg>
                                        <span>Explore</span>
                                    </button>
                                    <button className={btnClass('code')} onClick={()=>setBtnSelected('code')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code" aria-hidden="true"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
                                        <span>Code</span>
                                    </button>
                                    <button className={btnClass('learn')} onClick={()=>setBtnSelected('learn')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap" aria-hidden="true"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
                                        <span>Learn</span>
                                    </button>
                                </div>
                                <div className={`${btnSelected==='' ?'block':'hidden'} w-full flex flex-col gap-1`} >
                                    <button onClick={handleClick} className="rounded-md py-2 pl-3 text-left text-[#585858] hover:bg-[#dbdbdb]/50">How does AI work? </button>
                                    <hr className="text-[#dbdbdb]/40"/>
                                    <button onClick={handleClick} className="rounded-md py-2 pl-3 text-left text-[#585858] hover:bg-[#dbdbdb]/50">Are black holes real? </button>
                                    <hr className="text-[#dbdbdb]/40"/>
                                    <button onClick={handleClick} className="rounded-md py-2 pl-3 text-left text-[#585858] hover:bg-[#dbdbdb]/50">How many Rs are in the whole "strawberry"? </button>
                                    <hr className="text-[#dbdbdb]/40"/>
                                    <button onClick={handleClick} className="rounded-md py-2 pl-3 text-left text-[#585858] hover:bg-[#dbdbdb]/50">What is the meaning of life? </button>
                                </div>
                                <div className={`${btnSelected==='create' ?'block':'hidden'} w-full flex flex-col gap-1`} >
                                    <button onClick={handleClick} className="rounded-md py-2 pl-3 text-left text-[#585858] hover:bg-[#dbdbdb]/50">Write a short story about a robot discovering emotions </button>
                                    <hr className="text-[#dbdbdb]/40"/>
                                    <button onClick={handleClick} className="rounded-md py-2 pl-3 text-left text-[#585858] hover:bg-[#dbdbdb]/50">Help me outline a sci-fi novel set in a post-apocalyptic world </button>
                                    <hr className="text-[#dbdbdb]/40"/>
                                    <button onClick={handleClick} className="rounded-md py-2 pl-3 text-left text-[#585858] hover:bg-[#dbdbdb]/50">Create a character profile for a complex villain with sympathetic motives </button>
                                    <hr className="text-[#dbdbdb]/40"/>
                                    <button onClick={handleClick} className="rounded-md py-2 pl-3 text-left text-[#585858] hover:bg-[#dbdbdb]/50">Give me 5 creative writing prompts for flash fiction </button>
                                </div>
                                <div className={`${btnSelected==='explore' ?'block':'hidden'} w-full flex flex-col gap-1`} >
                                    <button onClick={handleClick} className="rounded-md py-2 pl-3 text-left text-[#585858] hover:bg-[#dbdbdb]/50">Good books for fans of Rick Rubin </button>
                                    <hr className="text-[#dbdbdb]/40"/>
                                    <button onClick={handleClick} className="rounded-md py-2 pl-3 text-left text-[#585858] hover:bg-[#dbdbdb]/50">Countries ranked by number of corgis </button>
                                    <hr className="text-[#dbdbdb]/40"/>
                                    <button onClick={handleClick} className="rounded-md py-2 pl-3 text-left text-[#585858] hover:bg-[#dbdbdb]/50">Most successful companies in the world </button>
                                    <hr className="text-[#dbdbdb]/40"/>
                                    <button onClick={handleClick} className="rounded-md py-2 pl-3 text-left text-[#585858] hover:bg-[#dbdbdb]/50">How much does Claude cost? </button>
                                </div>
                                <div className={`${btnSelected==='code' ?'block':'hidden'} w-full flex flex-col gap-1`} >
                                    <button onClick={handleClick} className="rounded-md py-2 pl-3 text-left text-[#585858] hover:bg-[#dbdbdb]/50">Write code to invert a binary search tree in Python </button>
                                    <hr className="text-[#dbdbdb]/40"/>
                                    <button onClick={handleClick} className="rounded-md py-2 pl-3 text-left text-[#585858] hover:bg-[#dbdbdb]/50">What's the difference between Promise.all and Promise.allSettled? </button>
                                    <hr className="text-[#dbdbdb]/40"/>
                                    <button onClick={handleClick} className="rounded-md py-2 pl-3 text-left text-[#585858] hover:bg-[#dbdbdb]/50">Explain React's useEffect cleanup function </button>
                                    <hr className="text-[#dbdbdb]/40"/>
                                    <button onClick={handleClick} className="rounded-md py-2 pl-3 text-left text-[#585858] hover:bg-[#dbdbdb]/50">Best practices for error handling in async/await </button>
                                </div>
                                <div className={`${btnSelected==='learn' ?'block':'hidden'} w-full flex flex-col gap-1`} >
                                    <button onClick={handleClick} className="rounded-md py-2 pl-3 text-left text-[#585858] hover:bg-[#dbdbdb]/50">Beginner's guide to TypeScript </button>
                                    <hr className="text-[#dbdbdb]/40"/>
                                    <button onClick={handleClick} className="rounded-md py-2 pl-3 text-left text-[#585858] hover:bg-[#dbdbdb]/50">Explain the CAP theorem in distributed systems </button>
                                    <hr className="text-[#dbdbdb]/40"/>
                                    <button onClick={handleClick} className="rounded-md py-2 pl-3 text-left text-[#585858] hover:bg-[#dbdbdb]/50">Why is AI so expensive? </button>
                                    <hr className="text-[#dbdbdb]/40"/>
                                    <button onClick={handleClick} className="rounded-md py-2 pl-3 text-left text-[#585858] hover:bg-[#dbdbdb]/50">Are black holes real? </button>
                                </div>
                            </div>
                        </div>
                    ) :
                    (
                        <Conversation currentChat={currentChat} loadingChats={loadingChats}/>
                    ) 
                }
            <Form chats={chats} setChats={setChats} currentChat={currentChat} isCompactActions={isCompactActions} modelData={modelData} drafts={drafts} setDrafts={setDrafts} loadingChats={loadingChats} setLoadingChats={setLoadingChats}  selectedCompany={selectedCompany} setSelectedCompany={setSelectedCompany} selectedModel={selectedModel} setSelectedModel={setSelectedModel}  showErrorModal={showErrorModal} setShowErrorModal={setShowErrorModal} errorMsg={errorMsg} setErrorMsg={setErrorMsg}  focusTextArea={focusTextArea} setFocusTextArea={setFocusTextArea}/>
        </main>
    )
}