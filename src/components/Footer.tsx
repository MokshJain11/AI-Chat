import { Link} from "react-router-dom"
export default function Footer({isMobileMode, setIsSidebarOpen}) {

        function handleClick(){
            if(window.innerWidth<=768){
                setIsSidebarOpen(false)
            }
        }

    
    return(
        <>
        {isMobileMode ?
            (
                <footer className={'flex items-center justify-around w-full rounded-sm text-center px-2 border-box'}>
                    <Link className={'flex gap-1 bg-[#ad5273]/70 active:bg-[rgb(162,59,103)] px-7 py-4 bg-ad5273 rounded-4xl cursor-pointer text-sm text-white font-semibold'} to='/' onClick={()=>handleClick()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-pen size-5!" aria-hidden="true"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path></svg>
                        <span className="font-bold">New Chat</span>
                    </Link>
                    <a className="rounded-full bg-white text-gray-500 px-2 py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-in" aria-hidden="true"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
                    </a>
                </footer>
            ):(
                <footer className={'w-full rounded-sm text-center px-2 border-box'}>
                    <a className={'text-gray-500 flex items-center justify-start gap-4 px-4 py-3 rounded-lg hover:bg-white'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-in" aria-hidden="true"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
                        <span>Login</span>
                    </a>
                </footer>
            )
        
        }
        </>
    )
}