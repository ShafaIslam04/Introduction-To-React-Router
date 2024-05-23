import { Link } from "react-router-dom";


const Post = ({post}) => {
    const {userId, id, title, body} = post
    return (
        <div>
            <p>User Id : {userId}</p>
            <p>Id : {id}</p>
            <p>Title: {title}</p>
            <p>Body : {body}</p>
            <Link to={`/posts/${id}`}> Post Detail</Link>
        </div>
    );
};

export default Post;