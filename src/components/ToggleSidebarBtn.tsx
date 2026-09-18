
export default function ToggleSidebarBtn({setIsSidebarOpen}){
    
    const btnClass='text-[#585858] hover:text-[#363636] hover:bg-[#c9c9c9]/40 px-2 py-1 rounded-md'
    return(
        <button
            className={btnClass}
            type="button"
            onClick={() => setIsSidebarOpen(prev => !prev)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-panel-left" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M9 3v18"></path></svg>
            
        </button>
    )
}