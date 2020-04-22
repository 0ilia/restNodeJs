const http = require("http");
const app = require("./app");

const port = process.env.PORT || 3005;

const server = http.createServer(app);

server.listen(port,()=>console.log("Express server is running at port no http://127.0.0.1:"+port));