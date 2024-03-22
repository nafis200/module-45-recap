import { useRouteError } from "react-router-dom";


const Errorpage = () => {
    const error = useRouteError()
    console.log(error);
    const {status,statusText} = error
    return (
        <div className="bg-pink-500 mt-5">
            <h2>Opps!!!</h2>
            <p>{status}</p>
            <p>{statusText}</p>
            {
                status === 404 && <div className="mt-8">
                    <h3>Page not found</h3>
                    <p>Go back where you Form</p>
                </div>
            }
        </div>
    );
};

export default Errorpage;