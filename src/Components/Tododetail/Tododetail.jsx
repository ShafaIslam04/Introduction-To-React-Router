import { useLoaderData, useNavigate } from "react-router-dom";


const Tododetail = () => {
    const todo = useLoaderData();
    const nevigate = useNavigate();
    const {title}=todo
    
    const clickHandler = () =>{

        nevigate(-1)
    }

    return (
        <div>
            <p>title : {title}</p>
            <button onClick={clickHandler}>Go back</button>
        </div>
    );
};

export default Tododetail;