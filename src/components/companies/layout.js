import React from "react";

export default function Layout({ children }) {
  return (
    <section className="text-gray-600">
      <div className="custom-container px-6 mx-auto">
        <div className="w-full mb-10">
          <h1 className="sm:text-2xl text-xl font-medium title-font mb-4 text-gray-900">
            Top Real Estate Companies
          </h1>
        </div>
        <div className="flex flex-wrap">{children}</div>
      </div>
    </section>
  );
}
