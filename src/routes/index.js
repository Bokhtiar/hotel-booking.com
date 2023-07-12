import { getToken } from "../utils/helper";
import { Navigate } from "react-router-dom";
import {Dashboard} from '../pages/Dashboard/Home/index'
import { DashboardLayout } from "../layouts/dashboard.layout"

const appRoutes = [
    {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
            { path: "*", element: <Navigate to="/404" /> },
            { path: "", element: <Dashboard /> },
            // { path: "edit", element: <ProfileEdit /> },
            // { path: "resume", element: <ResumrIndex /> },
            // { path: "jobs", element: <JobIndex /> },
            // { path: "jobs/create", element: <JobCreate /> },
            // { path: "jobs/show/:id", element: <JobShow /> },

        ],
    },
];

/* Generate permitted routes */
export const permittedRoutes = () => {
    const token = getToken()
    if (token) {
        return appRoutes;
    }

    return [];
};
