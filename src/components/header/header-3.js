import Link from "next/link";
import React from "react";
import { OffcanvasData } from "./offcanvas-data";
import { useRouter } from "next/router";
import { CiWallet } from "react-icons/ci";
import Image from "next/image";
import { FaBars, FaDiscord, FaMedium } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { BsTelegram, BsTwitter } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import Hamburger from "hamburger-react";

export default function HeaderThree() {
  const router = useRouter();
  const [offcanvas, setOffcanvas] = React.useState(false);
  //   const showOffcanvas = () => setOffcanvas(!offcanvas);

  return (
    <div className="absolute top-0 z-10 w-full">
      <div className="hidden lg:block">
        <header className="bg-gray-900 w-full fixed top-0 left-0">
          <nav
            style={{ height: "93px" }}
            className="flex w-full grid-cols-[1fr_auto_1fr] items-center justify-between gap-0 py-4 lg:px-4 xl:px-[54px]"
          >
            <div className="flex items-center">
              <div className="w-full items-center">
                <Link href={"/"}>
                  <button className="px-2 py-2">
                    <Image
                      src="/images/logo/xseedlogo.svg"
                      alt="Logo"
                      height={50}
                      width={160}
                    />
                  </button>
                </Link>
              </div>
              <ul className="text-white main-menu flex items-center font-semibold uppercase tracking-wider">
                <li className={router.pathname == "/" ? "active" : ""}>
                  <Link href="/">
                    <span>Marketplace</span>
                  </Link>
                </li>
                <li className={router.pathname == "/products" ? "active" : ""}>
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
            </div>
            <div className="flex items-center justify-end flex-shrink-0 right-8 space-x-9">
              <div>
                <div className="flex items-center">
                  <div>
                    <button
                      className="menu-bars text-white rounded border border-zinc-800 flex items-center bg-black py-3 px-4"
                      aria-label="Right Align"
                    >
                      <CiWallet className="text-[24px] mr-4" />
                      <span className="font-bold text-base">
                        Connect Wallet
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
      <div className="lg:hidden ">
        <div className="w-full">
          <header className="relative isolate w-full">
            <nav className="w-full">
              <div className="z-[40] bg-gray-900 w-full fixed top-0 left-0">
                <div
                  style={{ height: "104px" }}
                  className="relative z-10 flex w-full items-center justify-between py-4 px-6"
                >
                  <div className="logo">
                    <Link href="/">
                      <Image
                        src="/images/logo/xseedlogo.svg"
                        alt="Logo"
                        width={180}
                        height={70}
                      />
                    </Link>
                  </div>
                  <button
                    className="menu-bars lg:hidden text-white text-[24px] flex"
                    aria-label="Right Align"
                  >
                    <Hamburger toggled={offcanvas} toggle={setOffcanvas} />
                  </button>
                </div>
              </div>

              <div
                style={{
                  height: "calc(100vh - 0px)",
                  top: "0px",
                  transitionProperty: "visibility",
                }}
                className={
                  offcanvas
                    ? "visible fixed left-0 isolate z-[9] flex w-full flex-col transition overflow-auto duration-700"
                    : "!invisible  fixed left-0 isolate z-[9] flex w-full flex-col transition overflow-auto duration-700"
                }
              >
                <div
                  style={{
                    opacity: `${offcanvas} ? "1" : "0"`,
                    paddingTop: "104px",
                  }}
                  className="bg-gray-900/70 flex h-full w-full flex-col backdrop-blur-lg transition duration-500"
                >
                  <div className="flex h-[56px] w-full flex-row justify-center">
                    <div className="flex w-1/2 items-center justify-center border text-white uppercase border-zinc-400">
                      View
                    </div>
                  </div>
                  <ul
                    style={{ overscrollBehavior: "contain" }}
                    className="grid flex-grow content-start gap-[33px] overflow-auto px-[24px] pb-4 pt-8 text-[18px] font-medium uppercase leading-[1.25] text-white"
                  >
                    {OffcanvasData.map((item, index) => {
                      return (
                        <li key={index} className="text-white">
                          <Link href="#">{item.title}</Link>
                        </li>
                      );
                    })}
                    <li className="mx-auto mt-[48px] grid w-full max-w-[480px] gap-y-6 gap-x-4 sm:mt-[62px]">
                      <div>
                        <a
                          href="#"
                          className="boxed-outline-btn col-span-2 w-full text-center"
                        >
                          Join Us on Telegram
                        </a>

                        <div>
                          <ul className="flex items-center md:justify-start justify-center text-base mt-8 pt-4 sm:mb-0 text-zinc-400">
                            <li className="flex items-center">
                              <a href="https://twitter.com/metaxseed">
                                <BsTwitter className="text-3xl mr-2" />
                              </a>
                            </li>
                            <li className="flex items-center">
                              <a href="https://t.me/metaxseed">
                                <BsTelegram className="text-3xl mx-2" />
                              </a>
                            </li>
                            <li className="flex items-center my-auto">
                              <a href="https://t.me/metaxseed_ann">
                                <span className="relative ">
                                  <BsTelegram className="text-3xl mx-2" />
                                  <span className="absolute top-[10%] right-[25%] inline-block w-3 h-3 transform translate-x-1/2 -translate-y-1/2 bg-yellow-600 rounded-full"></span>
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="mailto:contact@metaxseed.io">
                                <MdMail className="text-3xl mx-2" />
                              </a>
                            </li>
                            <li>
                              <a href="https://discord.com/invite/metaxseed">
                                <FaDiscord className="text-3xl mx-2" />
                              </a>
                            </li>
                            <li>
                              <a href="https://medium.com/@metaxseed.io">
                                <FaMedium className="text-3xl mx-2" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
        </div>
      </div>
      {/* <div
        className={
          offcanvas ? "offcanvas-menu-wrap active" : "offcanvas-menu-wrap"
        }
      >
        <div
          style={{ height: "104px" }}
          className="relative  bg-gray-900 z-10 flex w-full items-center justify-between py-4 px-6"
        >
          <div className="logo">
            <Link href="/">
              <Image
                src="/images/logo/xseedlogo.svg"
                alt="Logo"
                width={140}
                height={70}
              />
            </Link>
          </div>
          <button
            className="menu-bars lg:hidden text-white text-[24px] flex"
            aria-label="Right Align"
          >
            <FaBars onClick={showOffcanvas} />
          </button>
        </div>
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
      </div> */}
    </div>
  );
}
