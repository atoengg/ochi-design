import { BsArrowRight } from "react-icons/bs"
import { getStarted } from "../../constant/getStarted"
import { header } from "../../constant/header"


export const LandingPage = () => {
    return (
        <>
            <div className="w-full h-screen pt-1">
                <div className="textStructure mt-40 px-20">
                    {header.map((item, index) => (
                        <div className="masker" key={index}>
                            <div className="w-fit flex items-end overflow-hidden gap-2">
                                {index === 1 && <div className="w-[9vw] h-[6.3vw] relative -top-[2px] bg-zinc-700 rounded-md"></div>}
                                <h1 className="uppercase text-9xl leading-[7.5vw] tracking-wide font-medium font-founders">{item.content}</h1>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="border-t border-zinc-700 mt-32 flex justify-between items-center px-20 py-4 font-neuemontreal">
                    {getStarted.map((item, index) => (
                        <p key={index} className="text-md font-light tracking-tight leading-none ">{item.content}</p>
                    ))}
                    <div className="start flex items-center gap-2 cursor-pointer">
                        <div className="px-5 py-2 border border-zinc-700 rounded-full text-sm uppercase">
                            start the project
                        </div>
                        <div className="p-2 rounded-full border border-zinc-700 flex items-center justify-center">
                            <span className="-rotate-[45deg]">
                                <BsArrowRight size={18} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
