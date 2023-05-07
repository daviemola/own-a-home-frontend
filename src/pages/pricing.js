import Head from "next/head";
import { Fragment } from "react";
import HeaderThree from "@/components/header/header-3";
import PricingLayout from "@/components/pricing/layout";
import Plans from "@/components/pricing/plans";

export default function Pricing() {
  return (
    <Fragment>
      <Head>
        <title>Own a Home</title>
        <meta name="description" content=". " />
      </Head>
      <HeaderThree />
      <PricingLayout>
        <Plans />
      </PricingLayout>
    </Fragment>
  );
}
