import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

function BreadcrumbCo({}) {
  //   const { activePage, pageTitle } = props;
  return (
    <div className="breadcrumb-area md:pt-24 pt-12">
      <div className="">
        <ul className="flex text-lg leading-6">
          <li className="relative after:pr-[15px] text-[#494CBE]">
            <Link href="/companies">
              <span className="flex items-center">
                <IoIosArrowForward className="mr-1" />
                <span className="text-base font-semibold">Companies</span>
              </span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="flex items-center ml-4">
                <IoIosArrowForward className="mr-1" />
                <span className="text-base font-semibold">
                  Single Company Page
                </span>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BreadcrumbCo;
