import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

function Breadcrumb({}) {
  //   const { activePage, pageTitle } = props;
  return (
    <div className="breadcrumb-area md:pt-24 pt-12">
      <div className="">
        <ul className="flex text-lg leading-6">
          <li className="relative after:pr-[15px] text-[#494CBE]">
            <Link href="/">
              <span className="flex items-center">
                <IoIosArrowForward className="mr-2" />
                Properties
              </span>
            </Link>
          </li>
          <li>
            {/* <Link href='/projects'>{activePage}</Link> */}
            <Link href="/projects">
              <span className="flex items-center ml-4">
                <IoIosArrowForward className="mr-2" />
                Single Property
              </span>
            </Link>
          </li>
        </ul>
        {/* <h1 className="lm:text-[60px] text-[36px] lm:leading-[60px] mt-[45px]"> */}
        {/* {pageTitle} */}
        {/* Single Property */}
        {/* </h1> */}
      </div>
    </div>
  );
}

export default Breadcrumb;
