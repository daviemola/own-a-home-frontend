import React, { Fragment } from "react";
import { BsTelephone, BsWhatsapp } from "react-icons/bs";

export default function SideSection() {
  return (
    <Fragment>
      <div className="mt-11">
        <div className="grid grid-cols-2 gap-2">
          <img
            src="/house/hse-five.jpg"
            alt="house"
            className="rounded-md h-40"
          />
          <img
            src="/house/hse-four.jpg"
            alt="house"
            className="rounded-md h-40"
          />
          <img
            src="/house/hse-one.jpg"
            alt="house"
            className="rounded-md h-40"
          />
          <img
            src="/house/hse-three.jpg"
            alt="house"
            className="rounded-md h-40"
          />
          <img
            src="/house/hse-two.jpg"
            alt="house"
            className="rounded-md h-40"
          />
          <img
            src="/house/hse-five.jpg"
            alt="house"
            className="rounded-md h-40"
          />
        </div>
      </div>
      <div className="top-44 sticky self-start w-full">
        <div className="w-full mt-8 rounded-xl border border-gray-200 shadow-md">
          <div className="px-6 pt-8 flex items-center border-b border-gray-200">
            <div className="mb-4">
              <p className="uppercase text-left pb-2 border-blue-800">
                Property Price
              </p>
              <p className="font-semibold">NGN 18,000,000</p>
            </div>
          </div>
          <div className="px-6 rounded-md pb-12 pt-4">
            <div className="py-2">
              <p>PROPERTY TITLE</p>
              <p className="font-semibold">Free Hold</p>
            </div>
            <div className="pb-4">
              <p>PAYMENT PLANS</p>
              <p className="font-semibold">0 - 3 Months (No interest)</p>
              <p className="font-semibold">4 - 6 Months (10%)</p>
            </div>

            <div className="mt-2">
              <button className="w-full font-semibold mt-2 rounded-lg bg-[#494CBE] flex items-center justify-center gap-2 text-white px-6 py-2">
                <BsTelephone />
                Request Info
              </button>
              <button className="w-full font-semibold mt-2 rounded-lg border border-green-600 flex items-center justify-center gap-2 text-green-600 px-6 py-2">
                <BsWhatsapp />
                Message on Whatsapp
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
