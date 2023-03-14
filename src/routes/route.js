import MainRoot from "../components/MainRoot";
import About from "../pages/About";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Language from "../pages/Language";
import News from "../pages/News";
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
            {
                path:"news",
                element:<News/>
            },
            {
                path:"detail",
                element:<Detail/>
            },


        ]
    }
]
export default ROUTES