import React, { Fragment } from "react";
import { BsTelephone, BsWhatsapp } from "react-icons/bs";

export default function FilterSearch() {
  return (
    <Fragment>
      <div className="top-44 sticky self-start w-full">
        <div className="w-full mt-4 rounded-xl border border-gray-200 shadow-md">
          <div className="px-6 pt-4 flex items-center bg-gray-200 rounded-tl-xl rounded-tr-xl justify-between border-b border-gray-200">
            <div className="mb-2">
              <p className="text-left font-semibold">Filter Search</p>
            </div>
            <div className="mb-2">
              <p className="text-sm font-semibold">Clear all</p>
            </div>
          </div>
          <div className="px-6 rounded-md pb-6 pt-4">
            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Country
              </label>
              <div className="py-2">
                <select
                  id="country"
                  name="country"
                  autocomplete="country-name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                State
              </label>
              <div className="py-2">
                <select
                  id="country"
                  name="country"
                  autocomplete="country-name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option>Lagos</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Estate
              </label>
              <div className="py-2">
                <select
                  id="country"
                  name="country"
                  autocomplete="country-name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option>Lagos</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Property
              </label>
              <div className="py-2">
                <select
                  id="country"
                  name="country"
                  autocomplete="country-name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option> Bungalow</option>
                  <option> Masion</option>
                  <option> Massionette</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Bedrooms
              </label>
              <div className="py-2">
                <select
                  id="country"
                  name="country"
                  autocomplete="country-name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option>One</option>
                  <option>Two</option>
                  <option>Three</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Min Price
              </label>
              <div className="py-2">
                <select
                  id="country"
                  name="country"
                  autocomplete="country-name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option>1000</option>
                  <option>2000</option>
                  <option>3000</option>
                </select>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Max Price
                </label>
                <div className="py-2">
                  <select
                    id="country"
                    name="country"
                    autocomplete="country-name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option>1000</option>
                    <option>2000</option>
                    <option>3000</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="py-2">
              <button className="w-full font-semibold mt-2 rounded-full bg-[#494CBE] flex items-center justify-center gap-2 text-white px-6 py-2">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
