import { io } from "../app/server.js";
import { newsRepository } from "../repositories/news.repository.js";

export async function socketFn(req, res, next) {
  const news = await newsRepository.findMany();
  io.emit("reloadNews", {
    list: news,
    listOk: news.length > 0,
  });
}
