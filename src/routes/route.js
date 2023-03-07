import MainRoot from "../components/MainRoot";
import About from "../pages/About";
import Home from "../pages/Home";
import Language from "../pages/Language";
import RegisterPage from "../pages/RegisterPage";

const ROUTES=[
    {
        path:"/",
        element:<MainRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            },    
            {
                path:"register",
                element:<RegisterPage/>
            },
            {
                path:"language",
                element:<Language/>
            },

        ]
    }
]
export default ROUTES