import { useState } from "react";
import styled from "styled-components";

const Root = styled.div`
  padding: 20px;
  border: solid 1px silver;
`;

function MyComponent() {
  const [x, setX] = useState(1);
  return <Root>My component with a hook {x}</Root>;
}

export default MyComponent;
