import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import { Login, Register, Home, ForgotPass, UpdatePass, Dashboard } from "./pages";

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={ <Layout/> }>
        <Route path="" element={ <Home/> }></Route>
        <Route path="login" element= { <Login/> }></Route>
        <Route path="register" element={ <Register/> }></Route>
        <Route path="forgotpassword" element={ <ForgotPass/> }></Route>
        <Route path="updatepassword" element={ <UpdatePass/> }></Route>
        <Route path="dashboard" element={ <Dashboard/> }></Route>
      </Route>
    )
  )

  return <RouterProvider router={router} />;
};

export default App;
