import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { CiWallet } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { useState, useEffect, Fragment } from "react";
import { useRouter } from "next/router";
import { OffcanvasData } from "./offcanvas-data";
import WhiteLogo from "./white-logo";

function HeaderTwo() {
  const [offcanvas, setOffcanvas] = useState(false);
  const showOffcanvas = () => setOffcanvas(!offcanvas);

  const router = useRouter();
  const headerCss = `flex lg:justify-between justify-end items-center`;

  return (
    <Fragment>
      <header className="header-section is-sticky sticky-style-2">
        <div className="custom-container container">
          <div className="grid grid-cols-12 items-center leading-[120px]">
            <div className="lg:col-span-9 col-span-6 my-8 flex items-center">
              <WhiteLogo />
              <nav>
                <ul className="main-menu text-white">
                  <li className="pr-[16px]">{/* <WhiteLogo /> */}</li>
                  <li className={router.pathname == "/" ? "active" : ""}>
                    <Link href="/">
                      <span>Marketplace</span>
                    </Link>
                  </li>
                  <li
                    className={router.pathname == "/products" ? "active" : ""}
                  >
                    <Link href="/products">
                      <span>Shop</span>
                    </Link>
                  </li>
                  <li className={router.pathname == "/contact" ? "active" : ""}>
                    <Link href="/contact">
                      <span>Contacts</span>
                    </Link>
                  </li>
                  <li className={router.pathname == "/faqs" ? "active" : ""}>
                    <Link href="/faqs">
                      <span>FAQs</span>
                    </Link>
                  </li>
                  <li className={router.pathname == "/faqs" ? "active" : ""}>
                    <Link href="/faqs">
                      <span>Token</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="lg:col-span-3 col-span-6">
              <div className={`outer-box ${headerCss}`}>
                <ul className="language-list">
                  <li></li>
                  <li></li>
                </ul>
                <div className="offcanvas-area">
                  <div className="offcanvas lg:flex hidden items-center gap-4">
                    <div className="offcanvas flex items-center gap-4">
                      <button
                        className="menu-bars text-white rounded border border-zinc-800 flex items-center bg-black py-3 px-5"
                        aria-label="Right Align"
                      >
                        <CiWallet className="text-[24px] mr-4" />
                        <span className="font-bold text-base">
                          Connect Wallet
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="offcanvas lg:hidden flex items-center gap-4">
                    <button
                      className="menu-bars lg:hidden text-white text-[24px] flex"
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
      </header>
      <div
        className={
          offcanvas ? "offcanvas-menu-wrap active" : "offcanvas-menu-wrap"
        }
      >
        <nav className="offcanvas-menu bg-zinc-800">
          <ul className="offcanvas-menu-items" onClick={showOffcanvas}>
            <li className="navbar-toggle flex justify-between items-center pb-[15px]">
              <div className="logo">
                <Link href="/">
                  <Image
                    src="/images/logo/xseedlogo.svg"
                    alt="Logo"
                    width={70}
                    height={70}
                  />
                </Link>
              </div>
              <button
                className="menu-bars text-[24px] opacity-80 hover:opacity-50 transition-all"
                aria-label="Right Align"
              >
                <AiOutlineClose className="text-white" />
              </button>
            </li>
            {OffcanvasData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link href="#">{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </Fragment>
  );
}

export default HeaderTwo;
