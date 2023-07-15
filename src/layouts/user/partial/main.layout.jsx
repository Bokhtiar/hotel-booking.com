import { Link, Outlet } from "react-router-dom";
import { Header } from "./header";

export const MainLayout = () => {
    return (
        <>
            {/* <MainNavbar /> */}
            <Header></Header>
            <div className="">
                <Outlet />
            </div>
            {/* <Footer /> */}
            <h3>Footer</h3>
        </>
    );
};
