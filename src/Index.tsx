import globalStyles from "./index.css?inline";

function Index(body: string, styles: string) {
  return `
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My SSR test</title>
        <style>${globalStyles}</style>
        ${styles}
      </head>
      <body>${body}</body>
    </html>
  `;
}

export default Index;
