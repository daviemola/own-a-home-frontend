import Head from "next/head";
import { Fragment } from "react";
import HeaderThree from "@/components/header/header-3";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import CookieContent from "@/components/termsprivacycookie/cookie-content";

export default function Pricing(props) {
  return (
    <Fragment>
      <Head>
        <title>Own a Home</title>
        <meta name="description" content=". " />
      </Head>
      <HeaderThree />
      <CookieContent data={props.post} content={props.content} />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const filePath = path.join(`${process.cwd()}/src/data/cookies/cookies.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContent);
  return {
    props: {
      post: data,
      content: content,
    },
  };
}
