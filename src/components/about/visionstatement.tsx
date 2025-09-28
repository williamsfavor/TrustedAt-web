import ImageOne from "@/assets/about/Rectangle 42071.png"
import ImageTwo from "@/assets/about/Rectangle 42071(1).png"

export default function VisionStatement(){
    return (
      

        <div className="w-full py-28 flex flex-col md:flex-row  items-center gap-4 justify-center">
            
            <div className="md:w-[30%] w-[90%] p-8 lg:py-10 h-auto bg-[#EEFFD0] rounded-[25px]">
                <div className="w-full lg:h-[200px]  flex items-center justify-center">
                    <img src={ImageOne} alt="" />
                </div>

                <div className="mt-18 flex flex-col items-center md:items-baseline gap-4">
                    <h1 className=" font-extrabold text-3xl text-gray-800">
                        Our Vision
                    </h1>

                    <p className="text-sm text-center md:text-left">
                        To redefine professional networking through a secure, verified, 
                        and ethically driven platform that fosters genuine engagement, identity
                        integrity, and career empowerment across borders

                    </p>
                    <p></p>
                    <p></p>
                </div>
            </div>
            <div className="md:w-[30%] w-[90%] p-8 lg:py-10 h-auto flex  flex-col-reverse bg-[#DAB2FF] rounded-[25px]">
                <div className="w-full lg:h-[200px] mt-18 flex items-center justify-center">
                    <img src={ImageTwo} alt="" />
                </div>

                <div className=" flex flex-col items-center md:items-baseline gap-4">
                    <h1 className=" font-extrabold text-3xl text-gray-800">
                        Our Mission
                    </h1>

                    <p className="text-sm font-light text-center md:text-left">
                    To close the trust gap in digital professional relationships 
                    by delivering a secure, privacy-centric platform that enables
                    verified, intentional, and inclusive connections across borders and industries.
                    
                    </p>
                </div>
            </div>

        </div>
     
    )
}