import Head from "next/head";
import { Fragment } from "react";
import HeaderThree from "@/components/header/header-3";
import BlogHero from "@/components/blogs/hero";
import BlogList from "@/components/blogs/blog-list";
import { getAllItems, getFeaturedItems } from "../../lib/items-util";

export default function Pricing(props) {
  console.log(props.posts);
  return (
    <Fragment>
      <Head>
        <title>Own a Home</title>
        <meta name="description" content=". " />
      </Head>
      <HeaderThree />
      <BlogHero />
      <BlogList blogs={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const heroItems = getAllItems("heros");
  const posts = getAllItems("posts");
  const projects = getAllItems("projects");
  const products = getAllItems("products");
  const pricingItems = getAllItems("pricing");
  const testimonialItems = getAllItems("testimonial");
  const brandItems = getAllItems("brands");
  const LatestProject = getFeaturedItems(projects);
  const FeaturedPost = getFeaturedItems(posts);

  return {
    props: {
      heroItems,
      projects: LatestProject,
      posts: FeaturedPost,
      products,
      pricingItems,
      testimonialItems,
      brandItems,
    },
  };
}
