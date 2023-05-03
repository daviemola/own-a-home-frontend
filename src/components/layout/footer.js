import { useState, useEffect } from "react";
import { BsFacebook, BsTelegram, BsTwitter } from "react-icons/bs";
import { FaDiscord, FaMedium } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import Image from "next/image";
import BlueLogo from "../header/blue-logo";
import { AiFillTwitterCircle } from "react-icons/ai";
import Facebook from "../svgicons/Facebook";
import Twitter from "../svgicons/Twitter";
import YouTube from "../svgicons/YouTube";
import Instagram from "../svgicons/Instagram";

function Footer() {
  let [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="bg-[#494CBE]">
      <div className="custom-container container px-6 py-12 mt-24 pt-6 pb-6 sm:px-6 lg:px-8 lg:pt-12 ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:px-16">
          <div className="flex justify-center lg:justify-start text-zinc-200 md:mb-3">
            <BlueLogo />
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="text-center sm:text-left col-span-1">
              <nav className="">
                <ul className="space-y-1 md:space-y-4 text-base lg:text-left text-center cursor-pointer">
                  <li className="text-gray-400 font-bold uppercase cursor-pointer transition-all hover:text-white/75">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://meta-xseed.gitbook.io/metaxseed-games-studio-usdxseed/"
                    >
                      Whitepaper
                    </a>
                  </li>
                  <li className="text-zinc-100 cursor-pointer transition-all hover:text-white/75">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://meta-xseed.gitbook.io/metaxseed-games-studio-usdxseed/"
                    >
                      Whitepaper
                    </a>
                  </li>
                  <li className="text-zinc-100 cursor-pointer transition-all hover:text-white/75">
                    <a
                      href="https://docs.google.com/presentation/d/1n33uTwCbqi3RnSLIxhGcTiK0ccQCH4klerCywgxUIS4"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Pitchdeck
                    </a>
                  </li>
                  <li
                    className="text-zinc-100 cursor-pointer transition-all hover:text-white/75"
                    onClick={openModal}
                  >
                    Contribution Guidelines
                  </li>
                </ul>
              </nav>
            </div>
            <div className="text-center sm:text-left col-span-1">
              <nav className="lg:text-left text-center">
                <ul className="space-y-1 md:space-y-4 text-base">
                  <li className="text-gray-400 uppercase font-semibold cursor-pointer transition-all hover:text-white/75">
                    Services
                  </li>
                  <li className="text-zinc-100 cursor-pointer transition hover:text-white/75">
                    <a href="#">About Us</a>
                  </li>
                  <li className="text-zinc-100 cursor-pointer transition hover:text-white/75">
                    <a href="#">The Games</a>
                  </li>
                  <li className="text-zinc-100 cursor-pointer transition hover:text-white/75">
                    <a href="#">Token Utility</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end items-center">
            <div className=" text-zinc-200 mb-3">
              <section className="">
                <div className="">
                  <div className="mx-auto max-w-screen-md sm:text-center">
                    <h2 className="my-2 text-2xl font-semibold text-gray-900 dark:text-white">
                      Sign up for our newsletter
                    </h2>
                    <p className="my-2">
                      Get the latest gist and land updates!
                    </p>
                    <form action="#">
                      <div className="items-center mx-auto mb-3 mt-2 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                        <div className="relative w-full">
                          <label
                            for="email"
                            className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Email address
                          </label>
                          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg
                              className="w-5 h-5 text-gray-500 dark:text-gray-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                          </div>
                          <input
                            className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Enter your email"
                            type="email"
                            id="email"
                            required=""
                          />
                        </div>
                        <div>
                          <button
                            type="submit"
                            className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-[#FF7B54] border-orange-500 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                          >
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="md:pt-6 pt-0 mt-6 md:mt-8 border-t border-gray-400">
          <div className="text-center mt-4 md:mt-0 sm:flex sm:justify-between sm:text-left">
            <div className="md:flex hidden  items-center gap-4">
              <p className="mt-0 text-base text-white sm:order-first sm:mt-0">
                &copy; Own a Home Ltd {date}
              </p>
              <p className="mt-0 text-base text-white">
                <span className="block sm:inline">Private Policy </span>
              </p>
              <p className="mt-0 text-base text-white">
                <span className="block sm:inline">Terms of Service </span>
              </p>
            </div>
            <div className="md:hidden flex-col-reverse items-center gap-4">
              <p className="mt-0 text-base text-white">
                <span className="block sm:inline">Private Policy </span>
              </p>
              <p className="mt-0 text-base text-white">
                <span className="block sm:inline">Terms of Service </span>
              </p>
              <p className="mt-0 text-base text-white sm:order-first sm:mt-0">
                &copy; Own a Home Ltd {date}
              </p>
            </div>
            <ul className="flex items-center md:justify-start justify-center text-base pt-4 sm:mb-0 text-zinc-400">
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
      </div>
    </div>
  );
}

export default Footer;
