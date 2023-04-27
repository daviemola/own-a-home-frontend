import Link from "next/link";
import { Fragment } from "react";
import Image from "next/image";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export default function Promo() {
  return (
    <Fragment>
      <section id="promo" className="text-gray-600 bg-gray-100">
        <div className="custom-container px-6 py-12 mx-auto">
          <div className="mt-10 md:mt-11 mb-16">
            <div className="max-w-content bg-[#494CBE] flex items-center mx-auto rounded-3xl p-8 pb-[300px] md:px-[64px] md:pt-[73px] md:pb-[81px]">
              <div className="w-1/2">
                <p className="text-white font-bold text-[28px] leading-[1.25]">
                  Join +2000 People on YouTube
                </p>
                <p className="mt-4 text-[20px] text-white leading-[1.25]">
                  Get latest news on real estate, join over 2000 people on
                  youtube to be the first to know about these updates
                </p>
                <div className="mt-10">
                  <button className="rounded-full flex items-center text-zinc-800 px-6 py-3 bg-white font-semibold text-[18px] leading-[30px]">
                    <span>
                      <BsFillArrowRightCircleFill className="text-[#494CBE] text-xl mr-2" />
                    </span>
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex justify-end">
                  <Image
                    src="/background/imgone.jpg"
                    className="rounded-lg"
                    height={100}
                    width={300}
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
