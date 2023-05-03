import { Fragment } from "react";
import Head from "next/head";
import HeaderThree from "@/components/header/header-3";
import Layout from "@/components/project/Layout";
import Carousel from "@/components/project/CarouselSection";
import SideSection from "@/components/project/SideSection";

export default function Individual() {
  return (
    <Fragment>
      <Head>
        <title>Own a Home</title>
        <meta name="description" content=". " />
      </Head>
      <HeaderThree />
      <Layout>
        <div className="project-main">
          <Carousel />
        </div>
        <div className="project-minor">
          <SideSection />
        </div>
      </Layout>
    </Fragment>
  );
}
