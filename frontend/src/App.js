import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import SignIn from "./components/User/signin";
import SignUp from "./components/User/signup";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Nav />,
      children: [
        { index: true, element: <SignUp /> },
        { path: "signin", element: <SignIn /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
