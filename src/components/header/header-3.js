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
import WhiteLogo from "./white-logo";
import Facebook from "../svgicons/Facebook";
import Twitter from "../svgicons/Twitter";
import YouTube from "../svgicons/YouTube";
import Instagram from "../svgicons/Instagram";

export default function HeaderThree() {
  const router = useRouter();
  const [offcanvas, setOffcanvas] = React.useState(false);
  //   const showOffcanvas = () => setOffcanvas(!offcanvas);

  return (
    <div className="absolute top-0 z-10 w-full">
      <div className="hidden lg:block">
        <header className="bg-white w-full border border-gray-200 shadow fixed top-0 left-0">
          <nav
            style={{ height: "75px" }}
            className="flex w-full grid-cols-[1fr_auto_1fr] items-center justify-between gap-0 py-4 lg:px-4 xl:px-[54px]"
          >
            <div className="flex items-center">
              <div className="mr-4">
                <WhiteLogo />
              </div>
            </div>
            <div className="flex items-center justify-end flex-shrink-0 right-8 space-x-9">
              <ul className="main-menu text-zinc-800 flex items-center">
                <li className={router.pathname == "/" ? "active" : ""}>
                  <Link href="/">
                    <span>Home</span>
                  </Link>
                </li>
                <li className={router.pathname == "/about" ? "active" : ""}>
                  <Link href="/listing">
                    <span>Properties</span>
                  </Link>
                </li>
                <li className={router.pathname == "/projects" ? "active" : ""}>
                  <Link href="/services">
                    <span>Services</span>
                  </Link>
                </li>
                <li className={router.pathname == "/posts" ? "active" : ""}>
                  <Link href="/blogs">
                    <span>Blog</span>
                  </Link>
                </li>
                <li className={router.pathname == "/posts" ? "active" : ""}>
                  <a href="/about">
                    <span>About</span>
                  </a>
                </li>
                <li className={router.pathname == "/contact" ? "active" : ""}>
                  <Link href="/contacts">
                    <button className="py-1 px-8 flex justify-center text-white bg-[#494CBE] rounded-full">
                      Contact
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
      <div className="lg:hidden ">
        <div className="w-full">
          <header className="relative isolate w-full">
            <nav className="w-full">
              <div className="z-[40] bg-white w-full border-b border-gray-200 shadow fixed top-0 left-0">
                <div
                  style={{ height: "85px" }}
                  className="relative z-10 flex w-full items-center justify-between py-4 px-3"
                >
                  <div className="">
                    <WhiteLogo />
                  </div>
                  <button
                    className="menu-bars lg:hidden text-black text-[20px] flex"
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
                  className="bg-gray-100/75 flex h-full w-full flex-col backdrop-blur-lg transition duration-500"
                >
                  <ul
                    style={{ overscrollBehavior: "contain" }}
                    className="grid flex-grow content-start gap-[33px] overflow-auto px-[24px] pb-4 pt-8 text-[18px] font-medium uppercase leading-[1.25] text-white"
                  >
                    {OffcanvasData.map((item, index) => {
                      return (
                        <li key={index} className="text-black">
                          <Link href="#">{item.title}</Link>
                        </li>
                      );
                    })}
                    <li className="mx-auto mt-[48px] bg-[#494CBE] rounded flex justify-center items-center w-full h-full ">
                      <div>
                        <div className="">
                          <ul className="flex items-center md:justify-start justify-center text-base sm:mb-0 text-zinc-400">
                            <li className="flex items-center">
                              <a href="https://t.me/metaxseed">
                                <Facebook />
                              </a>
                            </li>
                            <li className="flex items-center mx-2">
                              <a href="https://twitter.com/metaxseed">
                                <Twitter />
                              </a>
                            </li>
                            <li className="flex items-center my-auto">
                              <a href="https://t.me/metaxseed_ann">
                                <span className="relative">
                                  <YouTube />
                                </span>
                              </a>
                            </li>
                            <li className="mx-2">
                              <a href="mailto:contact@metaxseed.io">
                                <span className="relative">
                                  <Instagram />
                                </span>
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
