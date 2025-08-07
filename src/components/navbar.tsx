import { Link } from "react-router";
import Logo from "../assets/budy.svg";
import { useState } from "react";

export default function NavBar() {

  const [show,setShow] = useState(false);
  return (
    <>
      <div className="w-screen h-[14vh] px-4 md:py-2 bg-white sticky top-0 z-20  flex justify-between md:justify-around items-center">
        <div className="">
          <img src={Logo} className="h-[40px]" alt="" />
        </div>
        <ul className="hidden md:flex ">
          <li className="mx-2 cursor-pointer hover:text-primary">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-2 cursor-pointer hover:text-primary">
            <Link to="/about">About Us</Link>
          </li>
          <li className="mx-2 cursor-pointer hover:text-primary">
            <Link to="/legal">Legal</Link>
          </li>
          <li className="mx-2 cursor-pointer hover:text-primary">
            <Link to="/contactus">ContactUs</Link>
          </li>
        </ul>

        <div className="flex items-center gap-3 md:gap-0">
          <button className=" px-4 py-2 md:px-7 md:py-4  rounded-full bg-primary/70 text-white outline-none text-xs md:text-sm">
            Get The App
          </button>

          <div onClick={()=>setShow(!show)} className="flex flex-col  gap-1 w-[30px] md:hidden cursor-pointer">
            <div className="w-full h-[5px] rounded-full bg-gray-800"></div>
            <div className="w-full h-[5px] rounded-full bg-gray-800"></div>
            <div className="w-full h-[5px] rounded-full bg-gray-800"></div>
          </div>
        </div>
      </div>
      {show?
         <div className="w-full h-full bg-white fixed  top-22 left-0 z-20 ">
        <div className="flex w-full px-4 py-4 items-center justify-between">
          <div className="h-[50px]">
            <img src={Logo} className="h-full" alt="" />
          </div>

          <button className="text-5xl text-gray-800 cursor-pointer hover:text-red-600"> 
            &times;
          </button>
        </div>

           <ul className="space-y-6 py-4 mt-8 px-4">
          <li className="mx-2 cursor-pointer hover:text-primary">
            <Link to="/">Home</Link>


          </li>
          <li className="mx-2 cursor-pointer hover:text-primary">
            <Link to="/about">About Us</Link>
          </li>
          <li className="mx-2 cursor-pointer hover:text-primary">
            <Link to="/legal">Legal</Link>
          </li>
          <li className="mx-2 cursor-pointer hover:text-primary">
            <Link to="/contactus">ContactUs</Link>
          </li>
        </ul>
        
      </div>
      
      :<></>}
     
    </>
  );
}
