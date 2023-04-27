import { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import { className } from "../../utils/class-name";

export const ScrollToTop = () => {
  const [isVisable, setIsVisable] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisable(true);
    } else {
      setIsVisable(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-[85px] right-[15px] z-10">
      <button
        type="button"
        onClick={scrollToTop}
        className={className(
          isVisable ? "opacity-100" : "opacity-0 ",
          "lg:px-5 mb-2 px-3 py-1.5 lg:py-2.5 relative rounded group font-medium text-white inline-block cursor-pointer"
        )}
        aria-label="Right Align"
      >
        <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-yellow-600 to-yellow-900"></span>
        <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-orange-600 to-yellow-900"></span>
        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0  from-yellow-600 to-yellow-500"></span>
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-orange-600 from-yellow-500"></span>
        <span className="relative text-xs lg:text-sm flex justify-center">
          <FaIcons.FaChevronCircleUp
            className="h-6 w-6 text-3xl"
            aria-hidden="true"
          />
        </span>
      </button>
    </div>
  );
};
