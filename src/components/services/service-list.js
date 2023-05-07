import React, { Fragment } from "react";
import ServiceItem from "./service-item";

export default function ServiceList({ services }) {
  return (
    <Fragment>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex justify-center mt-6">
            <span className="text-indigo-700 px-3 uppercase py-1 bg-gray-200 rounded text-center text-base mb-1 font-medium">
              Our Services
            </span>
          </div>
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              We offer a variety of services
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-5">
            {services.map((blog, index) => (
              <div key={index}>
                <ServiceItem blog={services} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
}
