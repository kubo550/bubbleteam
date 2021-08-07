export const Navbar = () => {
    return (
        <nav className="w-full bg-white flex items-center z-50 justify-between px-4 py-3">
            <a href="!" className="text-2xl "> Bubble<span className="text-red-500 font-semibold">Team</span> </a>
            <div className="">
                <button className="px-4 py-2 rounded-sm bg-white text-gray-400 mr-1">Sing in</button>
                <button className="px-4 py-2 rounded-sm bg-yellow-500 text-white">Sing in</button>
            </div>
        </nav>
    )
}
