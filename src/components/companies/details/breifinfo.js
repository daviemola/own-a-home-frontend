import Contact from "@/components/svgicons/Contact";
import Speciality from "@/components/svgicons/Speciality";
import Star from "@/components/svgicons/Star";
import Verified from "@/components/svgicons/Verified";
import Image from "next/image";
import React, { Fragment } from "react";
import { BsGlobe } from "react-icons/bs";
import FullStar from "../../svgicons/FullStar";
import OutlineStar from "../../svgicons/OutlineStar";

function BriefInfo({}) {
  return (
    <Fragment>
      <div className="top-28 sticky self-start w-full">
        <div className="border-2 rounded-xl shadow border-gray-200 border-opacity-50">
          <div className="flex sm:flex-row flex-col p-8">
            <div>
              <div className="mb-4 flex justify-between flex-shrink-0">
                <Image
                  src={"/companies/virginislands.jpeg"}
                  className="rounded-md border border-zinc-800"
                  height={70}
                  width={70}
                  alt="image"
                />
                <div className="flex items-start">
                  <span className="flex items-center">
                    <span>Verified</span>
                    <span className="">
                      <Verified />
                    </span>
                  </span>
                </div>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-1">
                  Middlechase Property Ltd
                </h2>
                <p className="leading-relaxed text-base">
                  Fairfield Apartments, Ibeju Lekki, Nigeria
                </p>
              </div>
            </div>
          </div>
          <div className="p-8 border-t border-gray-200 bg-gray-50">
            <div className="md:flex md:flex-col flex-col space-y-4 justify-between">
              <div className="flex space-x-4">
                <Speciality />
                <div>
                  <h4 className="text-gray-400 uppercase">Speciality</h4>
                  <p className="text-gray-900">Sales and Marketing</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <Star />
                <div>
                  <h4 className="text-gray-400 uppercase">Rating</h4>
                  <div className="flex items-center">
                    <span className="font-semibold">4.2</span>
                    <span className="flex items-center">
                      <FullStar />
                      <FullStar />
                      <FullStar />
                      <FullStar />
                      <OutlineStar />
                    </span>
                    <span>(28)</span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <Contact />
                <div>
                  <h4 className="text-gray-400 uppercase">Contact</h4>
                  <p className="pb-[0.5] border-none md:border-b-2 border-gray-700 text-gray-900">
                    proptyhelp@gmail.com
                  </p>
                  <p className="pb-[0.5] border-none md:border-b-2 border-gray-700 text-gray-900">
                    +23490 - 8888- 9999
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <button className="rounded-md px-4 py-2 my-2 bg-indigo-200 text-[#494CBE] w-full justify-center flex items-center">
                  <BsGlobe className="mr-2" />
                  Website
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default BriefInfo;
