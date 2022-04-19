import FeaturedPost from "@components/FeaturedPost";
import CardPost from "@components/CardPost";
import Container from "@components/Container";
import { useState } from "react";
import Layout from "@components/Layout";
import MockPosts from "../utils/posts.json";
import Head from "next/head";

export default function Home() {
  const [posts, setPost] = useState(MockPosts);
  return (
    <Layout>
      <Head>
        <title>Home &mdash; Epictetus</title>
      </Head>
      <Container>
        <div className="container mx-auto">
          <FeaturedPost />
          <div className="-mx-4 mt-6 flex flex-wrap">
            {posts.map((post) => (
              <div key={post.id} className="w-full px-4 py-6 md:w-4/12">
                <CardPost {...post} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Layout>
  );
}
