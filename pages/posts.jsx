import Container from "@components/Container";
import CardPost from "@components/CardPost";
import Layout from "@components/Layout";
import MockPosts from "../utils/posts.json"
import {useState} from 'react';
import SectionHeader from "@components/SectionHeader";

function Posts() {
    const [posts,setPost] = useState(MockPosts);
    return(
        <Layout>
        <Container>
        <SectionHeader>Ui Design</SectionHeader>
        {!posts.length ? (
            <div className="text-center py-20">
                <h2 className="text-6xl">No result 😥</h2>
                <p className="text-xl md:w-6/12 w-full mx-auto mt-4 text-white/60">We couldnt find any posts with the keyword `yahahahayuk`. Please try another keyword.</p>
            </div>
        ) : (
            <div className="container mx-auto">
             <div className="flex -mx-4 flex-wrap mt-6">
                {posts.map(post =>(
                <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
                 <CardPost {...post}/>
                </div>
                ))}
             </div>
            </div>
        )}
        </Container>
      </Layout>
    )
}

export default Posts;