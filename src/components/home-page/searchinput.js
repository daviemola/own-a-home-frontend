import React from "react";
import { BsSearch } from "react-icons/bs";
import { IoFilter } from "react-icons/io";
import { MdOutlineFilterList } from "react-icons/md";

export default function SearchInput() {
  return (
    <div className="custom-container px-8 py-12 mx-auto">
      <form>
        <div class="flex">
          <label
            for="location-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Your Email
          </label>
          <button
            id="dropdown-button-2"
            data-dropdown-toggle="dropdown-search-city"
            class="flex-shrink-0 z-3 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border-2 shadow-sm border-gray-300 rounded-l-full hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
            type="button"
          >
            <BsSearch className="mx-4 text-xl text-black" />
          </button>
          <div class="relative w-full">
            <input
              type="search"
              class="block py-4 px-6 w-full z-20 text-base text-gray-900 bg-gray-50 rounded-r-full border-l-gray-50 border-l-2 border-2 shadow-sm border-gray-300 focus:ring-gray-300 focus:border-gray-300"
              placeholder="Search for Properties, Houses, Apartments..."
              required
            />
            <button
              type="submit"
              class="absolute flex items-center top-0 right-0 p-3 py-4 text-sm font-medium border-2 shadow-sm border-gray-300 text-white rounded-r-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              <MdOutlineFilterList className="text-zinc-800 text-2xl  ml-4" />
              <span class="text-zinc-800 mx-4">Filter</span>
            </button>
          </div>
        </div>
      </form>
      <div className="flex items-center pt-6 gap-2">
        <button className="py-2 px-6 flex justify-center text-white bg-[#494CBE] rounded-full">
          Most Recent
        </button>
        <button className="py-2 px-6 flex justify-center text-zinc-900 bg-gray-100 border border-gray-200 rounded-full">
          Light House
        </button>
        <button className="py-2 px-6 flex justify-center text-zinc-900 bg-gray-100 border border-gray-200 rounded-full">
          Beach House
        </button>
        <button className="py-2 px-6 flex justify-center text-zinc-900 bg-gray-100 border border-gray-200 rounded-full">
          Local Home
        </button>
        <button className="py-2 px-6 flex justify-center text-zinc-900 bg-gray-100 border border-gray-200 rounded-full">
          Wood House
        </button>
        <button className="py-2 px-6 flex justify-center text-zinc-900 bg-gray-100 border border-gray-200 rounded-full">
          Bangalow
        </button>
        <button className="py-2 px-6 flex justify-center text-zinc-900 bg-gray-100 border border-gray-200 rounded-full">
          Sky Scrapper
        </button>
        <button className="py-2 px-6 flex justify-center text-zinc-900 bg-gray-100 border border-gray-200 rounded-full">
          Mansionette
        </button>
        <button className="py-2 px-6 flex justify-center text-zinc-900 bg-gray-100 border border-gray-200 rounded-full">
          Mansion
        </button>
        <button className="py-2 px-6 flex justify-center text-zinc-900 bg-gray-100 border border-gray-200 rounded-full">
          Container
        </button>
      </div>
    </div>
  );
}
