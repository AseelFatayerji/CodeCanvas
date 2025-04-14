function TimeCard({ disc, title }) {
    return (
        <>
            <div className="w-full h-full text-center items-left overflow-hidden p-3">
                <div className="max-h-fit bg-lime-400 rounded-t-3xl p-2 text-white flex flex-row justify-start gap-2">
                    <div className="bg-gray-600 w-[60px] h-[70px] rounded-[10px] top-[10px] left-[10px]"></div>
                    <div className="gap-1 flex flex-col">
                        <p className="bg-slate-600 text-[20px] p-1 font-bold max-w-fit h-fit rounded-[5px] border border-gray-800 left-[70px]">
                            {title}
                        </p>
                        <p className="bg-gray-600 text-[20px] p-1 font-bold max-w-fit h-fit rounded-[5px] border border-gray-800 left-[70px]">
                            ID
                        </p>
                    </div>

                </div>
                <div className="bg-gray-800/50 w-full min-h">
                    {disc}
                </div>

                <div className="mt-2 mx-[5px] border-t-2 border-graybg-gray-800/50 pt-1 flex space-x-4 text-white text-sm">
                    <a href="#">Repository</a>
                    <a href="#">View Demo</a>
                </div>
            </div>

        </>);
}

export default TimeCard;