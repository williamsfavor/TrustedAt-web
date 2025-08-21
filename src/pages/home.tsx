import HeroSection from "@/components/home/hero";
import clsx from "clsx";
import DetailsHome from "@/components/home/info";
import Image5 from "@/assets/home/Group 1171275003.png";
import ImageOne from  '@/assets/home/Group 1171274994.png'
import ImageTwo from '@/assets/home/Group 11233243.png'

import ImageFour from '@/assets/home/Group 1171274999.png';
import ImageFive from '@/assets/home/Group 11712749993.png';
import ImageSix from '@/assets/home/Group 1171274998.png'
import ImageSeven from "@/assets/home/Rectangle 42064.png"
import ImageEight from "@/assets/home/Rectangle 42065.png"

import ImageBg from "@/assets/home/Group 1171275007.png";

import PageCarousel from "@/components/home/carousel";


export default function HomePage() {
  const usersOne = [
    { color: "#EBD7FD", name: "mark", message: "Hola, qué tal!" },
    { color: "#FFFAF5", name: "mark1", message: "Habari yako?" },
    { color: "#E7FFFB", name: "mark2", message: "Hello there!" },
    { color: "#FFFFFF", name: "mark3", message: "Hey, what's up?" },
    { color: "#EBD7FD", name: "mark4", message: "Salut, ça va ?" },
    { color: "#FFFFFF", name: "mark5", message: "السلام عليكم" },
    // duplicate them here
    { color: "#EBD7FD", name: "mark", message: "Hola, qué tal!" },
    { color: "#FFFAF5", name: "mark1", message: "Habari yako?" },
    { color: "#E7FFFB", name: "mark2", message: "Hello there!" },
    { color: "#FFFFFF", name: "mark3", message: "Hey, what's up?" },
    { color: "#EBD7FD", name: "mark4", message: "Salut, ça va ?" },
    { color: "#FFFFFF", name: "mark5", message: "السلام عليكم" },
  ];
  const usersTwo = [
    { color: "#EBD7FD", name: "mark", message: "Oli otya" },
    { color: "#FFFAF5", name: "mark1", message: "Salut, ça va ?" },
    { color: "#E7FFFB", name: "mark2", message: "안녕하세요!" },
    { color: "#FFFFFF", name: "mark3", message: "Oi, tudo bem?" },
    { color: "#EBD7FD", name: "mark4", message: "Hallo, wie geht’s?" },
    { color: "#FFFFFF", name: "mark5", message: "Namaste 🙏" },
    // duplicate them here
    { color: "#EBD7FD", name: "mark", message: "Oli otya" },
    { color: "#FFFAF5", name: "mark1", message: "Salut, ça va ?" },
    { color: "#E7FFFB", name: "mark2", message: "안녕하세요!" },
    { color: "#FFFFFF", name: "mark3", message: "Oi, tudo bem?" },
    { color: "#EBD7FD", name: "mark4", message: "Hallo, wie geht’s?" },
    { color: "#FFFFFF", name: "mark5", message: "Namaste 🙏" },
  ];

   const info = [
    {id:1,image:ImageOne,title:'Host or Join Real Conversations',content:'Start public or private audio rooms for discussions, podcasts, or casual chats. VoiceCircles make conversations natural and expressive'},
    {id:2,image:ImageTwo,title:'Go Live, Connect Instantly',content:'Stream your thoughts, events, or product launches in real-time. Engage with viewers using reactions and live chat.'},
    
  ];
   const info2 = [
    {id:1,image:ImageFour,title:'Build Your Personal Brand',content:'Create a rich profile that highlights your skills, projects, and achievements. Let others discover your expertise'},
    {id:2,image:ImageFive,title:'Stay in Touch, Your Way',content:'Direct messaging with voice replies, GIFs, and smart threading. Keep conversations flowing across topics and time.'},
    {id:2,image:ImageSix,title:'Give Your Brand a Voice',content:'Open a company account to showcase your team, share updates, list jobs, and engage followers'},
  ];


  return (
    <div className="mb-8 flex flex-col items-center justify-center ">
      {/* hero section */}
      <HeroSection></HeroSection>
      <div className="flex items-center justify-center pt-2 pb-12  md:py-16 py-10 sm:mt-8">
        <h1 className="text-3xl lg:text-[2.5em] sm:text-3xl md:text-[2.5em] w-[90%] sm:w-[70%] md:w-[60%] lg:w-[60%] text-center flex flex-col items-center font-extrabold text-gray-800 ">
          <span className=" text-wrap">{"Every hello starts a new \n connection on TrustedAt"}</span>
        
        </h1>
      </div>
      <div className=" w-full min-h-[40vh]  md:h-[50vh] md:mt-5 overflow-hidden">
        <div className="flex w-max wrapper-animation">

          {usersOne.map((user) => (
            <div className="mx-[20px] sm:text-sm md:text-sm min-w-[200px] relative ">
              <div className="w-[60px] h-[60px] bg-gray-200 overflow-hidden rounded-full">
                <img
                  className="w-full h-full"
                  src="https://avatar.iran.liara.run/public"
                  alt=""
                />
              </div>
              <div
                className={clsx(
                  "shadow-md w-auto py-2 px-4 absolute left-[38px] top-[40px] rounded-full text-sm"
                )}
                style={{ backgroundColor: user.color }}
              >
                {user.message}
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-max py-16 md:py-20 wrapper-animation-reverse">
          {usersTwo.map((user) => (
            <div className="mx-[20px] min-w-[200px] relative ">
              <div className="w-[60px] h-[60px] bg-gray-200 rounded-full absolute right-0 ">
                <img
                  className="w-full h-full"
                  src="https://avatar.iran.liara.run/public"
                  alt=""
                />
              </div>
              <div
                className={clsx(
                  "shadow-md w-auto py-2 px-4 absolute right-[38px] top-[40px] rounded-full text-sm"
                )}
                style={{ backgroundColor: user.color }}
              >
                {user.message}
              </div>
            </div>
          ))}
        </div>
      </div>

      <DetailsHome info={info} title={true} reverse={true}></DetailsHome>

      <div className="sm:text-sm md:text-sm md:w-full md:rounded-0 lg:w-[85%] xl:w-[80%] py-8 lg:rounded-4xl  flex  items-center justify-center  bg-primary">
        <div className="md:w-[70%] sm:w-[60%] w-[70%] flex flex-col md:flex-row items-center justify-between gap-4 md:gap-12 even:flex-row-reverse ">
          <div className="md:w-[48%] w-[70%]">
            <img className="w-[90%" src={Image5} alt="" />
          </div>
          <div className="lg:w-[40%]  md:w-[40%] w-[90%] flex  flex-col items-center md:items-baseline">
            <h1 className=" md:text-[2em] text-3xl text-center md:text-left font-bold leading-8.5 text-white">
              Your Voice. Your People. Your Space.
            </h1>

            <p className="mt-6 text-white md:text-left text-center ">
              Join thousands already sharing, talking, and growing on TrustedAt.
              Whether you're a creator, professional, or brand, start real
              conversations that matter
            </p>

            <button className="py-3 hidden md:block px-10 bg-[#9A38F6] text-sm mt-6 text-white rounded-[6px]">
                Get the App
            </button>
          </div>
        </div>
      </div>
     
      <DetailsHome info={info2} title={false} reverse={false}></DetailsHome>

      <div className="w-full md:pt-15  flex items-center justify-center flex-col">
          <h1 className=" text-3xl sm:text-[2em] md:text-[2em] lg:text-[2.5em] flex flex-col md:leading-14 leading-12 items-center font-extrabold text-gray-800 md:w-[50%] w-[80%] text-center">
            For Individuals. For Companies. For Connection
          </h1>
      </div>
          {/* discover */}
       <div className="md:w-[80%] w-[90%] mt-14 md:mt-18 md:py-16 py-8 sm:py-8  rounded-4xl  flex items-center justify-center bg-[#EEFFD0]">
        <div className="sm:w-[70%] md:w-[90%] w-[90%] flex flex-col md:flex-row items-center justify-between gap-12 even:flex-row-reverse ">
          <div className="md:w-[48%]  h-full  flex  items-center justify-center ">
            <img className="w-full h-full object-center translate-y-3" src={ImageSeven} alt="" />
          </div>
          <div className="md:w-[40%] w-[80%] flex md:items-start text-sm items-center flex-col md:flex-col ">
            <p className="font-medium">For Individual</p>

            <h1 className="text-3xl sm:text-[2em] md:text-[1.6em] lg:text-[2em] mt-6 md:mt-4 lg:mt-6  text-center md:text-left font-bold leading-8.5 text-gray-800">
              Create. Share. Discover.
            </h1>

            <p className="mt-6 text-gray-800 text-center md:text-left">
           TrustedAt gives you the tools to express your voice through posts, live talks, and VoiceCircles — whether you're a creator, friend, or thinker
            </p>

          
          </div>
        </div>
      </div>

          {/* engage */}

  <div className=" flex items-center justify-center">

       <div className="md:w-[80%] w-[90%] mt-14 md:mt-18 md:py-16 py-8 sm:py-8  rounded-4xl  flex items-center justify-center bg-[#C7E8FF]">
       
        <div className="sm:w-[70%] md:w-[90%] w-[90%] flex flex-col md:flex-row  items-center justify-between gap-12 even:flex-row-reverse ">
          <div className="w-full md:w-[48%] h-full flex items-center justify-center ">
            <img className="w-full h-full  translate-y-3" src={ImageEight} alt="" />
          </div>
          <div className="md:w-[40%] w-[80%] flex md:items-start text-sm items-center flex-col md:flex-col ">
             <p className="font-medium">For Companies</p>

            <h1 className="text-3xl sm:text-[2em] md:text-[1.6em] lg:text-[2em] mt-6 md:mt-4 lg:mt-6 text-center md:text-left font-bold leading-8.5 text-gray-800">
              Engage Your Audience Where It Matters
            </h1>

            <p className="mt-6 md:mt-4 lg:mt-6 text-gray-800 text-center md:text-left">
           TrustedAt gives you the tools to express your voice through posts, live talks, and VoiceCircles — whether you're a creator, friend, or thinker
            </p>

          
          </div>
        </div>
      </div>
  </div>


          {/* why love trustedAt */}
       <div className="w-full  mt-[4em] mb-[3em] md:mt-[8em] sm:mt-[8em]  md:py-4 py-8 mb:mb-18 flex items-center justify-center flex-col">
          <h1 className=" text-3xl md:text-[2.5em] flex flex-col md:leading-14 items-center font-extrabold text-gray-800 sm:w-[40%] md:w-[60%] w-[90%] text-center">
           Why Our Buddies Love TrustedAt
          </h1>

          <p className="sm:w-[40%] md:w-[60%] w-[90%] text-center mt-8">
                Discover how TrustedAt is changing the way people connect, collaborate, and communicate — one voice at a time
          </p>
      </div>
      <PageCarousel></PageCarousel>

      <div className="w-full mt-[4em] mb-10 md:mb-18 flex items-center justify-center flex-col">
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
                      fill="black"
                    />
                    <path
                      d="M22.995 11.579C22.988 7.497 22.346 4.5 22.318 4.373C22.25 4.057 22.031 3.795 21.734 3.669C21.595 3.611 18.29 2.25 13.977 3.725C13.748 3.804 13.555 3.963 13.435 4.174C13.301 4.409 12.863 5.399 12.863 8.269C12.863 10.997 13.267 11.933 13.508 12.249C13.577 12.34 13.662 12.419 13.759 12.481C13.961 12.611 15.119 13.261 18.15 13.261C18.85 13.261 19.447 13.229 19.955 13.177C19.927 13.667 19.887 14.159 19.833 14.651C19.642 16.401 18.338 17.765 16.661 17.97C15.839 18.071 15.254 18.819 15.354 19.641C15.447 20.402 16.094 20.959 16.841 20.959C16.902 20.959 16.963 20.955 17.025 20.948C20.091 20.573 22.472 18.117 22.815 14.976C22.936 13.87 22.998 12.758 22.998 11.672C22.998 11.64 22.997 11.609 22.995 11.578V11.579Z"
                      fill="black"
                    />
                  </svg>
                </div>

        <h1 className="text-3xl md:text-[2.5em] flex flex-col leading-14 items-center font-medium text-gray-800 md:w-[50%] w-[80%] text-center">
          TrustedAt will professionalise the game of social networking
        </h1>
     
      </div>


      {/* dark part:join hundreds */}
        <div className=" md:w-[90%]  lg:w-[80%] lg:h-[80vh] h-[60vh] sm:py-2 md:h-[80vh] overflow-hidden md:overflow-visible bg-black/90 md:mt-18 rounded-0 sm:rounded-0 md:rounded-[40%]  flex items-center justify-center md:bg-[#EEFFD0]">
        
         <img src={ImageBg} className="w-full h-full" alt="" />
          <div className=" w-[80%] sm:w-[70%] md:w-[60%] absolute z-10 flex items-center flex-col">
          
            <h1 className="text-3xl lg:text-[2.7em] md:text-[2em] lg:leading-8 xl:leading-14 mt-6  font-bold md:leading-15 leading-12 text-white text-center">
              Join hundreds of millions of users and try TrustedAt today.
            </h1>

          <div className=" gap-4 flex mt-12 w-full  justify-center md:justify-center items-center">
            <button className="text-sm px-8 lg:py-3 xl:py-4 md:py-3 sm:py-2 py-2 bg-primary/80 text-white rounded-full">
              App Store
            </button>
            <button className=" text-sm px-8 lg:py-3 xl:py-4 md:py-3 sm:py-2 py-2 rounded-full border border-white text-white">
              Google Play
            </button>
      </div>

          
          </div>
        
      </div>
    </div>
  );
}
