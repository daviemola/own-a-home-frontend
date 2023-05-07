import BreadcrumbCo from "@/components/breadcrumb/company";
import React from "react";

export default function CompanyLayout({ children }) {
  return (
    <section className="text-gray-600">
      <div className="custom-container px-6 mx-auto">
        <div className="w-full mt-4">
          <BreadcrumbCo />
        </div>
        <div className="flex flex-wrap">{children}</div>
      </div>
    </section>
  );
}
