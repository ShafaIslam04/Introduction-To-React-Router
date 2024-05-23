import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Posts from './../posts/Posts';

const Todo = ({todo}) => {
    const {body, title, userid,id}=todo
    const nevigate= useNavigate();
    
    const handleClick = () =>{
        nevigate(`/contact`)
    }
    return (
        <div>
            
            <p>{title}</p>
            <p>{userid}</p>
            <Link to={`/todos/${id}`}><button>Detail</button></Link>
            <button onClick={handleClick}>Go To</button>
        </div>
    );
};

export default Todo;