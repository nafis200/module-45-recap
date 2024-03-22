import { useLoaderData } from "react-router-dom";
import Post from "./Post";


const Posts = () => {
    const posts = useLoaderData()
    return (
        <div>
         <h2>Posts:{posts.length}</h2>
         <div className="bg-amber-400 grid grid-cols-3">
            {
                posts.map(post => <Post post={post}></Post> )
            }
         </div>
        </div>
    );
};

export default Posts;