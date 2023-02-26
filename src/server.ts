import Index from "./Index";
import ReactDOMServer from "react-dom/server";

const html = ReactDOMServer.renderToString(Index());

console.log("html", html);
