import { useLoaderData } from "react-router-dom";
import User from "../User/User";


const Users = () => {
 
const users = useLoaderData();
console.log(users)
    return (
        <div>
            <h1>{users.length}</h1>
            <div>
                {
                    users.map(user=><User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;