import React from "react";
import Breadcrumb from "../breadcrumb";

export default function Layout({ children }) {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="custom-container container pb-24 mx-auto">
        <Breadcrumb />
        <div className="flex sm:flex-nowrap flex-wrap">{children}</div>
      </div>
    </section>
  );
}
