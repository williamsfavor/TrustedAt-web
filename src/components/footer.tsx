import BudyIcon from "@/assets/icon.png";
import budyTalkIcon2 from "@/assets/icon.png"

export default function PageFooter() {
  return (
    <div className="w-full min-h-[40vh] py-14 pb-2 md:mt-26 gap-6 flex md:px-14 flex-col   justify-center ">
      <div className="w-full flex flex-col sm:items-center bg-white  md:flex-row  md:justify-between  md:px-5 px-5 lg:items-start xl:items-start xl:px-12 lg:px-4">
        <div className="flex-col  lg:w-[30%] md:w-[30%] sm:w-[80%]  sm:items-center md:items-start flex sm:flex-col  w-full bg-white h-full py-6 ">
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <img width="50px" className="rounded-md" src={BudyIcon} alt="" />
            </div>
            <div className="flex items-center justify-center">
              <h1 className="font-black text-gray-800">TrustedAt</h1>
            </div>
          </div>

          <div className="mt-6 md:mt-4  md:text-sm sm:text-center md:text-left sm:text-base text-sm text-gray-800">
            <p>
              TrustedAt is your space to speak, share and connect through meaningful conversations and interactions in a Trusted Space
            </p>
          </div>
        </div>
        <div className="flex w-full   lg:w-[60%]  sm:items-center    md:text-sm sm:w-[60%] md:w-[60%] sm:justify-center xl:pl-12 lg:text-sm lg:items-start xl:text-base xl:items-start  md:justify-evenly">
            <div className=" bg-white md:w-[45%] w-[50%] sm:w-[40%]  h-full sm:flex sm:items-start sm:flex-col md:px-1  py-6 ">
              <h1 className=" font-bold text-gray-500 ">Who we are</h1>
              <ul className="mt-6 md:mt-4 gap-2 flex flex-col sm:text-sm text-sm">
                <li className="hover:text-primary cursor-pointer w-fit ">About Us</li>
                <li className="hover:text-primary cursor-pointer w-fit ">Privacy Policy</li>
                <li className="hover:text-primary cursor-pointer w-fit ">Terms of Use</li>
                <li className="hover:text-primary cursor-pointer w-fit ">Contact Us</li>
              </ul>
            </div>
            <div className=" bg-white md:w-[45%] sm:w-[40%] w-[40%] h-full sm:flex sm:items-start sm:flex-col md:px-1 py-6 ">
              <h1 className=" font-bold text-gray-500 ">Get In Touch</h1>

              <ul className="mt-6 md:mt-4 gap-2 flex flex-col sm:text-sm text-sm ">

                <li className="hover:text-primary cursor-pointer w-fit">info@trustedAt.com</li>
              </ul>
            </div>
        </div>
        <div className=" bg-white lg:w-[30%] md:w-[30%] sm:w-[60%] sm:items-center sm:flex sm:flex-col xl:items-start lg:items-start md:items-start h-full md:text-sm lg:text-sm xl:text-base   py-6 ">
          <h1 className=" font-bold text-gray-500">Use TrustedAt On</h1>

          <div className=" gap-4 flex mt-6 md:mt-4 md:flex-col lg:w-[80%] sm:text-sm text-sm xl:w-[80%] md:w-[98]">
            <button className="px-8 lg:py-3 xl:py-4 md:py-3 sm:py-2 py-2 bg-primary/80 text-white rounded-full">
              Android Phones
            </button>
            <button className="px-8  lg:py-3 xl:py-4 md:py-3 sm:py-2 py-2 rounded-full border border-gray-800 text-gray-800">
              IOS Phones
            </button>
          </div>
        </div>
      </div>

      <div className="border-t-gray-500 lg:text-sm md:flex hidden justify-between mt-2 py-8 px-6 items-center border-t-2 border-dotted">
        <div className="w-[40%] text-gray-600">
            <p>© 2025 TrustedAt by Ekale Investments Ltd. All rights
reserved</p>
        </div>
        <div className=" w-[60%] flex  items-center justify-center ">
            <img className=" h-[50px] rounded-md " src={budyTalkIcon2} alt="" />
        </div>
        <div className="w-[30%]  flex place-content-end">

          <button className="px-8 text-sm py-4  rounded-full  bg-gray-200 text-gray-800">
              Uganda
            </button>
        </div>

      </div>

      <div className=" flex md:hidden flex-col justify-between py-4 px-6 items-center">
      
        <div className="w-full flex justify-center gap-8 mb-4">

            <div className="  flex  items-center justify-center ">
                <img className=" h-[50px] w-[50px]  rounded-md" src={budyTalkIcon2} alt="" />
            </div>
            <div className="w-[30%]  flex place-content-end">

              <button className="px-8 text-sm py-4  rounded-full  bg-gray-200 text-gray-800">
                  Uganda
                </button>
            </div>
        </div>

          <div className="w-full py-4 text-sm text-gray-600 text-center">
            <p>© 2025 TrustedAt Inc. All rights reserved</p>
        </div>

      </div>
    </div>
  );
}


// bg-red-500  sm:bg-blue-500 lg:bg-gray-500 md:bg-green-500 xl:bg-yellow-500