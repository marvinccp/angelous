import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./components/home/Home";
import { Error } from "./components/Error/Error";
import { Contact } from "./components/contact/Contact";
import { Articles } from "./components/articles/Articles";
import  {articleLoader} from './components/articles/Articles'
import { Main } from "./components/main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/contact/",
    element: <Contact />,
  },
  {
    path: "/articles/:id",
    element: <Articles />,
    loader: articleLoader,
    errorElement: <Error />,
  },
  {
    path: "/main/",
    element: <Main />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
