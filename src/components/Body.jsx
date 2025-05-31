import React from "react";
import SignIn from "./SignIn";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);
const Body = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
