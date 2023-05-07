import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

export default function BlogItem({ blog }) {
  return (
    <Fragment>
      <div className={`project-item gallery-item group`}>
        <Link href={`/blogs/${blog.slug}`}>
          <div>
            <div className="project-img relative before:absolute before:bg-black before:opacity-5 before:w-full before:h-full before:z-[1]">
              <Image
                src="/bg/one.jpg"
                alt={"title"}
                width={472}
                height={400}
                layout="responsive"
                objectFit="cover"
                quality={60}
                priority
                className="rounded-lg"
              />
            </div>
            <div className="px-2 py-4 bg-white rounded-b-md">
              <div className="flex items-center">
                <span className="py-1 px-3 mr-2 bg-gray-800 text-white text-sm rounded-full">
                  Real Estate
                </span>
                &middot;
                <span className="ml-2">8 min read</span>
              </div>
              <h3 className="text-gray-900 text-lg my-1 font-semibold">
                {blog.title}
              </h3>
              <div className="flex items-center space-x-4">
                <img
                  className="w-10 h-10 rounded-full"
                  src="/profile/profile.jpg"
                  alt=""
                />
                <div className="font-medium">
                  <div>Jese Leos</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    UX writer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </Fragment>
  );
}
