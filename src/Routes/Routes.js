import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../page/About";
import Home from "../page/Home";


const routers = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "about",
                element: <About/>,
              },

        ]
    },
]);
export default routers;