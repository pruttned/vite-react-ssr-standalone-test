import { defer, RouteObject } from "react-router-dom";
import Home from "./Home";
import Page2 from "./Page2";

function delay() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

export const routes: RouteObject[] = [
  {
    element: <Page2 />,
    path: "/page2",
    loader: () => defer({ data: delay().then(() => ({ name: "John Doe" })) }),
  },
  {
    element: <Home />,
    path: "/",
    loader: () => {
      console.log("asd");
      return defer({
        data: delay().then(() => {
          console.log("done");
          return { name: "Jane Doe" };
        }),
      });
    },
  },
];
