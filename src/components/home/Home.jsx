import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../footer/Footer";


const Home = () => {
    return (
        <div>
            <h2>This is the Home components</h2>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;