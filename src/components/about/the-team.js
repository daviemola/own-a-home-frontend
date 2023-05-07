import React, { Fragment } from "react";
import TeamMember from "./team-member";

export default function TheTeam({ services }) {
  return (
    <Fragment>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 mb-12 mx-auto">
          <div className="flex justify-center mt-6">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Our Team
            </h1>
          </div>
          <div className="flex flex-col text-center justify-center w-full mb-20">
            <h1 className="text-lg title-font mb-2">
              Our agents specialize in multiple areas, and have a thorough
              <br className="md:block hidden" />
              understanding of the local real estate market.
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-5">
            {services.slice(0, 3).map((blog, index) => (
              <div key={index}>
                <TeamMember blog={services} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
}
