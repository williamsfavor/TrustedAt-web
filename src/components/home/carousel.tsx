import type { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

export default function PageCarousel() {
  const options: EmblaOptionsType = {
    loop: true,
    slidesToScroll: 1,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const slides = [
    { id: 1, title: "Slide 1", bgColor: "#E7FFFB" },
    { id: 2, title: "Slide 2", bgColor: "#FFFAF5" },
    { id: 3, title: "Slide 3", bgColor: "#E8E5FF" },
  ];

  return (
    <div className="w-full h-auto mx-auto md:py-8 py-18 pt-0 overflow-hidden">
      <div className=" relative" ref={emblaRef}>
        <div className="flex h-auto relative">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={`flex-[0_0_70%]  flex items-center justify-center`}
            >
              <div
                className=" md:w-[95%] mx-3  md:min-h-[350px]  md:py-28 py-10 gap-5 md:rounded-[50px] rounded-[20px] flex items-center justify-center flex-col"
                style={{ backgroundColor: slide.bgColor }}
              >
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
                <p className="md:w-[50%] w-[90%] text-center font-bold text-md  md:text-lg text-gray-800">
                  I’ve made real connections through the app. It feels more
                  natural than anything I’ve used before.
                </p>

                <div className="flex gap-5 items-center mt-5">

                    <div className="md:w-[70px] md:h-[70px] w-[35px] h-[35px] bg-gray-200 rounded-full"></div>

                    <div>
                        <p className="font-semibold text-sm md:text-md">— Brian O.</p>
                        <p className="md:text-sm text-xs" >Student & Budytalk Creator</p>
                    </div>

                </div>
              </div>
            </div>
          ))}
        </div>

           <div className="flex md:w-[60%] w-[30%] justify-between absolute md:top-[50%] left-[50%] md:translate-y-[-50%] translate-y-[40%] translate-x-[-50%] gap-2">
            <button
              onClick={() => emblaApi && emblaApi.scrollPrev()}
              className="bg-white shadow-lg rounded-full w-[50px] h-[50px] flex items-center justify-center cursor-pointer hover:shadow-xl"
            >
              <svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.6042 8.74957C22.6053 8.94149 22.5685 9.13175 22.4959 9.30943C22.4233 9.48711 22.3164 9.64872 22.1812 9.78498L15.4875 16.4641C15.3508 16.5997 15.2423 16.761 15.1683 16.9387C15.0942 17.1164 15.0561 17.307 15.0561 17.4996C15.0561 17.6921 15.0942 17.8827 15.1683 18.0604C15.2423 18.2381 15.3508 18.3994 15.4875 18.535L22.1812 25.2141C22.4558 25.4888 22.6101 25.8612 22.6101 26.2496C22.6101 26.6379 22.4558 27.0104 22.1812 27.285C21.9066 27.5596 21.5342 27.7139 21.1458 27.7139C20.9535 27.7139 20.7631 27.676 20.5855 27.6024C20.4078 27.5288 20.2464 27.421 20.1104 27.285L13.4312 20.5912C12.6327 19.7601 12.1867 18.6522 12.1867 17.4996C12.1867 16.347 12.6327 15.2391 13.4312 14.4079L20.1104 7.71415C20.246 7.57746 20.4073 7.46897 20.585 7.39493C20.7627 7.32089 20.9533 7.28278 21.1458 7.28278C21.3383 7.28278 21.529 7.32089 21.7067 7.39493C21.8844 7.46897 22.0457 7.57746 22.1812 7.71415C22.3164 7.85042 22.4233 8.01202 22.4959 8.1897C22.5685 8.36738 22.6053 8.55764 22.6042 8.74957Z" fill="black"/>
                </svg>

            </button>
            <button
              onClick={() => emblaApi && emblaApi.scrollNext()}
              className="bg-white shadow-lg rounded-full w-[50px] h-[50px] flex items-center justify-center cursor-pointer hover:shadow-xl"
            >
              <svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
           
            <path d="M12.3958 26.2504C12.3947 26.0585 12.4315 25.8682 12.5041 25.6906C12.5766 25.5129 12.6836 25.3513 12.8187 25.215L19.5125 18.5359C19.6492 18.4003 19.7577 18.239 19.8317 18.0613C19.9057 17.8836 19.9439 17.693 19.9439 17.5004C19.9439 17.3079 19.9057 17.1173 19.8317 16.9396C19.7577 16.7619 19.6492 16.6006 19.5125 16.465L12.8187 9.78585C12.5441 9.51124 12.3898 9.13879 12.3898 8.75043C12.3898 8.36208 12.5441 7.98963 12.8187 7.71502C13.0933 7.44041 13.4658 7.28613 13.8541 7.28613C14.0464 7.28613 14.2369 7.32401 14.4145 7.3976C14.5922 7.47119 14.7536 7.57904 14.8896 7.71502L21.5687 14.4088C22.3673 15.2399 22.8132 16.3478 22.8132 17.5004C22.8132 18.653 22.3673 19.7609 21.5687 20.5921L14.8896 27.2858C14.754 27.4225 14.5927 27.531 14.415 27.6051C14.2373 27.6791 14.0467 27.7172 13.8541 27.7172C13.6616 27.7172 13.471 27.6791 13.2933 27.6051C13.1156 27.531 12.9543 27.4225 12.8187 27.2858C12.6836 27.1496 12.5766 26.988 12.5041 26.8103C12.4315 26.6326 12.3947 26.4424 12.3958 26.2504Z" fill="black"/>
            </svg>

            </button>
          </div>
      </div>
   
    </div>
  );
}
