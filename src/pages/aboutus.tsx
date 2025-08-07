import AboutHeroSection from "@/components/about/aboutHero";
import DetailsAbout from "@/components/about/detailsAbout";
import ImageOne from "@/assets/about/Group 1171274992.png";
import Dreamers from "@/components/about/dreamers";
import VisionStatement from "@/components/about/visionstatement";

import ImgBelieveOne from "@/assets/about/believe/Rectangle 42070.png";
import ImgBelieveTwo from "@/assets/about/believe/Rectangle 42070(1).png";
import ImgBelieveThree from "@/assets/about/believe/Rectangle 42070(2).png";
import ImgBelieveFour from "@/assets/about/believe/Rectangle 42070(3).png";

import user from '@/assets/about/Rectangle 42061.png'

import ImgeOne from "@/assets/about/Group 1171275003(1).png";

export default function AboutUs() {
  const details = [
    {
      id: 2,
      image: ImageOne,
      title: "From \nConversations to Connections",
      content:
        "Budytalk started with a simple idea: what if social media felt more human again? We envisioned a space where your voice,  not just your text could lead. A place for spontaneous chats, deep conversations, and shared growth between individuals and organizations alike",
    },
  ];

  const believein = [
    {
      image: ImgBelieveOne,
      title: "Listen First",
      content:
        "We believe every meaningful connection begins with understanding so we listen with intention before we speak.",
    },
    {
      image: ImgBelieveTwo,
      title: "Grow Together",
      content:
        "We support each other’s growth — as people, as teams, and as a global community",
    },
    {
      image: ImgBelieveThree,
      title: "Stay Curious",
      content:
        "We ask questions, explore ideas, and stay open to learning every single day",
    },
    {
      image: ImgBelieveFour,
      title: "Respect Always",
      content:
        "We treat every voice with dignity — embracing differences and creating safe spaces for all",
    },
  ];

  return (
    <>
      {/* hero section */}
      <AboutHeroSection></AboutHeroSection>
      {/* our story */}
      <div className="md:py-18 py-14 mt-14 flex items-center justify-center flex-col md:mt-24 ">
        <h1 className=" text-4xl md:text-[2.5em] flex flex-col leading-14 items-center font-extrabold text-gray-800 md:w-[50%] w-full text-center">
          Our Story
        </h1>

        <DetailsAbout reverse={true} info={details}></DetailsAbout>
      </div>
      {/* dreamers */}
      <Dreamers></Dreamers>
      {/* vision statement */}
      <VisionStatement></VisionStatement>
      {/* culture & values */}
      <div className="md:py-18 py-14  flex items-center justify-center flex-col">
        <p className="py-2 text-gray-600">Culture & Values</p>
        <h1 className="md:text-[2.5em] text-3xl flex flex-col leading-14 items-center font-extrabold text-gray-800 md:w-[50%] text-center">
          What We Believe In
        </h1>

        <div className="w-full h-auto py-8 md:px-18 flex items-center justify-center ">
          <div className="grid md:grid-cols-4 grid-cols-2 md:gap-4">
            {Array.from(believein, (_) => (
              <div className="w-[100%] md:min-h-[300px] h-[250px] p-8 px-6  md:p-12 flex flex-col gap-8 md:px-10 ">
                <div className="md:w-[80px] w-[60px] h-[60px] md:h-[80px] ">
                  <img src={_.image} alt="" />
                </div>
                <div className="flex  flex-col gap-2">
                  <h1 className="font-bold text-xl">{_.title}</h1>
                  <p className="text-xs ">{_.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div></div>
        </div>
      </div>

      <div className="w-full flex min-h-[70vh] md:py-12 py-14 items-center justify-center bg-[#E9D2FF]">
        <div className="md:w-[60%] w-[90%] flex items-center flex-col md:flex-row justify-between md:gap-12 gap-6  ">
          <div className="md:w-[48%] w-[60%] h-[90%]">
            <img className="w-[100%] h-[100%]" src={ImgeOne} alt="" />
          </div>
          <div className="md:w-[40%] w-[80%] flex flex-col items-center">
            <h1 className="md:text-[2.5em] text-3xl text-center font-bold md:leading-12.5 text-gray-800">
              We’re Just Getting Started
            </h1>

            <p className="md:mt-6 mt-2 text text-center md:text-left">
              Budytalk is growing. Whether you’re a creator, engineer,
              strategist, or community leader — there’s a space for your voice
              here
            </p>

            <button className="py-5 px-10 bg-[#9A38F6] text-sm mt-6 text-white rounded-full">
              Parner With Us
            </button>
          </div>
        </div>
      </div>
      {/* testimonials */}
      <div className="w-[95%] min-h-[300px] py-28 md:pb-2  gap-5 rounded-[50px] flex items-center justify-center flex-col">
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.457 4.373C10.389 4.057 10.17 3.795 9.87301 3.669C9.73401 3.611 6.42901 2.25 2.11601 3.725C1.88701 3.804 1.69401 3.963 1.57401 4.174C1.44001 4.409 1.00201 5.399 1.00201 8.269C1.00201 10.997 1.40601 11.933 1.64701 12.249C1.71701 12.34 1.80101 12.419 1.89801 12.481C2.10001 12.611 3.25801 13.261 6.28901 13.261C6.98901 13.261 7.58601 13.229 8.09401 13.177C8.06701 13.666 8.02601 14.159 7.97201 14.651C7.78101 16.401 6.47701 17.765 4.80001 17.97C3.97801 18.071 3.39301 18.819 3.49301 19.642C3.58601 20.402 4.23301 20.959 4.98001 20.959C5.04101 20.959 5.10201 20.955 5.16401 20.948C8.23001 20.573 10.611 18.117 10.954 14.976C11.075 13.868 11.136 12.756 11.136 11.672C11.136 11.641 11.135 11.611 11.133 11.581C11.126 7.497 10.485 4.499 10.457 4.373Z"
              className="fill-primary"
            />
            <path
              d="M22.995 11.579C22.988 7.497 22.346 4.5 22.318 4.373C22.25 4.057 22.031 3.795 21.734 3.669C21.595 3.611 18.29 2.25 13.977 3.725C13.748 3.804 13.555 3.963 13.435 4.174C13.301 4.409 12.863 5.399 12.863 8.269C12.863 10.997 13.267 11.933 13.508 12.249C13.577 12.34 13.662 12.419 13.759 12.481C13.961 12.611 15.119 13.261 18.15 13.261C18.85 13.261 19.447 13.229 19.955 13.177C19.927 13.667 19.887 14.159 19.833 14.651C19.642 16.401 18.338 17.765 16.661 17.97C15.839 18.071 15.254 18.819 15.354 19.641C15.447 20.402 16.094 20.959 16.841 20.959C16.902 20.959 16.963 20.955 17.025 20.948C20.091 20.573 22.472 18.117 22.815 14.976C22.936 13.87 22.998 12.758 22.998 11.672C22.998 11.64 22.997 11.609 22.995 11.578V11.579Z"
              className="fill-primary"
            />
          </svg>
        </div>
        <p className="md:w-[50%] w-[90%] text-center font-medium text-3xl md:text-[2em] text-gray-800">
          Budytalk gave me the space to speak my truth and build a following all
          from my voice
        </p>

        <div className="flex gap-5 items-center mt-5">
          <div className="md:w-[70px] md:h-[70px] w-[50px] h-[50px]  rounded-full">
            <img src={user}></img>
          </div>

          <div>
             <p className="font-semibold text-sm md:text-md">— Brian O.</p>
            <p className="md:text-sm text-xs" >Student & Budytalk Creator</p>
          </div>
        </div>
      </div>
    </>
  );
}
