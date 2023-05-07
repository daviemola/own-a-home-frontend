import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export default function ServiceItem({ blog }) {
  return (
    <Fragment>
      <div className={`project-item gallery-item group`}>
        <Link href="#">
          <div>
            <div className="project-img relative before:absolute before:bg-black before:opacity-5 before:w-full before:h-full before:z-[1]">
              <Image
                src="/bg/one.jpg"
                alt={"title"}
                width={472}
                height={400}
                layout="responsive"
                objectFit="cover"
                quality={60}
                priority
                className="rounded-t-md"
              />
            </div>
            <div className="px-6 py-4 bg-white rounded-b-md border-2 border-gray-200">
              <h3 className="text-gray-900 font-semibold my-2 text-lg">
                Verification
              </h3>
              <span className="flex items-center">
                <p className="">
                  We go above and beyond in helping our customers ensure that
                  every property they intend to acquire is legitimate, properly
                  documented and confirmed before payment is made.
                </p>
              </span>
              <button className="rounded-full my-3 border-2 border-[#494CBE] flex items-center text-zinc-800 px-4 py-1 bg-white font-semibold text-sm leading-[30px]">
                <span>
                  <BsFillArrowRightCircleFill className="text-[#494CBE] text-xl mr-2" />
                </span>
                Learn More
              </button>
            </div>
          </div>
        </Link>
      </div>
    </Fragment>
  );
}
