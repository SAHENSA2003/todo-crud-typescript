import express from "express";
import dbConnect from "./config/dbConnect.ts";
import todoRoute from "./Router/todoRouter.js";
const app = express();
const port = 9001;
dbConnect();
app.use(express.json());
app.use("/", todoRoute);
app.listen(port, () => {
    console.log(`server is running on ${port}`);
});
//# sourceMappingURL=server.js.map