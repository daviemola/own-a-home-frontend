import Head from "next/head";
import { Fragment } from "react";
import { getAllItems, getItemData, getItemsFiles } from "../../lib/items-util";
import { getPostCategories } from "../../lib/getPostCategories";
import { getRelatedPosts } from "../../lib/getRelatedPosts";
import { getPostTags } from "../../lib/getPostTags";
import PostContent from "@/components/blogs/blog-details/blog-content";
import HeaderThree from "@/components/header/header-3";

function PostDetailPage(props) {
  console.log(props.post);
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <HeaderThree />
      <PostContent
        post={props.post}
        categories={props.categories}
        tags={props.tags}
      />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const post = getItemData(slug, "posts");
  const posts = getAllItems("posts");
  const categories = getPostCategories();
  const tags = getPostTags();
  const relatedPosts = getRelatedPosts(posts, categories, tags, 4);
  const currentPostIndex = posts.findIndex((post) => post.slug === slug);
  const nextPost = posts[currentPostIndex + 1]
    ? posts[currentPostIndex + 1]
    : {};
  const prevPost = posts[currentPostIndex - 1]
    ? posts[currentPostIndex - 1]
    : {};

  return {
    props: {
      post,
      tags,
      categories,
      relatedPosts,
      prevPost,
      nextPost,
    },
  };
}

export function getStaticPaths() {
  const postFilenames = getItemsFiles("posts");

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
