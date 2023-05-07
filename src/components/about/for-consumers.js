import Image from "next/image";
import React, { Fragment } from "react";
import ApproachIcon from "../svgicons/Approach";
import ArrowIcon from "../svgicons/ArrowIcon";
import Contact from "../svgicons/Contact";

export default function ForConsumers({ services }) {
  return (
    <Fragment>
      <section class="text-gray-600 body-font">
        <div class="custom-container mx-auto flex px-5 py-24 md:flex-row flex-col items-center space-y-12">
          <div class="lg:flex-grow mx-auto md:pr-6 lg:pr-20 md:w-2/3 lg:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Here For The Consumers
            </h1>
            <p class="mb-8 leading-relaxed">
              Our agents specialize in multiple areas, and have a thorough
              understanding of the local real estate market. In addition to our
              expertise in traditional real estate transactions, we also offer a
              range of services including [Other Services Offered]. Our goal is
              to make the real estate process as smooth and stress-free as
              possible for our clients
            </p>
            <div class="flex flex-col space-y-4">
              <div className="flex space-x-4 mb-2">
                <div className="md:w-1/6">
                  <ArrowIcon />
                </div>
                <div className="md:w-5/6">
                  <h4 className="text-gray-800 mb-2 text-left font-semibold uppercase">
                    Our Mission
                  </h4>
                  <p className="pb-[0.5] border-none text-left md:border-b-2 border-gray-700 text-gray-900">
                    We are committed to only listing painstakingly verified
                    properties at prime locations with proper titles.
                  </p>
                </div>
              </div>
              <div className="flex space-x-4 mb-2">
                <div className="md:w-1/6">
                  <ApproachIcon />
                </div>
                <div className="md:w-5/6">
                  <h4 className="text-gray-800 mb-2 text-left font-semibold uppercase">
                    Our Approach
                  </h4>
                  <p className="pb-[0.5] border-none text-left md:border-b-2 border-gray-700 text-gray-900">
                    Extensive listings of properties in Lagos, Abuja and Dubai -
                    and Real Estate companies and developers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:max-w-lg md:w-1/3 lg:w-1/2 relative w-full mb-10 md:mb-0 md:mx-12 mx-4">
            <div className="p-1 border-2 rotate-3 border-zinc-600 rounded-tl-[240px] rounded-br-[240px]">
              <img
                class="object-cover object-center -rotate-3 rounded-tl-[250px] rounded-br-[250px]"
                alt="hero"
                src="https://dummyimage.com/720x600"
              />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
