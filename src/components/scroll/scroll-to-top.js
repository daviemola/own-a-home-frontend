import { useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
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
    <div className="fixed bottom-[50px] right-[25px] z-10">
      <button
        type="button"
        className="bg-[#FF7B54] py-4 px-4 rounded"
        aria-label="Right Align"
      >
        <BsWhatsapp className="text-white text-xl" />
      </button>
    </div>
  );
};
