import clsx from "clsx";

interface DetailInterfaceAbout{
    info:Array<any>,
    reverse:Boolean
}

export default function DetailsAbout({info,reverse}:DetailInterfaceAbout) {
 
  
  
    return (
    <div className="w-full py-4 flex items-center justify-center flex-col">
   

       <div className="md:mt-24 mt-8 flex w-full items-center flex-col">
                  {
                      info.map((item)=>(
      
                          <div className={clsx('  md:w-[70%]  flex flex-col md:flex-row pb-12  md:py-12 items-center md:justify-between gap-12',reverse?'md:even:flex-row-reverse':'md:odd:flex-row-reverse')}>
                              <div className='md:w-[48%] w-[90%] '>
                                  <img className='w-[90%' src={item.image} alt="" />
                              </div>
                              <div className='md:w-[40%] w-[90%] flex items-center flex-col '>
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
