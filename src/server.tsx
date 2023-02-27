import http from "node:http";
import App from "./App";
import ReactDOMServer from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import { StaticRouter } from "react-router-dom/server";
import Index from "./Index";
import { createStaticRouter } from "react-router-dom/server";
import { routes } from "./pages/routes";
import { renderToReadableStream } from "react-dom/server";
import React from "react";
import { createStaticHandler } from "@remix-run/router";

const port = process.env.PORT || 8000;

async function streamToString(stream: any): Promise<string> {
  const reader = stream.getReader();
  const chunks: Buffer[] = [];
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      return Buffer.concat(chunks).toString("utf8");
    }
    chunks.push(Buffer.from(value));
  }
}

http
  .createServer(async (req, res) => {
    const styledSheet = new ServerStyleSheet();

    const url = req.url ?? "/";
    let { query } = createStaticHandler(routes);
    let url2 = new URL('http://localhost:5173/');
    const ctx = await query(new Request(url2.href));
    const router = createStaticRouter(routes, ctx as any);

    // const bodyHtml = ReactDOMServer.renderToString(styledSheet.collectStyles(App({ router })));

    const stream = await renderToReadableStream(
      <React.Suspense>
        {styledSheet.collectStyles(App({ router }))}
      </React.Suspense>
    );

    console.log("1");

    await stream.allReady;
    console.log("2");

    const bodyHtml = await streamToString(stream);

    const html = Index(bodyHtml, styledSheet.getStyleTags());

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(html);
    res.end();
  })
  .listen(port, () => {
    console.log(`App is running on port ${port}`);
  });
