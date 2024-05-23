import { Link, useRouteError } from "react-router-dom";


const Errorpage = () => {
    const error = useRouteError()
    // console.log(error)
    return (
        <div>
            <h1>Oops!!!!</h1>
            <h2>{error.message || error.statusText}</h2>
            {error.status===404 && <div>
                <p>Go back where you from</p>
                <Link to="/"><button>Go Back</button></Link>
            </div> }

        </div>
    );
};

export default Errorpage;