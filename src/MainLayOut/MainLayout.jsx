import { Navigate, Outlet } from "react-router-dom";
import Navber from "../shared/Navber/Navber";
import Footer from "../shared/footer/Footer";

const MainLayOut = () => {
    return ( 
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
     );
}
 
export default MainLayOut;