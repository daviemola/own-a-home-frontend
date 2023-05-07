import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect, Fragment } from "react";
import { useRouter } from "next/router";
import { OffcanvasData } from "./offcanvas-data";
import WhiteLogo from "./white-logo";

function HeaderOne() {
  const [offcanvas, setOffcanvas] = useState(false);
  const showOffcanvas = () => setOffcanvas(!offcanvas);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    // scrollTop >= 0
    //   ? header.classList.add("is-sticky")
    //   : header.classList.remove("is-sticky");
  };

  const router = useRouter();
  const headerCss = `flex lg:justify-between justify-end items-center`;

  return (
    <Fragment>
      <header className="absolute w-full z-10">
        <div className="sticky-holder header-section sticky-style-1">
          <div className="custom-container container">
            <div className="flex items-center justify-between leading-[120px]">
              <div className="mr-4">
                <WhiteLogo />
              </div>
              <div className="lg:block hidden ml-3">
                <nav>
                  <ul className="main-menu text-zinc-800 flex items-center">
                    <li className={router.pathname == "/" ? "active" : ""}>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </li>
                    <li className={router.pathname == "/about" ? "active" : ""}>
                      <Link href="#about">
                        <span>Properties</span>
                      </Link>
                    </li>
                    <li
                      className={router.pathname == "/projects" ? "active" : ""}
                    >
                      <Link href="#services">
                        <span>Services</span>
                      </Link>
                    </li>
                    <li className={router.pathname == "/posts" ? "active" : ""}>
                      <Link href="#testimonials">
                        <span>Blog</span>
                      </Link>
                    </li>
                    <li className={router.pathname == "/posts" ? "active" : ""}>
                      <a href="mailto:dan@mrjunkaway.com">
                        <span>About</span>
                      </a>
                    </li>
                    <li
                      className={router.pathname == "/contact" ? "active" : ""}
                    >
                      <Link href="#">
                        <button className="py-1 px-8 flex justify-center text-white bg-[#494CBE] rounded-full">
                          Contact
                        </button>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="lg:hidden block">
                <div className={`outer-box ${headerCss}`}>
                  <ul className="language-list text-white">
                    <li></li>
                    <li></li>
                  </ul>
                  <div className="offcanvas-area">
                    <div className="offcanvas">
                      <button
                        className="menu-bars flex text-black text-[24px]"
                        aria-label="Right Align"
                      >
                        <FaBars onClick={showOffcanvas} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className={
          offcanvas ? "offcanvas-menu-wrap active" : "offcanvas-menu-wrap"
        }
      >
        <nav className="offcanvas-menu">
          <ul className="offcanvas-menu-items" onClick={showOffcanvas}>
            <li className="navbar-toggle flex justify-between items-center pb-[15px]">
              <div className="logo">
                <WhiteLogo />
              </div>
              <button
                className="menu-bars text-[24px] opacity-80 hover:opacity-50 transition-all"
                aria-label="Right Align"
              >
                <AiOutlineClose className="text-[#494CBE]" />
              </button>
            </li>
            {OffcanvasData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link href="#">
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </Fragment>
  );
}

export default HeaderOne;
