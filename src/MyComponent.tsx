import { useState } from "react";

function MyComponent() {
  const [x, setX] = useState(1);
  return <div>ahoj {x}</div>;
}

export default MyComponent;
