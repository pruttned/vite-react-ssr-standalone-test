import App from "./App";
import ReactDOMServer from "react-dom/server";

const html = ReactDOMServer.renderToString(App());

console.log('html', html);
