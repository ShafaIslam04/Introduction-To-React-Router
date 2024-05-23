import { useLoaderData } from "react-router-dom";

const UserDetail = () => {
    const user = useLoaderData();
    const {name,email,website} = user;

    return (
        <div>
            <h1>Name : {name}</h1>
            <h1>Email : {email}</h1>
            <h1>website : {website}</h1>
        </div>
    );
};

export default UserDetail;