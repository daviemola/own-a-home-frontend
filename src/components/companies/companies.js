import { Fragment } from "react";
import CompanyItem from "./company-item";

function CompanyContainer() {
  console.log("companies");
  const posts = [1, 2, 3, 4, 5];

  return (
    <Fragment>
      <div className="md:mr-8 mb-16 md:mb-0">
        <div className="grid grid-cols-1 gap-x-[25px] gap-y-[55px]">
          {posts.map((posts, index) => (
            <CompanyItem key={index} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default CompanyContainer;
