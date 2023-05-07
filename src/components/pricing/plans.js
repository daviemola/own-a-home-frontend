import React, { Fragment } from "react";
import CheckIcon from "../svgicons/CheckIcon";

export default function Plans() {
  const array = [
    { title: "Become an Agent", price: 123 },
    { title: "Become an Investor", price: 123 },
    { title: "Join the Community", price: 123 },
  ];
  return (
    <Fragment>
      {array.map((arr, i) => (
        <div key={i} className="">
          <div className={`${i !== 1 ? "md:mt-12 mt-0" : ""}`}></div>
          <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
            <h2 className="text-xl font-bold title-font my-4">{arr?.title}</h2>
            <div className="flex gap-2 text-gray-600 mb-2">
              <div className="flex items-start mt-2">
                <CheckIcon />
              </div>
              <div>
                <p>Pre-booked appointment with investors</p>
              </div>
            </div>
            <div className="flex gap-2 text-gray-600 mb-2">
              <div className="flex items-start mt-2">
                <CheckIcon />
              </div>
              <div>
                <p>Access to Unlisted Properties</p>
              </div>
            </div>
            <div className="flex gap-2 text-gray-600 mb-6">
              <div className="flex items-start mt-2">
                <CheckIcon />
              </div>
              <div>
                <p>Logo placement and branding throughout the campaign cycle</p>
              </div>
            </div>
            <div className="flex gap-2 text-gray-600 mb-6">
              <div className="flex items-start mt-2">
                <CheckIcon />
              </div>
              <div>
                <p>Logo placement and branding throughout the campaign cycle</p>
              </div>
            </div>
            <div className="flex gap-2 text-gray-600 mb-6">
              <div className="flex items-start mt-2">
                <CheckIcon />
              </div>
              <div>
                <p>
                  Branding throughout the campaign cycleBranding throughout the
                  divampaign cycle
                </p>
              </div>
            </div>
            <div className="flex gap-2 text-gray-600 mb-0">
              <p>
                $<span className="text-2xl font-bold">{arr.price}</span>/month
              </p>
            </div>

            <button
              className={`flex justify-center font-semibold items-center mt-6 ${
                i === 1 ? "bg-indigo-600 text-white" : "text-indigo-600"
              }  bg-gray-200 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded`}
            >
              Choose
            </button>
          </div>
        </div>
      ))}
    </Fragment>
  );
}
