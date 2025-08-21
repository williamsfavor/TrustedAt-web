import clsx from "clsx";

interface DetailInterface{
    info:Array<any>,
    title:Boolean,
    reverse:Boolean
}

export default function DetailsHome({info,title,reverse}:DetailInterface) {
 
  
  
    return (
    <div className="w-full  sm:pt-12 pb-8 md:py-15 flex items-center justify-center flex-col">
       {
        title?
            <h1 className=" text-3xl md:text-[2.5em] flex flex-col md:leading-14 items-center font-extrabold text-gray-800 w-[90%] md:w-[50%] text-center">
                Everything You Need to Talk, Share, and Grow
            </h1>:<></>
       } 

      <div className="mt-24 flex w-full items-center flex-col">
            {
                info.map((item)=>(

                    <div className={clsx(' w-[80%] sm:w-[60%] md:w-[80%] lg:w-[70%] sm:text-sm flex flex-col  md:flex-row pb-12  md:py-12 items-center md:justify-between gap-12',reverse?'md:even:flex-row-reverse':'md:odd:flex-row-reverse')}>
                        <div className='md:w-[48%] w-[90%] '>
                            <img className='w-[90%' src={item.image} alt="" />
                        </div>
                        <div className='md:w-[40%] w-[90%] flex items-center flex-col lg:items-start '>
                            <h1 className=" text-3xl md:text-[2em] font-bold text-center md:text-left leading-8.5 text-gray-800" >{item.title}</h1>

                            <p className='mt-6 text-center md:text-left'>{item.content}</p>
                        </div>

                    </div>
                ))
            }
      </div>
    </div>
  );
}
