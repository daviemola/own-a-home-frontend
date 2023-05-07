import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";
import ProjectSlider from "@/components/projects/projects-slider";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function MainContent({ projects }) {
  let [categories] = React.useState({
    Overview: [
      {
        id: 1,
        title: "About Company",
        description:
          "Our agents specialize in multiple areas, and have a thorough understanding of the local real estate market. In addition to our expertise in traditional real estate transactions, we also offer a range of services including [Other Services Offered]. Our goal is to make the real estate process as smooth and stress-free as possible for our clients. Middlechase is a Property Development and Management Company with Head Office located in 1-5 Odunlami Street, Lagos Island, Lagos. We have 4 ongoing projects, 28 completed projects and 10 high profile key contacts.",
      },
    ],
    Featured: [
      {
        id: 1,
        title: "Featured Projects",
        description:
          "Swag slow-carb plaid lyft truffaut hot chicken chia gluten-free pabst keytar edison bulb gastropub portland shoreditch everyday carry. Brunch vaporware aesthetic fam, grailed plaid activated charcoal mustache whatever neutral milk hotel humblebrag hammock bespoke adaptogen. Seitan fingerstache normcore letterpress flexitarian, selfies butcher sustainable JOMO mixtape. La croix cupping tumeric palo santo fingerstache Brooklyn cred, craft beer poke disrupt fit kogi hella humblebrag. Crucifix glossier sartorial, post-ironic paleo blue bottle umami lyft air plant banh mi.",
      },
    ],
    Completed: [
      {
        id: 1,
        title: "Completed Projects",
        description:
          "Readymade chicharrones direct trade, tumblr meggings sriracha banh mi hell of small batch stumptown godard cloud bread tofu ugh authentic. Selfies gluten-free trust fund jawn marxism scenester shaman 90's stumptown praxis.",
      },
    ],
    Reviews: [
      {
        id: 1,
        title: "Reviews",
        description:
          "La croix cupping tumeric palo santo fingerstache Brooklyn cred, craft beer poke disrupt fit kogi hella humblebrag.",
      },
    ],
  });

  return (
    <Fragment>
      <div className="md:ml-12 md:pt-0 pt-12">
        <Tab.Group>
          <Tab.List className="flex border-b-2 border-gray-200">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 text-sm font-medium leading-5 text-gray-500 border-b border-gray-400",
                    "text-gray-400 focus:outline-none focus:ring-none border-b-[3px] border-zinc-600 border-opacity-0",
                    selected
                      ? "text-gray-900 border-opacity-100"
                      : "hover:text-black"
                  )
                }
              >
                <span className="text-base">{category}</span>
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-6 border-2 rounded-xl pb-12 shadow border-gray-200 border-opacity-50">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  "rounded-xl bg-white p-4",
                  "ring-white focus:outline-none focus:ring-2"
                )}
              >
                <div className="relative rounded-md mt-6 py-3 md:px-3 px-0">
                  <ul>
                    {posts.map((post) => (
                      <li key={post.id} className="">
                        <h3 className="text-xl text-gray-900 font-semibold">
                          {post.title}
                        </h3>
                        <p className="mt-6">{post.description}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="md:px-12 px-6 mt-14 pt-4 pb-16 bg-indigo-100 rounded-lg">
                    <ProjectSlider projects={projects} />
                  </div>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </Fragment>
  );
}

export default MainContent;
