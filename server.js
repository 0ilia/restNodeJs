const http = require("http");
const app = require("./app");

const port = process.env.PORT || 3005;

const server = http.createServer(app);




app.listen(port,()=>console.log("Express server is running at port no : 3005"));