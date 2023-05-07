import Head from "next/head";
import { Fragment } from "react";
import HeaderThree from "@/components/header/header-3";
import { getAllItems, getFeaturedItems } from "../lib/items-util";
import AboutHero from "@/components/about/about-hero";
import ForConsumers from "@/components/about/for-consumers";
import TheTeam from "@/components/about/the-team";

export default function Pricing(props) {
  console.log(props.posts);
  return (
    <Fragment>
      <Head>
        <title>Own a Home</title>
        <meta name="description" content=". " />
      </Head>
      <HeaderThree />
      <AboutHero />
      <ForConsumers />
      <TheTeam services={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const posts = getAllItems("posts");
  const FeaturedPost = getFeaturedItems(posts);

  return {
    props: {
      posts: FeaturedPost,
    },
  };
}
