import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id,name,phone} = user;
    return (
        <div>
            <p>{id}</p>
            <p>{name}</p>
            <p>{phone}</p>
            <Link to={`/users/${id}`}>Show Detail</Link>

        </div>
    );
};

export default User;