
export const Featured = () => {
    return (
        <>
            <div className="w-full py-20">
                <div className="w-full px-20 border-b border-zinc-700 pb-20">
                    <h1 className="text-8xl font-neuemontreal tracking-tight">Featured projects</h1>
                </div>
                <div className="px-20 mt-20">
                    <div className="cards flex gap-10 w-full">
                        <div className="cardContainer relative w-1/2 h-[75vh] rounded-md">
                            <h1 className="absolute left-full z-[9] text-8xl -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] font-founders">
                            {"LOREM".split("").map((item, index) => (
                                <span key={index}>{item}</span>
                            ))}
                            </h1>
                            <div className="card w-full h-full rounded-xl overflow-hidden">
                                <img src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" className="w-full h-full bg-cover bg-center" alt="" />
                            </div>
                        </div>

                        <div className="cardContainer relative w-1/2 h-[75vh] rounded-md">
                            <h1 className="absolute right-full z-[9] text-8xl translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] font-founders">
                            {"IPSUM".split("").map((item, index) => (
                                <span key={index}>{item}</span>
                            ))}
                            </h1>
                            <div className="card w-full h-full rounded-xl overflow-hidden">
                                <img src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png" className="w-full h-full bg-cover bg-center" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
