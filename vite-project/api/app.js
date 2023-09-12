import express from "express"
import rateLimit from "./config/rateLimit.js";
import routeIndex from "./routers/index.js";
import "dotenv/config.js";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app
    .use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "http://localhost:5173");
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
        res.header("Access-Control-Allow-Headers", "Content-Type");
        next();
    })

    .use(rateLimit)

    .use(express.json())

    .use("/api", routeIndex)
    
    .listen(PORT, ()=> {
        console.log(`server in http://127.10.10.10:${PORT}`);
    })