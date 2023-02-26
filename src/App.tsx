import styled from "styled-components";
import reactLogo from "./assets/react.svg";
import MyComponent from "./MyComponent";

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
    </Root>
  );
}

export default App;
