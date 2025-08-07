import DreamerOne from "@/assets/about/dreamers/Rectangle 42073(1).png"
import DreamerTwo from "@/assets/about/dreamers/Rectangle 42073(2).png"
import DreamerThree from "@/assets/about/dreamers/Rectangle 42073(3).png"
import DreamerFour from "@/assets/about/dreamers/Rectangle 42073(4).png"
import DreamerFive from "@/assets/about/dreamers/Rectangle 42073.png"

export default function Dreamers() {


const dreamers = [
    {name:"Daniel Chris",image:DreamerFive},
    {name:"Hannah Angel",image:DreamerOne},
    {name:"Michelle Robbinson",image:DreamerTwo},
    {name:"Alex Xavier",image:DreamerThree},
    {name:"Raphael Martin",image:DreamerFour},
];
  return (
    <div className="bg-gray-100 min-h-[40vh] py-12 flex items-center justify-center flex-col">
      <h1 className="md:text-[2.5em] text-3xl w-[90%] md:w-auto flex flex-col md:leading-14 md:py-8 py-4 pt-2 items-center font-extrabold text-gray-800 whitespace-pre-wrap  text-center">
        {`Made by Dreamers, Built for \n Talkers`}
      </h1>
      {/* dreamers */}
        <div className="py-8 w-full flex items-center justify-center h-auto">

            <div className="w-[80%] h-auto grid md:grid-cols-3 md:grid-rows-2 grid-cols-1 grid-rows-1 gap-6 items-center   ">



                {
                    dreamers.map((n)=>(
                        <div className=" gap-4 flex items-center flex-col">
                            <div className="md:w-full w-[90%] md:h-[350px]  md:bg-white overflow-hidden rounded-2xl">
                                <img src={n.image} alt="" />
                            </div>
                            <div className="flex flex-col md:w-auto w-[90%]">
                                <h1 className="font-bold">{n.name}</h1>
                                <p className="text-sm text-gray-400">Product Design Lead</p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    </div>
    
  );
}
