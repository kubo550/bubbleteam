import coctail1 from "../assets/images/coctail-card1.png"
import coctail2 from "../assets/images/coctail-card2.png"
import coctail3 from "../assets/images/coctail-card3.png"
export const Offer = () => {
    return (
        <div className="realtive mt-11 ">
            <div className="h-72 bg-yellow-500 w-full transform z-10 flex items-center justify-center font-bold" >
                <h1 className="text-3xl text-white  transform -translate-y-16 z-50"> Exclusive offers </h1>
            </div>

            <div className="grid grid-cols-3 gap-12 transform -translate-y-36 px-20">
                <div className="bg-white h-96 flex flex-col items-center col-span-1 py-1 shadow-xl">
                    <img src={coctail2} alt="tea" className="w-4/12 transform translate-x-5" />
                    <p className="text-gray-400 my-2"> Grande * 550ml </p>
                    <h3 className="text-gray-800 text-2xl font-semibold text-center">Coconut Milk Mocha Macchiato</h3>
                    <h4 className="text-yellow-500 text-3xl font-bold mt-2"> $4.35</h4>
                </div>

                <div className="bg-white h-96 flex flex-col items-center col-span-1 py-1 shadow-xl">
                    <img src={coctail1} alt="tea" className="w-4/12 transform translate-x-2" />
                    <p className="text-gray-400 my-2"> Grande * 550ml </p>
                    <h3 className="text-gray-800 text-2xl font-semibold text-center">Coconut Milk Mocha Macchiato</h3>
                    <h4 className="text-yellow-500 text-3xl font-bold mt-2"> $4.35</h4>
                </div>

                <div className="bg-white h-96 flex flex-col items-center col-span-1 py-1 shadow-xl">
                    <img src={coctail3} alt="tea" className="w-8/12" />
                    <p className="text-gray-400 my-2"> Grande * 550ml </p>
                    <h3 className="text-gray-800 text-2xl font-semibold text-center">Coconut Milk Mocha Macchiato</h3>
                    <h4 className="text-yellow-500 text-3xl font-bold mt-2"> $4.35</h4>
                </div>


            </div>


        </div>
    )
}
