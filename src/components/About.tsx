import icecream from "assets/images/ice-cream.png";
import grapes from "assets/images/grapes.png";
import creditCard from "assets/images/credit-card.png"
export const About = () => {
    return (
        <div className="grid grid-cols-4 grid-rows-2 gap-12 mt-32 h-96  ">
            <div className="col-span-2 row-span-2 relative overflow-hidden bg-gray-50 p-6 flex flex-col justify-end">
                <span className="z-50 absolute top-6 left-6 text-4xl text-gray-500 opacity-40">01</span>
                <h3 className="z-50 font-bold text-2xl text-gray-800" >Make an online order</h3>
                <p className="z-50 text-base text-gray-500">Order a drink, set time and the place  <br />  and grab your fresh bubbletea</p>
                <img src={icecream} alt="hand" className="z-0 absolute right-0 -top-14" width="500" height="300" />
            </div>

            <div className="col-span-2 row-span-1 relative overflow-hidden  bg-gray-50 p-6 flex flex-col justify-end">
                <span className="absolute top-6 left-6 text-4xl text-gray-500 opacity-40">02</span>
                <h3 className="font-bold text-2xl text-gray-800" >Join Bubbletea Rewards </h3>
                <p className="text-base text-gray-500">Earn points, get free bubbletea and many other price </p>
                <img src={creditCard} alt="credit card" className="absolute transform -rotate-45 w-72 left-2/3 -top-24" />
            </div>

            <div className="col-span-1 row-span-1 relative overflow-hidden  bg-gray-50 p-6 flex flex-col justify-end">
                <span className="absolute top-6 left-6 text-3xl text-gray-500 opacity-40">03</span>
                <h3 className="text-xl font-bold text-gray-800" >Find your <br /> perfect <br /> bubbletea </h3>
                <img src={grapes} alt="grapes" className=" w-44 left-2/4 -top-14 absolute" />
            </div>

            <div className="col-span-1 row-span-1 relative overflow-hidden  bg-red-500 p-6  flex flex-col justify-end">
                <span className="absolute top-6 left-6 text-white"> <ArrowRight /> </span>
                <h3 className="text-xl font-bold text-gray-800" >Go to <br /> Bubbletea Store </h3>

            </div>

        </div>
    )
}

const ArrowRight = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
</svg>