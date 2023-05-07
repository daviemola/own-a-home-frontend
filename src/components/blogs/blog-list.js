import React, { Fragment } from "react";
import BlogItem from "./blog-item";

export default function BlogList({ blogs }) {
  return (
    <Fragment>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Recent News
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-5">
            {blogs.map((blog, index) => (
              <div key={index}>
                <BlogItem blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
}
