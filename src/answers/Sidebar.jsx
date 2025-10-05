export function Sidebar(){
    return(
        <div className="flex w-auto">
            <div className=" transition-all delay-1000 w-24  md:w-96 h-screen bg-gray-400 dark:bg-white" >
            sidebar
            </div>
            <div className="w-screen h-screen bg-blue-600 dark:bg-pink-400">
                Content
            </div>
        </div>
    )
}