import { Fragment } from "react";

export default function PricingLayout({ children }) {
  return (
    <Fragment>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 pt-24 pb-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Sign Up
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
              We have possible spaces where you might need our services. Choose
              from below
            </p>
            <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
              <button className="py-1 px-4 bg-indigo-500 text-white focus:outline-none">
                Monthly
              </button>
              <button className="py-1 px-4 focus:outline-none">Annually</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 md:space-x-4 space-y-6">
            {children}
          </div>
        </div>
      </section>
    </Fragment>
  );
}
