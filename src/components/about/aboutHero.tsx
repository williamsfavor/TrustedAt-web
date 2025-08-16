import heroImage from '@/assets/about/Frame 1171274953.png'


export default function AboutHeroSection() {
  return (
   
     
      <div className="w-full min-h-[70vh] flex items-center pt-14 md:pt-24 flex-col ">
          <p className='text-gray-700'>About Us</p>
        <div className="flex flex-col items-center">
          <h1 className=" text-4xl md:text-[4em] font-extrabold gap-2 flex">
            <span>Refining How The</span>
          </h1>
          <h1 className=" text-4xl md:text-[4em] text-primary font-extrabold gap-2 flex ">
            World Connects
          </h1>
        </div>

        <p className="md:-translate-y-2 md:w-[35%] mt-5 w-[85%] text-center ">
        We’re building a voice-first platform that brings people, professionals, and communities closer through
authentic audio and video conversations
        </p>

        <div className=" md:w-[80%] w-[90%] mt-8 md:mt-16">
          <img src={heroImage} className='w-full' alt="" />
        </div>
      </div>

    
  );
}
