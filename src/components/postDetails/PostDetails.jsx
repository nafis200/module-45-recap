import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";



const PostDetails = () => {
    const post = useLoaderData();
    const params = useParams()
    console.log(params);
    console.log(params.postId);
    const {id,title,body} = post
    const navigate = useNavigate();
    const handleGo = ()=>{
        navigate(-1)
    }
    return (
        <div>
            <h3>Post details about</h3>
            <p>Title:{title} </p>
            <p><small>{body}</small></p>
            <button onClick={handleGo} className="btn">Go back</button>
        </div>
    );
};

export default PostDetails;