Test of React SSR using Vite as a base for Html2Pdf.

## Features:
- Only server rendering - no client side and no hydration
- Normal dev support - HMR, ...
- Styled components 
- Support for a global css
- Inlining of all assets - so the http server can be simplified + html2pdf doesn't need to be able to load assets
- Standalone bundle without a need to have node_modules (or to run `npm i` on the server)
- Multiple routes
