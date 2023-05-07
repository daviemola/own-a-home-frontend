import { Fragment } from "react";
import Head from "next/head";
import { getAllItems, getFeaturedItems } from "../lib/items-util";
import Promo from "@/components/home-page/promo";
import HeaderThree from "@/components/header/header-3";
import CompanyLayout from "@/components/companies/details/layout";
import BriefInfo from "@/components/companies/details/breifinfo";
import MainContent from "@/components/companies/details/maincontent";

function CompanyPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Own a Home</title>
        <meta name="description" content=". " />
      </Head>
      <HeaderThree />
      <CompanyLayout>
        <div className="md:w-1/3 lg:w-1/4 w-full">
          <BriefInfo />
        </div>
        <div className="md:w-2/3 lg:w-3/4 w-full">
          <MainContent projects={props.projects} />
        </div>
      </CompanyLayout>
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

export default CompanyPage;
