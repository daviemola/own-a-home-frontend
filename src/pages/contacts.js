import { Fragment } from "react";
import Head from "next/head";
import Promo from "@/components/home-page/promo";
import HeaderThree from "@/components/header/header-3";

import { getAllItems, getFeaturedItems } from "../lib/items-util";
import ContactForm from "@/components/contact/contact-form";

export default function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Own a Home</title>
        <meta name="description" content=". " />
      </Head>
      <HeaderThree />
      <ContactForm />
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
