import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Nav from './Components/Nav/Nav';
import Users from './Components/Users/Users';
import UserDetail from './UserDetail/UserDetail';
import Posts from './Components/posts/Posts';
import PostDetail from './Components/PostDetail/PostDetail';
import Todos from './Components/Todos/Todos';
import Tododetail from './Components/Tododetail/Tododetail';
import Errorpage from './Components/Errorpage/Errorpage';

const router = createBrowserRouter([
  {
   
    path : '/',
    element : <Home></Home>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About> ,
      },

      {
        path: "/nav",
        element: <Nav></Nav> ,
      },
      {
        path : "/users",
        loader : () => fetch('https://jsonplaceholder.typicode.com/users'),
        element : <Users></Users>
      },
      {
        path : "/users/:userid",
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`)  ,
        element : <UserDetail></UserDetail>

      },
      {
        path : "/posts",
        loader : ()=> fetch(`https://jsonplaceholder.typicode.com/posts`),
        element : <Posts></Posts>
      },
      {
        path : "/posts/:postid",
        loader : ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`),
        element : <PostDetail>

        </PostDetail>
      },
      {
        path : "/todos",
        loader : ()=>fetch(`https://jsonplaceholder.typicode.com/todos`),
        element: <Todos></Todos>

      },
      {
        path : "/todos/:todosid",
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/todos/${params.todosid}`),
        element:<Tododetail></Tododetail>
      }
      

    ]
 
 
 
 
  }

  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
