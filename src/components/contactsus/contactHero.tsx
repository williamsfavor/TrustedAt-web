

export default function ContactHeroSection() {
  return (
    <div className="w-full min-h-[40vh] flex items-center md:py-24 py-14 bg-white flex-col ">
        <p className='text-gray-700 py-6'>Contact Us</p>
      <div className="flex flex-col items-center">
        <h1 className=" text-4xl md:text-[4em] font-extrabold gap-2 flex">
          <span className=' whitespace-pre-wrap text-center md:leading-18 text-gray-800 '>{`We love to hear from\nyou, so let’s talk`}</span>
        </h1>
 
      </div>

      <p className=" md:mt-10 mt-8 md:w-[55%] w-[85%] text-center ">
       Whether you’re a user, partner, or press, we’d love to hear from you.  Give us that call, email, call or sms us, we shall answer in just minutes
      </p>

    
    </div>
  );
}
