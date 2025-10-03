export function Sidebar(){
    return(
        <div className="flex w-auto">
            <div className="hidden transition-all delay-1000  md:block  w-48 h-screen bg-gray-400" >
            sidebar
            </div>
            <div className="w-screen h-screen bg-blue-600">
                Content
            </div>
        </div>
    )
}