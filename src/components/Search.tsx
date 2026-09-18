import { useState } from "react"
import { Link} from "react-router-dom"

export default function Search({chats, setChats, setIsSidebarOpen, currentChat, loadingChats}) {

    const [searchThread, setSearchThread]=useState('')

    const chatHistory=(searchThread==='') ? chats : chats.filter((chat=>chat.title.includes(searchThread)))

    function handleClick(){
        if(window.innerWidth<=768){
            setIsSidebarOpen(false)
        }
    }
    
    return(
        <>
        <form className={'flex flex-col gap-2 border-box p-3 gap'}>
            <label className={'text-sm flex gap-1 pl-2 pb-2 items-center border-b-1 border-[#dbdbdb] '}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search mr-3 -ml-[3px] size-4! min-w-4 text-[#616161]" aria-hidden="true"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
                <input onChange={(e)=>setSearchThread(e.target.value)} value={searchThread} className={'placeholder-[#585858]/45 text-[#4d4d4d] w-full focus:outline-none'} type='search' placeholder='Search your threads...'/>
            </label>
        </form>
        <nav className={'flex flex-col gap-1 flex-1 px-3 overflow-y-auto'}>
            {
                chatHistory.map((chat)=>{
                    return(
                        <Link key={chat.id} onClick={()=>handleClick()} to={`/chat/${chat.id}`} className={`${currentChat?.id===chat.id ? 'bg-white':''} flex items-center gap-2 text-sm rounded-lg hover:bg-white text-gray-600 color-gray-300 px-3 py-2`}>
                            <div className="flex-1 min-w-0 truncate">{chat.title}</div>
                            {loadingChats[chat.id] &&
                                <span className="size-5 rounded-full border-2 border-gray-400 border-t-transparent animate-spin"></span>
                            }
                        </Link>
                        )
                })
            }
        </nav>
        </>
    )
}
