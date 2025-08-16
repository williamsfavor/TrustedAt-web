import heroImage from '@/assets/home/Group 1171275008.png'


export default function HeroSection() {
  return (
    <div className="w-full min-h-[70vh] flex items-center pt-14 md:pt-24 flex-col ">
      <div className="flex flex-col items-center">
        <h1 className=" text-4xl md:text-[4em] font-extrabold gap-2 flex">
          <span>Talk.</span>
          <span>Connect.</span>
          <span>Grow</span>
        </h1>
        <h1 className=" text-4xl md:text-[4em] text-primary font-extrabold gap-2 flex md:-translate-y-2">
          All in One Place
        </h1>
      </div>

      <p className=" text-center mt-4 md:mt-0 w-[80%] md:w-auto">
        Be Seen. Be Safe. Be Trusted
      </p>

      <div className=" gap-4 flex mt-8">
        <button className="px-8 text-sm py-3 bg-primary/80 text-white rounded-full">
          Get the App
        </button>
        <button className="px-8 text-sm py-3 rounded-full border border-primary text-primary">
          Our Features
        </button>
      </div>

      <div className=" w-[90%] rounded-3xl overflow-hidden md:w-[80%] mt-12 md:mt-16">
        <img src={heroImage} className='w-full' alt="" />
      </div>
    </div>
  );
}
