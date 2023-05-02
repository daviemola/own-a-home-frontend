import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

SwiperCore.use([Navigation, Pagination, Autoplay]);
function Hero({ heroItems }) {
  console.log(heroItems);
  const heroImage = ``;
  const heroContent = ``;
  return (
    <Swiper
      className="hero-area"
      speed={500}
      pagination={{ clickable: true, type: "bullets" }}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
    >
      {heroItems?.map((heroItem, i) => {
        return (
          <div className="mx-24" key={i}>
            <SwiperSlide className="" key={i}>
              <div className="mx-">
                <div className={heroImage}>
                  <Image
                    src={heroItem?.image}
                    alt={heroItem?.title}
                    layout="fill"
                    quality={70}
                    priority
                  />
                </div>
                <div className="bg-zinc-900 bg-opacity-[0.40] py-36">
                  <div className="pt-12">
                    <div className={heroContent}>
                      <div className="">
                        <div className="flex justify-center items-center">
                          <div>
                            <div
                              className="text-3xl leading-8 text-center font-bold text-white uppercase md:mb-[20px] mb-[10px] block"
                              dangerouslySetInnerHTML={{
                                __html: heroItem?.title,
                              }}
                            />
                            <h2
                              className="md:text-2xl mx-auto w-1/2 text-white text-center mb-12"
                              dangerouslySetInnerHTML={{
                                __html: heroItem?.heroTitle,
                              }}
                            ></h2>
                            <div className="flex justify-center">
                              <Link href="#">
                                <button className="rounded-full flex items-center text-zinc-800 px-8 py-4 bg-white font-semibold text-[18px] leading-[30px]">
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
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        );
      })}
    </Swiper>
  );
}

export default Hero;
