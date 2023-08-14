import { Router } from "express";

export const viewsRouter = Router();

viewsRouter.get("/", (req, res, next) => {
  res.redirect("/home");
});
