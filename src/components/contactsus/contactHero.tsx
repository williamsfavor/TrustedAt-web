

export default function ContactHeroSection() {
  return (
    <div className="w-full min-h-[30vh] flex items-center md:py-14 py-14 bg-white flex-col bg-gradient-to-tr from-primary/80 to-primary/20 ">
        <p className='text-gray-100 py-6'>Contact Us</p>
      <div className="flex flex-col items-center">
        <h1 className=" text-4xl md:text-[4em] font-extrabold gap-2 flex">
          <span className=' whitespace-pre-wrap text-center md:leading-18 text-white '>{`We love to hear from\nyou, so let’s talk`}</span>
        </h1>
 
      </div>

      <p className=" md:mt-10 mt-8 md:w-[55%] w-[85%] text-center text-white ">
       Whether you’re a user, partner, or press, we’d love to hear from you. Contact us through the means below, we will definitely get back to you
      </p>

    
    </div>
  );
}
