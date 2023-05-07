import Image from "next/image";
import React, { Fragment } from "react";
import { FaSearch } from "react-icons/fa";

export default function BlogHero() {
  return (
    <Fragment>
      <div className="">
        <div className="">
          {/* <img
            src="/background/bg-img-one.jpg"
            className="object-cover"
            alt="blog_image"
            // layout="fill"
            // quality={70}
          /> */}
        </div>
        <div className="bg-zinc-900 bg-opacity-[0.40] py-36">
          <div className="pt-12">
            <div className="">
              <div className="">
                <div className="flex justify-center items-center">
                  <div>
                    <div className="flex justify-center">
                      <span className="text-indigo-700 px-3 uppercase py-1 bg-gray-200 rounded text-center text-base mb-1 font-medium">
                        Our Blog
                      </span>
                    </div>
                    <div className="md:text-4xl text-3xl leading-8 text-center font-semibold text-white md:mb-[20px] mb-6 block">
                      <h2>
                        Latest News in Real Estate <br /> and Business
                      </h2>
                    </div>
                    <form action="#">
                      <div className="items-center mx-auto mb-3 mt-2 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                        <div className="relative w-full">
                          <label
                            htmlFor="email"
                            className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Email address
                          </label>
                          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <FaSearch className="text-gray-400" />
                          </div>
                          <input
                            className="block p-3 pl-10 w-full text-sm text-gray-500 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-[#494CBE] focus:border-[#494CBE]"
                            placeholder="Search particular topic"
                            type="email"
                            id="email"
                            required=""
                          />
                        </div>
                        <div>
                          <button
                            type="submit"
                            className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-[#494CBE] border-[#494CBE] sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
