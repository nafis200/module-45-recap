import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const {name,website} = user
    return (
        <div className="bg-purple-500 mt-5">
            <h2>I am userdetails :{name}</h2>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;