import express from "express";
import { Router } from "express";
import { newsRouter } from "./router.news.js";

export const apiRouter = Router();

apiRouter.use(express.json());
apiRouter.use(express.urlencoded({ extended: true }));

apiRouter.use("/news", newsRouter);
