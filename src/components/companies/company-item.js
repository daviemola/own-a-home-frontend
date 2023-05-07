import Image from "next/image";
import React, { Fragment } from "react";
import { BsGlobe } from "react-icons/bs";
import FullStar from "../svgicons/FullStar";
import OutlineStar from "../svgicons/OutlineStar";

function CompanyItem({ company }) {
  return (
    <Fragment>
      <div className="border-2 rounded-xl shadow border-gray-200 border-opacity-50 pt-8">
        <div className="flex sm:flex-row flex-col p-8">
          <div className="px-8 sm:mr-4 sm:mb-0 mb-4 inline-flex items-center justify-center flex-shrink-0">
            <Image
              src={"/companies/virginislands.jpeg"}
              className="rounded-md border border-zinc-800"
              height={70}
              width={70}
              alt="image"
            />
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
        <div className="p-8 border-t border-gray-200 bg-gray-50">
          <div className="md:flex md:flex-row flex-col space-y-3 justify-between">
            <div>
              <h4 className="text-gray-400 uppercase">Speciality</h4>
              <p>Sales and Marketing</p>
            </div>
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
            <div>
              <h4 className="text-gray-400 uppercase">Direction</h4>
              <p className="pb-[0.5] border-none md:border-b-2 border-gray-700">
                Open Map
              </p>
            </div>
            <div className="flex items-center">
              <button className="rounded-md px-4 py-2 bg-[#494CBE] text-white flex items-center">
                <BsGlobe className="mr-2" />
                Website
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CompanyItem;
