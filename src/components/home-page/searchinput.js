import React from "react";
import { BsSearch } from "react-icons/bs";
import { MdOutlineFilterList } from "react-icons/md";

export default function SearchInput() {
  const categories = [
    "Most Recent",
    "Light House",
    "Light House",
    "Local Home",
    "Wood House",
    "Bangalow",
    "Sky Scrapper",
    "Mansionette",
    "Mansion",
    "Container",
    "Bangalow",
  ];
  return (
    <div className="custom-container px-8 py-12 mx-auto">
      <form>
        <div className="flex">
          <label
            for="location-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Your Email
          </label>
          <button
            id="dropdown-button-2"
            data-dropdown-toggle="dropdown-search-city"
            className="flex-shrink-0 z-3 inline-flex items-center py-2.5 px-2 md:px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border-2 shadow-sm border-gray-300 rounded-l-full hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
            type="button"
          >
            <BsSearch className="mx-4 md:mr-4 mr-2 md:mx-4 text-black" />
          </button>
          <div className="relative w-full">
            <input
              type="search"
              className="block md:py-4 py-3 md:px-6 sm:px-5 px-4  w-full z-20 text-sm md:text-base text-gray-900 bg-gray-50 rounded-r-full border-l-gray-50 border-l-2 border-2 shadow-sm border-gray-300 focus:ring-gray-300 focus:border-gray-300"
              placeholder="Search for properties..."
              required
            />
            <button
              type="submit"
              className="absolute flex items-center top-0 right-0 px-1 md:py-4 py-3 text-sm font-medium border-2 shadow-sm border-gray-300 text-white rounded-r-full focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              <MdOutlineFilterList className="text-zinc-800 text-xl md:text-2xl ml-0 md:ml-4" />
              <span className="text-zinc-800 md:mr-4 mr-2 md:mx-4">Filter</span>
            </button>
          </div>
        </div>
      </form>
      <div className="overflow-x-auto py-2 hide-scrollbar">
        <div className="inline-flex space-x-2 px-2 pt-6">
          {categories.map((cat, index) => (
            <>
              {index === 0 ? (
                <button
                  type="button"
                  className="inline-flex whitespace-nowrap items-center px-5 py-2.5 text-sm text-center text-white bg-blue-700 rounded-full hover:bg-blue-800"
                >
                  {cat}
                </button>
              ) : (
                <button
                  type="button"
                  className="inline-flex whitespace-nowrap items-center px-5 py-2.5 text-sm border border-gray-200 text-center text-zinc-900 bg-gray-100 rounded-full hover:bg-gray-200 hover:border-gray-300"
                >
                  {cat}
                </button>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
