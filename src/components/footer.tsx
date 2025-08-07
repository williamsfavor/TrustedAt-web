import BudyIcon from "@/assets/budy.svg";
import budyTalkIcon2 from "@/assets/home/Group 1171274973.png"

export default function PageFooter() {
  return (
    <div className="w-full min-h-[40vh] py-14 pb-2 md:mt-26 gap-6 flex md:px-14 flex-col   justify-center ">
      <div className="w-full flex flex-col md:flex-row justify-center md:px-10 px-5">
        <div className="  md:w-[40%] w-full bg-white h-full md:pr-14 md:px-6 py-6 ">
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <img src={BudyIcon} alt="" />
            </div>
            <div className="flex items-center justify-center">
              <h1 className="font-black text-gray-800">Budytalk</h1>
            </div>
          </div>

          <div className="mt-6 text-sm text-gray-800">
            <p>
              Budytalk is your space to speak, share, and connect through
              voice-first interactions and meaningful conversations.
            </p>
          </div>
        </div>
        <div className="flex w-full  md:w-[70%] md:justify-around">
            <div className=" bg-white md:w-[35%] w-[50%] h-full md:px-6 md:pl-14 py-6 ">
              <h1 className=" font-bold text-gray-500">Who we are</h1>
              <ul className="mt-6 gap-2 flex flex-col">
                <li className="hover:text-primary cursor-pointer w-fit ">About Us</li>
                <li className="hover:text-primary cursor-pointer w-fit ">Privacy Policy</li>
                <li className="hover:text-primary cursor-pointer w-fit ">Terms of Use</li>
                <li className="hover:text-primary cursor-pointer w-fit ">Contact Us</li>
              </ul>
            </div>
            <div className=" bg-white md:w-[35%] w-[50%] h-full md:px-6 py-6 ">
              <h1 className=" font-bold text-gray-500">Get In Touch</h1>

              <ul className="mt-6 gap-2 flex flex-col">
                <li className="hover:text-primary cursor-pointer w-fit">+266 44930 33003</li>
                <li className="hover:text-primary cursor-pointer w-fit">+2568 339403 339</li>
                <li className="hover:text-primary cursor-pointer w-fit">Support@budtalk.com</li>
                <li className="hover:text-primary cursor-pointer w-fit">info@budytalk.com</li>
              </ul>
            </div>
        </div>
        <div className=" bg-white md:w-[40%] h-full md:px-6 py-6 ">
          <h1 className=" font-bold text-gray-500">Use Budytalk On</h1>

          <div className=" gap-4 flex mt-6 md:flex-col md:w-[80%]">
            <button className="px-8 text-sm md:py-5 py-3 bg-primary/80 text-white rounded-full">
              Android Phones
            </button>
            <button className="px-8 text-sm md:py-5 py-3 rounded-full border border-gray-800 text-gray-800">
              IOS Phones
            </button>
          </div>
        </div>
      </div>

      <div className="border-t-gray-500 md:flex hidden justify-between mt-2 py-8 px-6 items-center border-t-2 border-dotted">
        <div className="w-[40%] text-gray-600">
            <p>© 2025 Budytalk Inc. All rights reserved</p>
        </div>
        <div className=" w-[60%] flex  items-center justify-center ">
            <img className=" h-[40px] " src={budyTalkIcon2} alt="" />
        </div>
        <div className="w-[30%]  flex place-content-end">

          <button className="px-8 text-sm py-4  rounded-full  bg-gray-200 text-gray-800">
              Uganda
            </button>
        </div>

      </div>

      <div className=" flex md:hidden flex-col justify-between py-4 px-6 items-center">
      
        <div className="w-full flex justify-between mb-4">

            <div className=" w-[60%] flex  items-center justify-center ">
                <img className=" h-[50px] " src={budyTalkIcon2} alt="" />
            </div>
            <div className="w-[30%]  flex place-content-end">

              <button className="px-8 text-sm py-4  rounded-full  bg-gray-200 text-gray-800">
                  Uganda
                </button>
            </div>
        </div>

          <div className="w-full py-4 text-sm text-gray-600 text-center">
            <p>© 2025 Budytalk Inc. All rights reserved</p>
        </div>

      </div>
    </div>
  );
}
