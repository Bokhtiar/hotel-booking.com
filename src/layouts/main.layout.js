import { Outlet } from "react-router-dom";
// import { MainNavbar } from "components/navbar";
// import { Footer } from "components/footer";

export const MainLayout = () => {
    return (
        <>
            {/* <MainNavbar /> */}
            <h3>Header</h3>
            <div className="mt-[88px]">
                <Outlet />
            </div>
            {/* <Footer /> */}
            <h3>Footer</h3>
        </>
    );
};
