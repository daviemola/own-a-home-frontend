import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import LinkedIn from "../svgicons/LinkedIn";

export default function TeamMember({ blog }) {
  return (
    <Fragment>
      <div className={`project-item gallery-item group`}>
        <Link href="#">
          <div>
            <div className="project-img relative before:absolute before:bg-black before:opacity-5 before:w-full before:h-full before:z-[1]">
              <Image
                src="/companies/avatar-one.jpg"
                alt={"title"}
                width={472}
                height={400}
                layout="responsive"
                objectFit="cover"
                quality={60}
                priority
                className="rounded-t-2xl"
              />
              <figcaption className="absolute bottom-[0%] rounded-t-3xl text-sm text-white px-4 w-full bg-black bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-600">
                <div className="my-10">
                  <span className="flex items-center">
                    <h1 className="text-white text-xl mr-2">Uche Emordi</h1>
                    <LinkedIn />
                  </span>
                  <span className="text-base">Co-Founder</span>
                </div>
              </figcaption>
            </div>
          </div>
        </Link>
      </div>
    </Fragment>
  );
}
