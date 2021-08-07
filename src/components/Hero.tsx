import hero from "../assets/images/hero.png"

export const Hero = () => {
    return (
        <div className="w-full relative mt-14 px-2 overflow-hidden">
            <p className="uppercase font-bold text-gray-500  tracking-widest">summer drinks</p>
            <h1 className="text-7xl font-bold text-gray-900 my-8"> Meet our new <br /> <span className="text-yellow-500">Summer</span> Bubbletea </h1>
            <p className="text-gray-500 text-xl">Cold latte and cappuchino, frapuchino, <br /> iced mocha and available in our new summer menu</p>
            <button className="px-5 py-3 bg-red-500 text-white text-xl font-semibold mt-8 rounded-sm">Find out more</button>
            <img src={hero} alt="img" className="absolute right-0 -bottom-14 hidden md:block z-0" />
        </div>
    )
}
