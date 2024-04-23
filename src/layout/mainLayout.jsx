import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const MainLayout = () => {
    return (
        <>
            <Navbar />
           <Outlet />
        </>
    )
}

export default MainLayout;