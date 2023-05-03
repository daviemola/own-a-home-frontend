import { Fragment } from "react";
import Head from "next/head";
import { getAllItems, getFeaturedItems } from "../lib/items-util";
import Products from "../components/listing/products";
import Promo from "@/components/home-page/promo";
import SearchInput from "@/components/home-page/searchinput";
import HeaderThree from "@/components/header/header-3";
import Layout from "@/components/listing/Layout";
import FilterSearch from "@/components/listing/filtersearch";

function ListingPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Own a Home</title>
        <meta name="description" content=". " />
      </Head>
      <HeaderThree />
      <SearchInput />
      <Layout>
        <div className="lg:w-3/4">
          <Products products={props.products} />
        </div>
        <div className="lg:w-1/4 w-full">
          <FilterSearch />
        </div>
      </Layout>
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

export default ListingPage;
