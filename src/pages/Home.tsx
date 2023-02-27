import React from "react";
import { Await, useLoaderData } from "react-router-dom";

function Home() {
  const { data } = useLoaderData() as any;
  console.log("data", data);
  return (
    <div>
      <Await
        resolve={data}
        errorElement={<div>Could not load data 😬</div>}
        children={(resolvedData: any) => (
          <div>Page1 {JSON.stringify(resolvedData)}</div>
        )}
      />
    </div>
  );
}

export default Home;
