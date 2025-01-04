import { BsArrowRight } from "react-icons/bs"


export const BtnStart = () => {
    return (
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
    )
}
