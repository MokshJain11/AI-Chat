import Header from "./Header"
import Footer from "./Footer"
import Search from './Search'
import {useEffect, useState} from 'react'
export default function Sidebar({chats, setChats, isSidebarOpen, setIsSidebarOpen, currentChat, loadingChats}) {

    const [isMobileMode, setIsMobileMode]=useState(false)

    useEffect(()=>{
        const handleResize=()=>{
            if(window.innerWidth>=768){
                setIsMobileMode(false)
            }
            else{
                setIsMobileMode(true)
            }
        }
        handleResize()

        window.addEventListener('resize', handleResize)

        return ()=>window.removeEventListener('resize', handleResize)

    },[])

    return(
        isSidebarOpen &&
        (
            <>
            <div
                className="fixed inset-0 z-10 md:hidden bg-black/80"
                onClick={() => setIsSidebarOpen(false)}
            >
            </div>
            <aside className={`bg-[#ebebeb] py-[10px] fixed inset-y-0 h-dvh flex flex-col gap-1 md:static z-20 ${isMobileMode? 'w-[272px]':'w-[256px]'}`}>
                <Header isMobileMode={isMobileMode} setIsSidebarOpen={setIsSidebarOpen}/>
                <Search chats={chats} setChats={setChats} setIsSidebarOpen={setIsSidebarOpen} currentChat={currentChat} loadingChats={loadingChats}/>
                <Footer setIsSidebarOpen={setIsSidebarOpen} isMobileMode={isMobileMode}/>
            </aside>
            </>
        )
    )
}