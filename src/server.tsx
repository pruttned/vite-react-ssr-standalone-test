import http from "node:http";
import App from "./App";
import ReactDOMServer from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import { StaticRouter } from "react-router-dom/server";
import Index from "./Index";

const port = process.env.PORT || 8000;

http
  .createServer((req, res) => {
    const styledSheet = new ServerStyleSheet();
    const bodyHtml = ReactDOMServer.renderToString(
      <StaticRouter location={req.url ?? "/"}>
        {styledSheet.collectStyles(App())}
      </StaticRouter>
    );
    const html = Index(bodyHtml, styledSheet.getStyleTags());

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(html);
    res.end();
  })
  .listen(port, () => {
    console.log(`App is running on port ${port}`);
  });
