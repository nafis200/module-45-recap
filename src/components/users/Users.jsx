import { useLoaderData } from "react-router-dom";
import User from "../user/User";


const Users = () => {
   
    const users = useLoaderData();
    
    return (
        <div className="bg-sky-600">
            <h2>Our users: {users.length}</h2>
            <p>This is fantastic website</p>
            <div className="grid grid-cols-3">
               {
                 users.map(user => <User user={user}></User> )
               }
            </div>
        </div>
    );
};

export default Users;

