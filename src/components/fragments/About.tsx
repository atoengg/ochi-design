
export const About = () => {
    return (
        <>
            <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl">
                <h1 className="font-neuemontreal text-6xl tracking-tight">
                    Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
                </h1>
                <div className="w-full flex gap-5 pt-10 mt-20 border-t border-[#a1b562]">
                    <div className="w-1/2">
                        <h1 className="text-5xl">Our approach:</h1>
                        <button className="flex items-center gap-10 px-8 py-4 mt-10 uppercase bg-zinc-900 rounded-full text-white">Read More
                            <div className="w-3 h-3 bg-zinc-100 rounded-full">

                            </div>
                        </button>
                    </div>
                    <div className="w-1/2 h-[70vh] bg-red-500 rounded-3xl"></div>
                </div>
            </div>
        </>
    )
}
