import { useEffect, useRef, useState } from "react"
import ModelList from "./ModelList"

export default function FormDropupMenu({ selectedModel, setSelectedModel, selectedCompany, setSelectedCompany, modelData }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [searchText, setSearchText] = useState('')
    const [starredModelsList, setStarredModelsList] = useState<string[]>([])
    const containerRef=useRef<HTMLDivElement>(null)

    function handleSearch(e) {
        e.stopPropagation()
        setSearchText(e.target.value)
    }

    useEffect(()=>{
        function handleClickOutside(event){
            if(!containerRef.current?.contains(event.target as Node)){
                setIsMenuOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        console.log('inside useffect of formdropupmenu')

        return ()=>{
            document.removeEventListener('mousedown', handleClickOutside)
        }
    },[])

    return (
        <div ref={containerRef} className="relative flex">
            {isMenuOpen && (
                <>
                    <div
                        onClick={() => setIsMenuOpen(false)}
                        className="fixed inset-0 z-40 bg-black/40 sm:hidden"
                    />
                    <div className="fixed inset-x-0 bottom-0 z-50 h-[85dvh] border border-gray-300 rounded-t-xl bg-[#f7f7f7] flex flex-col sm:absolute sm:inset-x-auto sm:bottom-full sm:left-0 sm:mb-2 sm:w-[450px] sm:h-[550px] sm:rounded-xl">
                        <div className="flex justify-center py-2 sm:hidden">
                            <div className="h-1 w-24 rounded-full bg-gray-300" />
                        </div>
                        <header className={'flex justify-between items-center rounded-t-xl px-3 py-2 bg-[#ad5273]/10'}>
                            <div className="text-sm font-medium py-1">
                                <div className="text-gray-700">Unlock all models</div>
                                <span className="text-gray-500 text-xs"><span className="text-pink-600 font-semibold">$8</span>/month</span>
                            </div>
                            <button className="border-none rounded-lg text-xs px-2 py-2 text-white bg-[rgb(162,59,103)]  hover:bg-[#d56698] font-semibold">Upgrade</button>
                        </header>
                        <div className="bg-[#f7f7f7]/10 flex items-center gap-2 px-4 py-2">
                            <label className="flex flex-1 items-center gap-2 py-2 border-b border-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search mr-2.5 size-4 shrink-0 text-muted-foreground/60" aria-hidden="true"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
                                <input onChange={handleSearch} value={searchText} className="flex-1 min-w-0 border-none outline-none [&::-webkit-search-cancel-button]:appearance-none" type='search' placeholder="Search models..." />
                            </label>
                            <button type='button' className="text-[#585858] hover:text-[#363636] hover:bg-[#c9c9c9]/40 px-2 py-2 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-funnel size-4" aria-hidden="true"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
                            </button>
                        </div>
                        <ModelList selectedCompany={selectedCompany} setSelectedCompany={setSelectedCompany} searchText={searchText} setSelectedModel={setSelectedModel} setIsMenuOpen={setIsMenuOpen} setSearchText={setSearchText} modelData={modelData} starredModelsList={starredModelsList} setStarredModelsList={setStarredModelsList} />
                    </div>
                </>
            ) 
            }
            <button
                type='button'
                onClick={() => {
                    setIsMenuOpen(prev => !prev)
                    setSearchText('')
                }}
                className={`${isMenuOpen ? 'bg-[#c9c9c9]/40' : ''} text-sm truncate flex justify-center items-center gap-1 px-2 py-[1px] font-medium text-gray-500 rounded-lg hover:bg-[#c9c9c9]/40`}
            >
                <span>
                    {selectedModel ? 
                        selectedModel : 
                        <div className="flex gap-1 px-2 py-3">
                            <span className="size-2 rounded-full bg-gray-400 animate-pulse"></span>
                            <span className="size-2 rounded-full bg-gray-400 animate-pulse [animation-delay:150ms]"></span>
                            <span className="size-2 rounded-full bg-gray-400 animate-pulse [animation-delay:300ms]"></span>
                        </div>
                    }
                </span>
                <span>
                    {isMenuOpen ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down size-4 text-muted-foreground/60 transition-transform duration-200" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down size-4 text-muted-foreground/60 transition-transform duration-200 rotate-180" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
                    }
                </span>
            </button>
        </div >
    )
}
