import { socketFn } from "../../mid/soketio.news.js";
import News from "../../models/entities/News.model.js";
import { newsRepository } from "../../repositories/news.repository.js";

export async function handlePost(req, res, next) {
  try {
    const enews = await newsRepository.add(new News(req.body).dto());
    socketFn();
    res.status(201).json(enews);
  } catch (error) {
    next(error);
  }
}

export async function handleGet(req, res, next) {
  try {
    const gnews = await newsRepository.findMany();
    res.json(gnews);
  } catch (error) {
    next(error);
  }
}

export async function handlePut(req, res, next) {
  //en construccion esta pensado para hacer borrado logico o cambiar el estado de las noticias cuando se incoopore plataformas de pago.
}

export async function handleDelete(req, res, next) {
  //en construccion esta pensado para eliminar a futuro noticias
}
