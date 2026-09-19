import { Fragment } from "react/jsx-runtime"
import Markdown from 'react-markdown';
export default function Conversation({currentChat, loadingChats}){

    return(
        <div className="flex flex-col flex-1 gap-3 min-h-0 overflow-y-auto mx-auto py-3 px-3 w-full max-w-[768px]">
            {
                currentChat?.messages.map((message,index)=>{
                    return(
                        <Fragment key={index}>
                            <div className="self-end max-w-[600px] [overflow-wrap:anywhere] bg-[#ebebeb] rounded-xl text-[#585858] px-4 py-3">{message}</div>
                            {
                                !currentChat?.results[index] &&
                                loadingChats[currentChat?.id] &&
                                index === currentChat?.messages.length - 1
                                ? (
                                    <div className="flex gap-1 px-2 py-3">
                                        <span className="size-2 rounded-full bg-gray-400 animate-pulse"></span>
                                        <span className="size-2 rounded-full bg-gray-400 animate-pulse [animation-delay:150ms]"></span>
                                        <span className="size-2 rounded-full bg-gray-400 animate-pulse [animation-delay:300ms]"></span>
                                    </div>
                                )
                                : (
                                    <>
                                        {currentChat?.resultStatus[index] === 'error' ? (
                                            <div className="mt-3 rounded-lg bg-red-500/15 px-4 py-3 text-sm text-[#82181a]">
                                                Failed to generate a response.
                                            </div>
                                        ) : (
                                            <Markdown>
                                                {currentChat?.results[index]}
                                            </Markdown>
                                        )}

                                        {currentChat?.resultStatus[index] === 'stopped' && (
                                            <div className="mt-3 rounded-lg bg-red-500/15 px-4 py-3 text-sm text-[#82181a]">
                                                Stopped by user
                                            </div>
                                        )}
                                    </>
                                )
                            }
                        </Fragment>
                    )
                })
            }
        </div>
    )
}
