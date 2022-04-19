import Container from "@components/Container";
import CardPost from "@components/CardPost";
import Layout from "@components/Layout";
import MockPosts from "../utils/posts.json";
import { useState } from "react";
import SectionHeader from "@components/SectionHeader";
import Head from "next/head";

function Posts() {
  const [posts, setPost] = useState(MockPosts);
  return (
    <Layout>
      <Head>
        <title>Posts &mdash; Epictetus</title>
      </Head>
      <Container>
        <SectionHeader>Ui Design</SectionHeader>
        {!posts.length ? (
          <div className="py-20 text-center">
            <h2 className="text-6xl">No result 😥</h2>
            <p className="mx-auto mt-4 w-full text-xl text-white/60 md:w-6/12">
              We couldnt find any posts with the keyword `yahahahayuk`. Please
              try another keyword.
            </p>
          </div>
        ) : (
          <div className="container mx-auto">
            <div className="-mx-4 mt-6 flex flex-wrap">
              {posts.map((post) => (
                <div key={post.id} className="w-full px-4 py-6 md:w-4/12">
                  <CardPost {...post} />
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </Layout>
  );
}

export default Posts;
