import React from "react";

export default function Layout({ children }) {
  return (
    <section id="services" className="text-gray-600">
      <div className="custom-container px-6 mx-auto">
        <div className="flex flex-wrap">{children}</div>
      </div>
    </section>
  );
}
