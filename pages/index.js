import FeaturedPost from "@components/FeaturedPost";
import CardPost from "@components/CardPost";
import Container from "@components/Container";
import { useState } from "react";
import Layout from "@components/Layout";
import MockPosts from "../utils/posts.json"
import Head from "next/head";

export default function Home() {
  const [posts,setPost] = useState(MockPosts);
  return (
    <Layout>
      <Head>
        <title>Home &mdash; Epictetus</title>
      </Head>
        <Container>
        <div className="container mx-auto">
          <FeaturedPost/>
          <div className="flex -mx-4 flex-wrap mt-6">
            {posts.map(post =>(
            <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
              <CardPost {...post}/>
            </div>
            ))}
          </div>
        </div>
        </Container>
      </Layout>
  );
}
