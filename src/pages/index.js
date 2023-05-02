import { Fragment } from "react";
import Head from "next/head";
import { getAllItems, getFeaturedItems } from "../lib/items-util";
import Hero from "../components/home-page/hero";
import Products from "../components/home-page/products";
import Promo from "@/components/home-page/promo";
import About from "@/components/home-page/about";
import HeaderOne from "@/components/header/header-1";
import SearchInput from "@/components/home-page/searchinput";
import CarouselSection from "@/components/home-page/carousel";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Own a Home</title>
        <meta name="description" content=". " />
      </Head>
      <HeaderOne />
      <CarouselSection heroItems={props.heroItems} />
      {/* <Hero heroItems={props.heroItems} /> */}
      <SearchInput />
      <Products products={props.products} />
      <Promo />
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

export default HomePage;
