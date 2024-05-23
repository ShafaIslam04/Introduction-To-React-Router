import { useLoaderData } from "react-router-dom";


const PostDetail = () => {
    const post = useLoaderData();
    const{userId,  body} = post
    return (
        <div>
            <p>{userId}</p>
            <p>{body}</p>
        </div>
    );
};

export default PostDetail;