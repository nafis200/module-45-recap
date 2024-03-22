import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {id,title} = post
    const navigate = useNavigate()
 
    const handleShow = ()=>{
         navigate(-1)
    }

    return (
        <div className="mt-3 p-3">
            <h4>Post of Id: {id}</h4>
            <p>{title}</p>
            <Link to ={`/post/${id}`}>Post details</Link>
            <Link to={`/post/${id}`}><button className="btn">Show details</button></Link>
            <br />
            <button onClick={handleShow} className="btn btn-primary">Click to see details</button>
        </div>
    );
};

export default Post;