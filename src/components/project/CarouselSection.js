import { Fragment } from "react";
import { AiFillStar, AiOutlinePlus, AiOutlineStar } from "react-icons/ai";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Bathtab from "../svgicons/Bathtab";
import Beach from "../svgicons/Beach";
import Bedrooms from "../svgicons/Bedrooms";
import Bulb from "../svgicons/Bulb";
import Calendar from "../svgicons/Calendar";
import Couch from "../svgicons/Couch";
import Document from "../svgicons/Document";
import Elevator from "../svgicons/Elevator";
import Exclamation from "../svgicons/Exclamation";
import Finished from "../svgicons/Finished";
import Gated from "../svgicons/Gated";
import HouseSize from "../svgicons/HouseSize";
import LocationIcon from "../svgicons/Location";
import SandFill from "../svgicons/SandFill";
import Security from "../svgicons/Security";
import Serviced from "../svgicons/Serviced";
import Tropical from "../svgicons/Tropical";

export default function CarouselSection() {
  return (
    <Fragment>
      <div>
        <div className="xl:flex xl:items-center pb-8">
          <div className="flex items-center">
            <h1 className="text-black text-xl lg:text-2xl font-semibold">
              3 Bedroom Apartment
            </h1>
          </div>
          <div className="flex items-center ml-0 xl:ml-12">
            <LocationIcon />
            <p className="ml-2 text-base lg:text-lg">
              10001 Street, Banana Island, Lagos, Nigeria
            </p>
          </div>
        </div>
        <Carousel
          infiniteLoop={true}
          showArrows={false}
          autoPlay={true}
          stopOnHover={false}
          animationHandler="fade"
          swipeable={false}
          showIndicators={true}
          showStatus={false}
          showThumbs={false}
          interval={10000}
        >
          <div>
            <img
              src="/background/aod-lg.png"
              className="w-auto h-auto rounded"
              alt="game-img"
            />
          </div>
          <div className="">
            <img
              src="/background/aod-lg.png"
              className="w-auto h-auto rounded"
              alt="game-img"
            />
          </div>
        </Carousel>
        <div>
          <div>
            <h5 className="my-4 pt-4 text-xl text-black font-semibold">
              Best property in Lagos
            </h5>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur. Habitasse nulla ornare
              risus aliquet ultricies risus massa. Risus orci viverra sapien
              convallis et velitipsum dolor sit amet.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-3 my-1 mt-4">
              <div className="flex items-center">
                <Bathtab />
                <span className="ml-1 text-zinc-500">3</span>
              </div>
              <div className="flex items-center">
                <Bedrooms />
                <span className="ml-1 text-zinc-500">3</span>
              </div>
              <div className="flex items-center">
                <HouseSize />
                <span className="ml-1 text-zinc-500">3000 sqft</span>
              </div>
              <div className="lg:flex hidden items-center ml-2 my-1">
                <span className="mr-1">4.0</span>
                <div className="flex items-center">
                  <AiFillStar className="text-yellow-500" />
                  <AiFillStar className="text-yellow-500" />
                  <AiFillStar className="text-yellow-500" />
                  <AiFillStar className="text-yellow-500" />
                  <AiOutlineStar className="text-yellow-500" />
                  <span className="ml-2">(30)</span>
                </div>
              </div>
              <div className="lg:block hidden">
                <span className="bg-yellow-300 text-yellow-900 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                  Bestseller
                </span>
              </div>
            </div>
            <div className="lg:hidden flex items-center ml-2 my-1">
              <span className="mr-1">4.0</span>
              <div className="flex items-center">
                <AiFillStar className="text-yellow-500" />
                <AiFillStar className="text-yellow-500" />
                <AiFillStar className="text-yellow-500" />
                <AiFillStar className="text-yellow-500" />
                <AiOutlineStar className="text-yellow-500" />
                <span className="ml-2">(30)</span>
              </div>
            </div>
            <div className="lg:hidden block">
              <span className="bg-yellow-300 text-yellow-900 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                Bestseller
              </span>
            </div>
          </div>
          <div className="mt-4">
            <a href="#" className="underline text-blue-600">
              A development by Middlechase Property Ltd
            </a>
            <div className="mt-4 lg:flex lg:flex-row flex-col items-center">
              <span className="flex items-center">
                <Document />
                <span className="ml-2">Property Title: C of O</span>
              </span>
              <span className="flex items-center ml-0 lg:ml-8">
                <Calendar />
                <span className="mx-2">Date added: Sept 14, 2023</span>
                <Exclamation />
              </span>
            </div>
          </div>
          <div className="bg-[#494CBE] w-full py-12 mt-8 rounded-md">
            <h4 className="text-white text-center">Discount ends in</h4>
            <span className="lg:text-6xl text-5xl font-semibold text-center text-white ">
              <h1 className="my-6">11 : 23 : 49: 10</h1>
              <h1 className="my-6 text-base">
                days : hours : minutes: seconds
              </h1>
            </span>
            <div className="flex items-center justify-center">
              <button className="bg-white py-3 px-4 text-[#494CBE] uppercase rounded-lg font-semibold">
                Reserve Now
              </button>
            </div>
          </div>
          <div className="w-full mt-8 rounded-md border border-gray-200">
            <div className="px-6 pt-6 flex items-center border-b border-gray-200">
              <p className="ml-2 font-semibold px-6 pb-2 border-b-2 border-blue-800">
                Property Details
              </p>
              <p className="font-semibold px-6 ml-2 pb-2 border-blue-800">
                More Details
              </p>
            </div>
            <div className="lg:px-12 md:px-8 sm:px-6 px-4 py-6">
              <p>
                An architectural magnificence located in the heart of Ikoyi.
                This lush four bed maisonette comes with a rooftop swimming pool
                with sweeping views of the Ikoyi metropolis. The property boasts
                of premium finishing, an elevator, a BQ for each unit, very
                spacious compound with lots of parking and good security. With
                only two units left, it’s close to being sold out. Let’s get you
                a piece here ...Show More
              </p>
            </div>
            <div className="lg:px-12 md:px-8 sm:px-6 px-4 py-6">
              <h5 className="font-semibold text-xl my-4">Property Info</h5>
              <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
                <div className="px-4 py-3 border-l-2 border-gray-200 bg-gray-100">
                  <p>
                    <span className="font-semibold">Property Ref:</span>
                    164462
                  </p>
                </div>
                <div className="px-4 py-3 border-l-2 border-gray-200 bg-gray-100">
                  <p>
                    <span className="font-semibold">Property Ref:</span>
                    164462
                  </p>
                </div>
                <div className="px-4 py-3 border-l-2 border-gray-200 bg-gray-100">
                  <p>
                    <span className="font-semibold">Property Ref:</span>
                    164462
                  </p>
                </div>
                <div className="px-4 py-3 border-l-2 border-gray-200 bg-gray-100">
                  <p>
                    <span className="font-semibold">Property Ref:</span>
                    164462
                  </p>
                </div>
                <div className="px-4 py-3 border-l-2 border-gray-200 bg-gray-100">
                  <p>
                    <span className="font-semibold">Property Ref:</span>
                    164462
                  </p>
                </div>
                <div className="px-4 py-3 border-l-2 border-gray-200 bg-gray-100">
                  <p>
                    <span className="font-semibold">Property Ref:</span>
                    164462
                  </p>
                </div>
                <div className="px-4 py-3 border-l-2 border-gray-200 bg-gray-100">
                  <p>
                    <span className="font-semibold">Property Ref:</span>
                    164462
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:px-12 md:px-8 sm:px-6 px-4 py-6">
              <h5 className="font-semibold text-xl pb-4 my-4">
                Property Features
              </h5>
              <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 mt-4">
                <div className="flex items-center gap-2 mb-4">
                  <Bulb />
                  <span className="ml-2">24 Hours Power</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Couch />
                  <span className="ml-2">Fully Furnished</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Beach />
                  <span className="ml-2">Beach Front</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <SandFill />
                  <span className="ml-2">Sand Fill</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Security />
                  <span className="ml-2">Security</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Finished />
                  <span className="ml-2">Fully Finished</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Elevator />
                  <span className="ml-2">Elevator Available</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Serviced />
                  <span className="ml-2">24 Hour Service</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Tropical />
                  <span className="ml-2">Tropical</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Gated />
                  <span className="ml-2">Gated Community</span>
                </div>
              </div>
            </div>
            <div className="lg:px-12 md:px-8 sm:px-6 px-4 py-6">
              <h5 className="font-semibold text-xl pb-4 my-4">Neighbourhood</h5>
              <ul className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 mt-4 list-disc list-inside">
                <li className="">Eko White house</li>
                <li className="">Pakistine Secondary</li>
                <li className="">Chinese Billlow Mall</li>
                <li className="">Hover Phone Store</li>
                <li className="">Shoprite</li>
              </ul>
            </div>
            <div className="lg:px-12 md:px-8 sm:px-6 px-4 py-6">
              <iframe
                width="100%"
                height="100%"
                className="h-[50vh]"
                frameborder="0"
                title="map"
                marginheight="0"
                marginwidth="0"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
              ></iframe>
            </div>
            <div className="lg:px-12 md:px-8 sm:px-6 px-4 py-6">
              <div className="flex items-center space-x-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="/profile/profile.jpg"
                  alt=""
                />
                <div className="font-medium text-lg text-black">
                  <div>Developed by Jesse Leos</div>
                </div>
              </div>
              <div className="my-6 w-full md:w-1/2">
                <p className="mb-2">
                  <span className="font-semibold">Started: </span>
                  19 Apr 2023
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Turpis vitae facilisi
                  ut elit consectetur vitae quis senectus euismod. Massa aliquam
                  vitae pharetra tortor.
                </p>
                <div className="mt-4">
                  <button className="rounded-full border py-2 px-4 border-blue-700 text-blue-700">
                    Contact Developer
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:px-12 md:px-8 sm:px-6 px-4 py-6">
              <h5 className="font-semibold text-xl pb-4 my-4">Payment Plan</h5>
              <div className="lg:grid hidden grid-cols-5 text-sm font-semibold mt-4">
                <div className="px-4 py-3 border-l-2 mb-2 border-gray-200 bg-gray-100">
                  Outright
                </div>
                <div className="px-4 py-3 border-l-2 mb-2 border-gray-200 bg-gray-100">
                  0 - 3 Months (3%)
                </div>
                <div className="px-4 py-3 border-l-2 mb-2 border-gray-200 bg-gray-100">
                  3 - 6 Months (6%)
                </div>
                <div className="px-4 py-3 border-l-2 mb-2 border-gray-200 bg-gray-100">
                  6 - 12 Months (6%)
                </div>
                <div className="px-4 py-3 border-l-2 mb-2 border-gray-200 bg-gray-100">
                  12 - 24 Months (6%)
                </div>
                <div className="px-4 py-3 border-l-2 border-gray-200 bg-gray-100">
                  N3,000,000
                </div>
                <div className="px-4 py-3 border-l-2 border-gray-200 bg-gray-100">
                  N3,000,000
                </div>
                <div className="px-4 py-3 border-l-2 border-gray-200 bg-gray-100">
                  N3,000,000
                </div>
                <div className="px-4 py-3 border-l-2 border-gray-200 bg-gray-100">
                  N3,000,000
                </div>
                <div className="px-4 py-3 border-l-2 border-gray-200 bg-gray-100">
                  N3,000,000
                </div>
              </div>
              <div className="lg:hidden grid grid-cols-2 text-sm font-semibold mt-4">
                <div className="px-4 py-3 border-b-2 border-gray-200 bg-gray-100">
                  Outright
                </div>
                <div className="px-4 py-3 ml-2 border-b-2 border-gray-200 bg-gray-100">
                  N3,000,000
                </div>
                <div className="px-4 py-3 border-b-2 border-gray-200 bg-gray-100">
                  0 - 3 Months (3%)
                </div>
                <div className="px-4 py-3 ml-2 border-b-2 border-gray-200 bg-gray-100">
                  N3,000,000
                </div>
                <div className="px-4 py-3 border-b-2 border-gray-200 bg-gray-100">
                  3 - 6 Months (6%)
                </div>
                <div className="px-4 py-3 ml-2 border-b-2 border-gray-200 bg-gray-100">
                  N3,000,000
                </div>
                <div className="px-4 py-3 border-b-2 border-gray-200 bg-gray-100">
                  6 - 12 Months (6%)
                </div>
                <div className="px-4 py-3 ml-2 border-b-2 border-gray-200 bg-gray-100">
                  N3,000,000
                </div>
                <div className="px-4 py-3 border-b-2 border-gray-200 bg-gray-100">
                  12 - 24 Months (6%)
                </div>
                <div className="px-4 py-3 ml-2 border-b-2 border-gray-200 bg-gray-100">
                  N3,000,000
                </div>
              </div>
            </div>
            <div className="lg:px-12 md:px-8 sm:px-6 px-4 py-6">
              <h5 className="font-semibold text-xl my-4">Payment Plan</h5>
              <div className="grid md:grid-cols-3 space-y-4 grid-cols-1 text-sm  mt-4">
                <div className="text-base">
                  <p className="font-semibold mb-2">Home Rules</p>
                  <ul className="space-y-2 mt-2 text-gray-600 list-disc list-inside">
                    <li>Pakistine Secondary School</li>
                    <li>Chinese Billlow Mall</li>
                  </ul>
                </div>
                <div className="text-base">
                  <p className="font-semibold mb-2">Safety & Property</p>
                  <ul className="space-y-2 mt-2 text-gray-600 list-disc list-inside">
                    <li>Pakistine Secondary School</li>
                    <li>Chinese Billlow Mall</li>
                  </ul>
                </div>
                <div className="text-base">
                  <p className="font-semibold mb-2">Constitution Policy</p>
                  <ul className="space-y-2 mt-2 text-gray-600 list-disc list-inside">
                    <li>Pakistine Secondary School</li>
                    <li>Chinese Billlow Mall</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:px-12 md:px-8 sm:px-6 px-4 py-6">
              <h5 className="font-semibold text-xl my-4">
                Frequently asked questions
              </h5>
              <div className="grid grid-cols-1 gap-2 text-sm  mt-4">
                <div className="flex justify-between items-center px-5 md:px-6 lg:px-12 border border-gray-200 rounded py-4 lg:py-6">
                  <p className="font-semibold text-base md:text-lg">
                    What does this do?
                  </p>
                  <button className="py-2 px-2 rounded bg-gray-100">
                    <AiOutlinePlus className="text-xl" />
                  </button>
                </div>
                <div className="flex justify-between items-center px-5 md:px-6 lg:px-12 border border-gray-200 rounded py-4 lg:py-6">
                  <p className="font-semibold text-base md:text-lg">
                    What does this do?
                  </p>
                  <button className="py-2 px-2 rounded bg-gray-100">
                    <AiOutlinePlus className="text-xl" />
                  </button>
                </div>
                <div className="flex justify-between items-center px-5 md:px-6 lg:px-12 border border-gray-200 rounded py-4 lg:py-6">
                  <p className="font-semibold text-base md:text-lg">
                    What does this do?
                  </p>
                  <button className="py-2 px-2 rounded bg-gray-100">
                    <AiOutlinePlus className="text-xl" />
                  </button>
                </div>
              </div>
              <div className="flex justify-center my-6">
                <button className="px-20 py-3 bg-[#494CBE] text-lg rounded text-white">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="lg:mx-12 md:mx-6 mx-4">
              <section className="bg-[#494CBE] px-6 py-12 mx-auto w-full mt-8 rounded-3xl">
                <div className="grid md:grid-cols-2 grid-cols-1">
                  <div className="md:pl-6">
                    <h1 className="title-font font-medium text-2xl text-white">
                      Request for Brochure
                    </h1>
                    <p className="leading-relaxed mt-4 text-gray-200 w-full md:w-3/4">
                      Lorem ipsum dolor sit amet consectetur. Turpis vitae
                      facilisi
                    </p>
                  </div>
                  <div className="w-full mt-10 md:mt-0 flex justify-center items-center ">
                    <div className="mx-auto mb-3 mt-2 space-y-4 sm:flex sm:space-y-0">
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
                  </div>
                </div>
              </section>
            </div>
            <div className="lg:px-12 md:px-8 sm:px-6 px-4 py-6">
              <div class="mt-12">
                <h2 class="text-lg font-semibold leading-7 text-gray-900">
                  Request More Information
                </h2>
                <div class="my-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                  <div class="sm:col-span-3">
                    <label
                      for="first-name"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      First name
                    </label>
                    <div class="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autocomplete="given-name"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div class="sm:col-span-3">
                    <label
                      for="last-name"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Last name
                    </label>
                    <div class="mt-2">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autocomplete="family-name"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div class="sm:col-span-3">
                    <label
                      for="first-name"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Phone Number
                    </label>
                    <div class="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autocomplete="given-name"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div class="sm:col-span-3">
                    <label
                      for="last-name"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Whatsapp Number
                    </label>
                    <div class="mt-2">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autocomplete="family-name"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div class="col-span-full">
                    <label
                      for="street-address"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Street address
                    </label>
                    <div class="mt-2">
                      <textarea
                        type="text"
                        rows={3}
                        name="street-address"
                        id="street-address"
                        autocomplete="street-address"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <button className="w-full font-semibold mt-4 rounded-lg bg-[#494CBE] text-white px-6 py-4">
                  Request Info
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
