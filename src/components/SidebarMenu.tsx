import ToggleSidebarBtn from "./ToggleSidebarBtn";

export default function SidebarMenu({setIsSidebarOpen}){
    const btnClass='text-[#585858] hover:text-[#363636] hover:bg-[#c9c9c9]/40 px-2 py-1 rounded-md'
    return(
        <div className={'bg-[#ebebeb] flex gap-1 mx-1 px-1 py-1 rounded-md'}>
            <ToggleSidebarBtn setIsSidebarOpen={setIsSidebarOpen}/>
            <button className={btnClass}>🔍︎</button>
            <button className={btnClass} disabled={true}>+</button>
        </div>
    )
}