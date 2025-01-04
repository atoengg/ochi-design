

export const Cards = () => {
    return (
        <>
            <div className="w-full items-center h-screen bg-zinc-100 px-20 flex gap-5">
                <div className="cardContainer h-[50vh] w-1/2">
                    <div className="card relative flex items-center justify-center rounded-xl w-full h-full bg-[#004D43]">
                        <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" className="w-32" />
                        <button className="absolute left-10 bottom-10 px-5 py-1 border border-[#CDEA68] rounded-full text-[#CDEA68]">&copy;2022-2024</button>
                    </div>
                </div>
                <div className="cardContainer w-1/2 h-[50vh] flex gap-5">
                    <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]">
                        <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" className="w-32" />
                        <button className="absolute left-6 text-sm bottom-10 px-5 py-1 border rounded-full uppercase text-white">Rating 5.0 on Clutch</button>
                    </div>
                    <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]">
                        <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" className="w-32" />
                        <button className="absolute left-3 text-sm bottom-10 px-5 py-1 border rounded-full uppercase text-white">Business Bootcamp Alumni</button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
