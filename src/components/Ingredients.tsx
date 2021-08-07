import ice from "assets/ingredients/ice.png";
import kiwi from "assets/ingredients/kiwi.png";
import lemon from "assets/ingredients/lemon.png";
import mint from "assets/ingredients/mint.png";
import coctail from "assets/ingredients/kiwi-fruit-coctail.png";

export const Ingredients = () => {
    return (
        <div className="h-96 relative mt-32 px-2" >
            <p className="uppercase font-bold text-gray-500  tracking-widest"> Summer 2021 Bestseller </p>
            <h1 className="text-5xl font-bold text-gray-900 mt-4 mb-8"> Kiwi Fruit Coctail</h1>
            <div className="grid grid-cols-4 h-52 w-4/6">
                <div className="flex flex-col items-center justify-evenly border-r-2 border-gray-700">
                    <img src={kiwi} alt="kiwi" className="w-24" />
                    <p className="text-center text-xl text-gray-800 font-semibold tracking-wider">Kiwi</p>
                </div>

                <div className="flex flex-col items-center justify-evenly border-r-2 border-gray-700">
                    <img src={lemon} alt="kiwi" className="w-24" />
                    <p className="text-center text-xl text-gray-800 font-semibold tracking-wider">Green Lemon</p>
                </div>

                <div className="flex flex-col items-center justify-evenly border-r-2 border-gray-700">
                    <img src={mint} alt="kiwi" className="w-24" />
                    <p className="text-center text-xl text-gray-800 font-semibold tracking-wider">Pepermint</p>
                </div>

                <div className="flex flex-col items-center justify-evenly border-r-2 border-gray-700">
                    <img src={ice} alt="kiwi" className="w-24" />
                    <p className="text-center text-xl text-gray-800 font-semibold tracking-wider">Ice Cubs</p>
                </div>
            </div>
            <img src={coctail} alt="coctail" className="absolute  right-10 top-12 w-72 " />
        </div>
    )
}
