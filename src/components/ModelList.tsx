import {ModelIcons} from '../data/ModelIcons'
import OthersIcon from './Icons/Others'
export default function ModelList({selectedCompany, setSelectedCompany, searchText, setSelectedModel, setIsMenuOpen, setSearchText, modelData, starredModelsList, setStarredModelsList}){

    const starredModels=Object.values(modelData).flatMap(company=>company.models).filter(model=>starredModelsList.includes(model.name))

    let modelsToDisplay=''

    if(searchText){
        modelsToDisplay=Object.values(modelData).flatMap(company=>company.models).filter(model=> model.name.toLowerCase().includes(searchText) || model.description.toLowerCase().includes(searchText))
    }
    else{
        modelsToDisplay=selectedCompany==='' ? starredModels : modelData[selectedCompany].models
    }

    function handleStarClick(model){
        // console.log(starredModelsList)
        setStarredModelsList((prevStarredModelsList)=>{
            if(prevStarredModelsList.includes(model.name)){
                return prevStarredModelsList.filter(name=>name!==model.name)
            }
            return [...prevStarredModelsList,model.name]
        })
    }

    function handleModelBtnClick(modelName){
        setSelectedModel(modelName)
        setIsMenuOpen(false)
        setSearchText('')
    }

    return(
        <div className="flex flex-1 min-h-0 rounded-b-xl">
            {searchText==='' &&
            (    
                <div className="bg-[#fafafa] scrollbar-none flex flex-col items-center px-1 py-1 overflow-y-auto border-r-1 rounded-tr-xl rounded-bl-xl border-t-1 border-gray-300 ">
                    <button type='button' onClick={()=>setSelectedCompany('')} className='cursor-pointer hover:bg-gray-200 rounded-xl px-3 py-3 text-3xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="fill-yellow-500 text-yellow-600 lucide lucide-star size-6 text-muted-foreground transition-colors group-hover:text-foreground" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                    </button>
                    <div className="w-6 h-px bg-gray-300 my-1" />
                    {Object.values(modelData).map((company) => {
                        const Icon = ModelIcons[company.name] ?? OthersIcon
                        
                        return (
                            <button
                                key={company.name}
                                type="button"
                                onClick={() => {
                                    setSelectedCompany(company.name)
                                }}
                                className="cursor-pointer hover:bg-gray-200 rounded-xl px-3 py-3"
                            >
                                <Icon className="size-6" />
                            </button>
                        )
                    })}
                </div>
            )}
            <div className="flex-1 bg-[#f7f7f7]/10 scrollbar-none flex flex-col gap-2 overflow-y-auto pt-1">

                {(modelsToDisplay.length===0 && searchText!=='') ?
                    
                    (<div className='mt-15 text-sm flex justify-center text-gray-500'>No models found matching "{searchText}"</div>)
                
                    :

                    (modelsToDisplay.map((model)=>{   
                        const company = Object.values(modelData).find(company =>company.models.find(m => m.name === model.name))
                        const Icon = ModelIcons[company.name] ?? OthersIcon
                        return (
                            <button key={model.name} onClick={()=>handleModelBtnClick(model.name)} type='button' className='mx-2 rounded-md px-2 py-2 flex gap-2 items-start text-xs cursor-pointer hover:bg-white'>
                                {((searchText!=='' || selectedCompany==='')) && 
                                    <div className='mt-1 shrink-0'>
                                        <span className='text-xl'>
                                            <Icon className="size-5" />
                                        </span>
                                    </div>
                                }
                                
                                <div className='min-w-0 flex flex-col flex-1 gap-[6px]'>  
                                    <div className='flex min-w-0 justify-between items-center'>
                                        <div className='min-w-0 flex flex-1 gap-1 items-center'>  
                                            <span className='text-gray-700 min-w-0 truncate text-base font-bold'>{model.name}</span>
                                            <span className='min-w-0 truncate text-green-500 font-medium'>{model.price}</span>
                                            <span
                                                role="button"
                                                tabIndex={0}
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    handleStarClick(model)
                                                }}
                                                onKeyDown={(e) => {
                                                    if (e.key === "Enter" || e.key === " ") {
                                                        handleStarClick(model)
                                                    }
                                                }}
                                                className="shrink-0 text-xl cursor-pointer"
                                            >
                                                {starredModelsList.includes(model.name)
                                                    ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star size-4 transition-all fill-yellow-500 text-yellow-600 dark:fill-yellow-400" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                                                    : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star size-4 transition-all" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                                                }
                                            </span>
                                        </div>
                                        <div className='flex shrink-0 gap-2 items-center bg-[#616161]/8 px-[6px] py-[6px] rounded-2xl'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[hsl(168_54%_52%)] lucide lucide-eye size-3.5" aria-hidden="true"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain size-3.5 text-[hsl(263_58%_53%)]" aria-hidden="true"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="size-3.5 text-[hsl(237_55%_57%)]" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(1,0,0,1,-0.694323,-1)"><path d="M15.019,22L18,22C19.097,22 20,21.097 20,20L20,7L15,2L6,2C4.903,2 4,2.903 4,4L4,8.443" fill="none" fillRule="nonzero" stroke="currentColor" strokeWidth="2"></path><path d="M14,2L14,6C14,7.097 14.903,8 16,8L20,8" fill="none" fillRule="nonzero" stroke="currentColor" strokeWidth="2"></path><g transform="matrix(0.631534,0,0,0.631534,0.432392,8.69443)"><path d="M11.525,2.295C11.614,2.115 11.799,2 12,2C12.201,2 12.386,2.115 12.475,2.295L14.785,6.974C15.094,7.599 15.691,8.033 16.38,8.134L21.546,8.89C21.805,8.928 22,9.152 22,9.415C22,9.557 21.942,9.694 21.84,9.794L18.104,13.432C17.604,13.919 17.375,14.622 17.493,15.31L18.375,20.45C18.38,20.48 18.383,20.511 18.383,20.542C18.383,20.833 18.144,21.072 17.853,21.072C17.766,21.072 17.681,21.051 17.604,21.01L12.986,18.582C12.369,18.258 11.63,18.258 11.013,18.582L6.396,21.01C6.32,21.05 6.234,21.072 6.148,21.072C5.857,21.072 5.618,20.832 5.618,20.542C5.618,20.511 5.621,20.48 5.626,20.45L6.507,15.311C6.625,14.623 6.396,13.919 5.896,13.432L2.16,9.795C2.057,9.695 1.998,9.557 1.998,9.414C1.998,9.151 2.194,8.926 2.454,8.889L7.619,8.134C8.309,8.034 8.907,7.599 9.216,6.974L11.525,2.295Z" fill="none" fillRule="nonzero" stroke="currentColor" strokeWidth="3.17"></path></g></g></svg>
                                        </div>
                                    </div>
                                    <div className={'min-w-0 truncate text-left text-xs font-medium text-gray-400'}>
                                        <span>{model.description}</span>
                                    </div>
                                </div>
                            </button>
                        )
                    }))
                }
            </div>
        </div>
    )
}


