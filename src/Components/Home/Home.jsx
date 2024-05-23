import { Outlet, useNavigation } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";


const Home = () => {
    const navigation = useNavigation();
    console.log(navigation)
    return (
        <div>
            <Nav></Nav>
           <h1>this is home page</h1> 
           {
            navigation.state==="loading"?<p>...Loading</p>:<Outlet></Outlet>
           }
           
           <Footer></Footer>
        </div>
    );
};

export default Home;