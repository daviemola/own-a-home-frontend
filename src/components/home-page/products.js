import Link from "next/link";
import { Fragment, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Bathtab from "../svgicons/Bathtab";
import Bedrooms from "../svgicons/Bedrooms";
import FullStar from "../svgicons/FullStar";
import HouseSize from "../svgicons/HouseSize";
import LocationIcon from "../svgicons/Location";
import NairaIcon from "../svgicons/NairaIcon";
import OutlineStar from "../svgicons/OutlineStar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Products({ products }) {
  const [slide, setSlide] = useState(0);
  const [current, setCurrent] = useState(0);
  const numberofslides = 6;

  const updateCurrentSlide = () => {
    setCurrent(current + 1);
    if (current + 1 === numberofslides) setCurrent(0);
  };

  return (
    <Fragment>
      <section id="services" className="text-gray-600">
        <div className="custom-container px-6 mx-auto">
          <div className="flex flex-wrap">
            {products.slice(0, 4).map((product, index) => (
              <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <div className="">
                  <div className="block relative h-full rounded-lg overflow-hidden">
                    <Carousel
                      infiniteLoop={false}
                      showArrows={true}
                      autoPlay={false}
                      stopOnHover={true}
                      animationHandler="fade"
                      swipeable={false}
                      showIndicators={true}
                      showStatus={false}
                      showThumbs={false}
                      interval={10000}
                      onChange={() => {
                        updateCurrentSlide();
                      }}
                      selectedItem={slide}
                    >
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={`${product.image}`}
                      />
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={`${product.image}`}
                      />
                    </Carousel>

                    <figcaption className="absolute top-[7.5%] text-sm text-white px-4">
                      {index === 1 || index === 3 ? (
                        <span className="bg-red-100 uppercase text-red-600 text-xs mr-2 px-4 py-2 rounded-lg font-bold">
                          Sold Out
                        </span>
                      ) : (
                        <span className="bg-green-100 uppercase text-green-600 text-xs mr-2 px-4 py-2 rounded-lg font-bold">
                          Available
                        </span>
                      )}
                    </figcaption>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between">
                      <h2 className="text-zinc-800 title-font text-lg font-medium">
                        {`${product.title}`}
                      </h2>
                      <div className="md:hidden flex items-center my-1">
                        <span className="bg-yellow-300 text-yellow-900 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                          Bestseller
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center">
                        <LocationIcon />
                        <span className="ml-2">Banana Island, Logos</span>
                      </div>
                      <div className="flex items-center gap-3 my-1">
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
                      </div>
                      <div className="flex items-center my-1">
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
                      <div className="flex items-center my-1">
                        <div className="flex items-center">
                          <NairaIcon />
                          <span className="ml-2">3,000,000</span>
                        </div>
                        <span className="bg-yellow-100 ml-3 text-yellow-900 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                          10% off
                        </span>
                      </div>
                      <div className="md:flex hidden items-center my-1">
                        <span className="bg-yellow-300 text-yellow-900 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                          Bestseller
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex mx-auto justify-center mt-8">
            <Link href={"/products"}>
              <button
                disabled
                className="rounded-full px-8 py-3 text-blue-700 font-semibold bg-gray-200"
              >
                <span className="relative text-base uppercase">
                  Load More...
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export function getStaticProps() {
  const products = getAllItems("products");

  return {
    props: {
      products,
    },
  };
}

export default Products;
