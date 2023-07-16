import { Link, Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";

export const MainLayout = () => {
    return (
        <>
            {/* <MainNavbar /> */}
            <Header></Header>
            <div className="">
                <Outlet />
            </div>
            {/* <Footer /> */}
            <Footer></Footer>
        </>
    );
};
