import Image from "next/image";
import React, { Fragment } from "react";

function SideAd({}) {
  return (
    <Fragment>
      <div className="top-28 sticky self-start w-full">
        <div className="rounded-xl bg-zinc-700 border-opacity-50 mx-2 p-8">
          <div className="">
            <h2 className="lg:text-3xl md:text-2xl text-2xl font-semibold text-white">
              Sign Up as a{" "}
              <span className="text-[#FF7B54]">community member</span> to
              receive updates on real estate and the best
            </h2>
            <button className="rounded-md px-8 py-4 my-4 w-full bg-[#494CBE] text-white flex justify-center items-center">
              Search
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SideAd;
