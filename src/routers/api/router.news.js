import { Router } from "express";

import {
  handleDelete,
  handleGet,
  handlePost,
  handlePut,
} from "../../controllers/api/controller.all.news.js";

export const newsRouter = Router();

newsRouter.get("/", handleGet);
newsRouter.post("/", handlePost);
newsRouter.put("/:nid", handlePut);
newsRouter.delete("/:nid", handleDelete);
