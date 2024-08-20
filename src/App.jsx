import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import { Login, Register, Home } from "./pages";

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={ <Layout/> }>
        <Route path="" element={ <Home/> }></Route>
        <Route path="login" element= { <Login/> }></Route>
        <Route path="register" element={ <Register/> }></Route>
      </Route>
    )
  )

  return <RouterProvider router={router} />;
};

export default App;
