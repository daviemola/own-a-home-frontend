import Head from "next/head";
import { Fragment } from "react";
import HeaderThree from "@/components/header/header-3";
import TermsContent from "@/components/termsprivacycookie/terms-content";
// import { getItemData, getItemsFiles } from "../../lib/items-util";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PrivacyContent from "@/components/termsprivacycookie/privacy-content";

export default function Pricing(props) {
  console.log(props.content);
  return (
    <Fragment>
      <Head>
        <title>Own a Home</title>
        <meta name="description" content=". " />
      </Head>
      <HeaderThree />
      <PrivacyContent data={props.post} content={props.content} />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const filePath = path.join(
    `${process.cwd()}/src/data/privacy/privacyterms.md`
  );
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContent);
  console.log(data);
  console.log(content);
  return {
    props: {
      post: data,
      content: content,
    },
  };
}
