import styles from "./index.css?inline";
import App from "./App";

function Index() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My SSR test</title>
        <style>{styles}</style>
      </head>
      <body>
        <App />
      </body>
    </html>
  );
}

export default Index;
