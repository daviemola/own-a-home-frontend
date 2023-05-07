import Image from "next/image";
import React, { Fragment } from "react";

export default function AboutHero({ services }) {
  return (
    <Fragment>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="custom-container px-5 pt-24 mx-auto">
          <div className="flex justify-center mt-6">
            <span className="text-indigo-700 px-3 uppercase py-1 bg-gray-200 rounded text-center text-base mb-1 font-medium">
              About Us
            </span>
          </div>
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              We believe owning a home <br className="md:block hidden" />
              shouldn’t make you lose sleep.
            </h1>
          </div>
          <div className="flex justify-center">
            <Image
              src="/companies/team.jpg"
              className="rounded-xl"
              height={600}
              width={1200}
              alt="img"
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
}
