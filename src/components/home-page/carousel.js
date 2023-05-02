import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export default function CarouselSection({ heroItems }) {
  const [slide, setSlide] = React.useState(0);
  const [current, setCurrent] = React.useState(0);
  const numberofslides = 6;

  const updateCurrentSlide = () => {
    setCurrent(current + 1);
    if (current + 1 === numberofslides) setCurrent(0);
  };

  const next = (index) => {
    setCurrent(index - 2);
    setSlide(index - 1);
  };

  return (
    <Carousel
      infiniteLoop={true}
      showArrows={false}
      autoPlay={true}
      stopOnHover={false}
      animationHandler="fade"
      swipeable={false}
      showIndicators={true}
      showStatus={false}
      showThumbs={false}
      interval={10000}
      onChange={() => {
        updateCurrentSlide();
      }}
      selectedItem={slide}
    >
      {heroItems.map((item, index) => (
        <div key={index} className="custom-container px-6 pt-24">
          <div className="h-[50vh] bg-opacity-80 bg-zinc-900/90 bg-no-repeat bg-cover bg-[url('/background/bg-img-one.jpg')] rounded-xl flex justify-center">
            <div className="flex justify-center items-center">
              <div>
                <div
                  className="text-2xl leading-8 text-center font-bold text-white uppercase md:mb-4 mb-2 block"
                  dangerouslySetInnerHTML={{
                    __html: item?.title,
                  }}
                />
                <h2
                  className="md:text-xl mx-auto w-1/2 text-white text-center mb-6"
                  dangerouslySetInnerHTML={{
                    __html: item?.heroTitle,
                  }}
                ></h2>
                <div className="flex justify-center">
                  <Link href="#">
                    <button className="rounded-full flex items-center text-zinc-800 px-8 py-3 bg-white font-semibold text-base leading-[30px]">
                      <span>
                        <BsFillArrowRightCircleFill className="text-[#494CBE] text-2xl mr-2" />
                      </span>
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
