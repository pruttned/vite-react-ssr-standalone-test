import type { Router } from "@remix-run/router";
import { Route, RouterProvider } from "react-router";
import { Routes } from "react-router-dom";
import styled from "styled-components";
import reactLogo from "./assets/react.svg";
import MyComponent from "./MyComponent";
import Home from "./pages/Home";
import Page2 from "./pages/Page2";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Title = styled.h1`
  color: silver;
`;

function App({ router }: { router: Router }) {
  return (
    <Root>
      <Title>APP</Title>
      <img src={reactLogo} height={64} width={64} alt="logo" />
      <MyComponent />
      <RouterProvider router={router} />
    </Root>
  );
}

export default App;
