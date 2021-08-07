import phone from "../assets/images/phone.png"

export const Footer = () => {
    return (
        <div className="grid grid-cols-2">

            <div className="">
                <img src={phone} alt="phone app" className="w-96 mx-auto" />
            </div>
            <div className="felx felx-col justify-evenly items-center">
                <h2 className="text-3xl text-gray-900"> Join <span className="text-yellow-500"> Coctail Rewards</span>, <br /> earn points, get free drinks  </h2>
                <ol className="my-4">
                    <li className="mt-3">
                        <p className="text-gray-400">Step 01</p>
                        <h4 className="text-xl text-gray-800">Download our app or register <span className="text-yellow-500">here</span> </h4>
                    </li>
                    <li className="mt-3">
                        <p className="text-gray-400">Step 02</p>
                        <h4 className="text-xl text-gray-800">Join Bubble<span className="text-yellow-500 font-semibold">team</span></h4>
                    </li>
                    <li className="mt-3">
                        <p className="text-gray-400">Step 03</p>
                        <h4 className="text-xl text-gray-800">Buy dring using your smartphone</h4>
                    </li>
                    <li className="mt-3">
                        <p className="text-gray-400">Step 04</p>
                        <h4 className="text-xl text-gray-800">Earn points and get bubbletea and other prices </h4>
                    </li>
                </ol>
                <a href="!#" className="text-base text-gray-500 underline mt-6"> Learn more about program </a>
            </div>
        </div>


    )
}

