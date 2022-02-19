import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";


export const Routes = [
    {path: '/homepage', component: Homepage, exact: true},
    {path: '/clients', component: Clients, exact: true},
    {path: '/clients/:id', component: Client, exact: true },
    {path: '/clients/:id/history', component: ClientHistory, exact: true },
    {path: '/clients/:id/customize', component: ClientCustomize, exact: true },
    {path: '/database', component: DataBase, exact: true},
]

