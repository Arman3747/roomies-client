import {
    createBrowserRouter,
  } from "react-router";
import Root from "../layout/Root";
import ErrorPage from "../components/ErrorPage";
import Home from "../layout/Home";
import AddRoommate from "../components/AddRoommate";
import BrowseRoommate from "../components/BrowseRoommate";
import Loading from "../components/Loading";


const router = createBrowserRouter([
    {
        path:"/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                index: true,
                path:'/',
                element: <Home></Home>
            },
            {
                path:"/addRoommate",
                element: <AddRoommate></AddRoommate>,
            },
            {
                path:"/browseRoommate",
                element: <BrowseRoommate></BrowseRoommate>,
                loader: () => fetch('http://localhost:3000/roommates'),
                hydrateFallbackElement: <Loading></Loading>,
            },
            {
                path:"/login",
                element: <h2> login </h2>,
            },
            {
                path:"/register",
                element: <h2> login </h2>,
            },
        ]
    },
    // {
    //     path:"/*",
    //     element: <Error></Error>,
    // },
  ]);

  export default router;