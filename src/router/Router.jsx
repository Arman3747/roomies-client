import {
    createBrowserRouter,
} from "react-router";
import Root from "../layout/Root";
import ErrorPage from "../components/ErrorPage";
import Home from "../layout/Home";
import AddRoommate from "../components/AddRoommate";
import BrowseRoommate from "../components/BrowseRoommate";
import Loading from "../components/Loading";
import RoomDetails from "../components/RoomDetails";
import UpdateRoommate from "../components/UpdateRoommate";
import Login from "../layout/Login";
import Register from "../layout/Register";
import PrivateRoute from "../provider/PrivateRoute";
import MyListings from "../components/MyListings";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://roomies-server-seven.vercel.app/roommates'),
                hydrateFallbackElement: <Loading></Loading>,
            },
            {
                path: "/addRoommate",
                element: <PrivateRoute><AddRoommate></AddRoommate></PrivateRoute>,
            },
            {
                path: "/browseRoommate",
                element: <BrowseRoommate></BrowseRoommate>,
                loader: () => fetch('https://roomies-server-seven.vercel.app/roommates'),
                hydrateFallbackElement: <Loading></Loading>,
            },
            {
                path: "/myListings",
                element: <PrivateRoute><MyListings></MyListings></PrivateRoute>,
                loader: () => fetch('https://roomies-server-seven.vercel.app/roommates'),
                hydrateFallbackElement: <Loading></Loading>,
            },
            {
                path: "/roomDetails/:id",
                element: <PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://roomies-server-seven.vercel.app/roommates/${params.id}`),
                hydrateFallbackElement: <Loading></Loading>,
            },
            {
                path: "/updateRoommate/:id",
                element: <PrivateRoute><UpdateRoommate></UpdateRoommate></PrivateRoute>,
                loader: ({ params }) => fetch(`https://roomies-server-seven.vercel.app/roommates/${params.id}`),
                hydrateFallbackElement: <Loading></Loading>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            }
        ]
    },
    // {
    //     path:"/*",
    //     element: <Error></Error>,
    // },
]);

export default router;