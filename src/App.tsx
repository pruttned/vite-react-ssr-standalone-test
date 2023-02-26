import { Route } from "react-router";
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

function App() {
  return (
    <Root>
      <Title>APP</Title>
      <img src={reactLogo} height={64} width={64} alt="logo" />
      <MyComponent />
      <Routes>
        <Route element={<Page2 />} path="/page2" />
        <Route element={<Home />} path="/" />
      </Routes>
    </Root>
  );
}

export default App;
