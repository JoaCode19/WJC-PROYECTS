// Libery
import express from "express";
import { Server as socketIOServer } from "socket.io";
import cors from "cors";

//root
import { apiRouter } from "../routers/api/router.api.js";
import { viewsRouter } from "../routers/web/router.views.js";

//config
import { PORT } from "../config/config.js";

//mid
import { apiErrorHandler } from "../mid/error.handler.js";

//DDBB
import { conectar } from "../dao/mongoose.js";

const app = express();

await conectar();

app.use(cors({ origin: "*" }));
app.use("/public", express.static("public"));
app.use("/api/assets", express.static("assets"));

app.use((req, res, next) => {
  req["io"] = io;
  next();
});

app.use("/api", apiRouter);
app.use("/", viewsRouter);
app.use(apiErrorHandler);

const httpServer = app.listen(PORT, () => {});

export const io = new socketIOServer(httpServer);

io.on("connection", async (clientSocket) => {});
