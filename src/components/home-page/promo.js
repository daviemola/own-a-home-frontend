import Link from "next/link";
import { Fragment } from "react";
import Image from "next/image";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export default function Promo() {
  return (
    <Fragment>
      <section id="promo" className="text-gray-600">
        <div className="custom-container px-6 py-12 mx-auto">
          <div className="mt-10 mb-10">
            <div className="max-w-content grid grid-cols-1 gap-8 md:gap-4 md:grid-cols-2 bg-[#494CBE] mx-auto rounded-3xl p-8 py-24 md:px-[64px]">
              <div className="">
                <p className="text-white font-bold md:text-left text-center text-2xl leading-[1.25]">
                  Join +2000 People on YouTube
                </p>
                <p className="mt-4 md:text-left text-center text-lg text-white leading-[1.25]">
                  Get latest news on real estate, join over 2000 people on
                  youtube to be the first to know about these updates
                </p>
                <div className="my-6 flex justify-center md:justify-start">
                  <button className="rounded-full flex items-center text-zinc-800 px-6 py-3 bg-white font-semibold text-lg leading-[30px]">
                    <span>
                      <BsFillArrowRightCircleFill className="text-[#494CBE] text-xl mr-2" />
                    </span>
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="">
                <div className="flex justify-center md:justify-end">
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
