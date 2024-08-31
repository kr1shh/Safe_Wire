import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
  Navigate
} from "react-router-dom";
import Layout from "./Layout";
import { Login, Register, Home, ForgotPass, UpdatePass, Dashboard, AddBank } from "./pages";
import { Summery,MakeTransfer,Transactions,Profile } from "./components";

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="forgotpassword" element={<ForgotPass />}></Route>
        <Route path="addbank" element={<AddBank />}></Route>
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Navigate to="summery" replace />} />
          <Route path="summery" element={<Summery />}></Route>
          <Route path="transfer" element={<MakeTransfer />}></Route>
          <Route path="transactions" element={<Transactions />}></Route>
          <Route path="profile" element={ <Profile/> }></Route>
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
