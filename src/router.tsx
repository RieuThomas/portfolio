import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Skill from "./pages/Skill";

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/project",
                element: <Project />,
            },
            {
                path: "/skill",
                element: <Skill />,
            },
        ]
    }
])

    export default router