import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import Body from "./Component/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./Component/About";
import Contact from "./Component/ContactUs";
import Error from "./Component/Error";
import ResturantMenu from "./Component/REsturantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appstore";
import Cart from "./Component/Cart";

const About = lazy(() => import("./Component/About"));

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
      },
      { path: "/contact", element: <Contact /> },
      { path: "/resturant/:resId", element: <ResturantMenu /> },

      {
        path: "/cart",
        element: <Cart />,
      },
    ],

    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
