import ImageOne from "@/assets/about/Rectangle 42071.png"
import ImageTwo from "@/assets/about/Rectangle 42071(1).png"

export default function VisionStatement(){
    return (
        <div className="w-full py-28 flex flex-col md:flex-row items-center gap-4 justify-center">
            
            <div className="md:w-[30%] w-[90%] p-8 py-10 h-auto bg-[#EEFFD0] rounded-[25px]">
                <div className="w-full h-[200px]">
                    <img src={ImageOne} alt="" />
                </div>

                <div className="mt-18 flex flex-col items-center md:items-baseline gap-4">
                    <h1 className=" font-extrabold text-3xl text-gray-800">
                        Mision Statement
                    </h1>

                    <p className="text-sm text-center md:text-left">
                        To empower real, meaningful connections through voice,
                        video, and expression making professional and social
                        growth more natural, inclusive and global.
                    </p>
                </div>
            </div>
            <div className="md:w-[30%] w-[90%] p-8 py-10 h-auto flex  flex-col-reverse bg-[#DAB2FF] rounded-[25px]">
                <div className="w-full h-[200px] mt-18">
                    <img src={ImageTwo} alt="" />
                </div>

                <div className=" flex flex-col items-center md:items-baseline gap-4">
                    <h1 className=" font-extrabold text-3xl text-gray-800">
                        Mision Statement
                    </h1>

                    <p className="text-sm font-light text-center">
                        A world where communication is authentic, effortless, and full of opportunity regardless of borders or background
                    </p>
                </div>
            </div>

        </div>
    )
}