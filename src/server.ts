import http from "node:http";
import Index from "./Index";
import ReactDOMServer from "react-dom/server";

const port = process.env.PORT || 8000;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    const html = ReactDOMServer.renderToString(Index());
    res.write(html);
    res.end();
  })
  .listen(port, () => {
    console.log(`App is running on port ${port}`);
  });
