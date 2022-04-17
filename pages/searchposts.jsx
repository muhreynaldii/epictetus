import Container from "@components/Container";
import CardPost from "@components/CardPost";
import Layout from "@components/Layout";
import MockPosts from "../utils/posts.json"
import {useState} from 'react';
import SectionHeader from "@components/SectionHeader";

function SearchPosts() {
    const [posts,setPost] = useState(MockPosts);
    return(
        <Layout>
        <Container>
        <SectionHeader>Search: Ui Design</SectionHeader>
        <div className="container mx-auto">
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
    )
}

export default SearchPosts;