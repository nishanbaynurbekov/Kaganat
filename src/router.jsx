import { createBrowserRouter } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Portfolio from "./pages/Portfolio"


const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "services",
                element: <Services/>
            },
            {
                path: "portfolio",
                element: <Portfolio/>
            }
        ]
    }
])

export default myRouter