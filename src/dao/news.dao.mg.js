import mongoose from "mongoose";
import { DaoMongoose } from "./defaultDaoMongoose.js";

export const SchemaNews = new mongoose.Schema(
  {
    id: { type: String, require: true, unique: true },
    title: { type: String, require: true },
    date: { type: String, require: true },
    image: { type: String, require: true },
    externalLink: { type: String, required: true },
  },
  { versionKey: false }
);

const newsModel = mongoose.model("news", SchemaNews);

export const nmg = new DaoMongoose(newsModel);
