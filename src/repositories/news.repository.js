import { nmg } from "../dao/news.dao.mg.js";
import { DefaultRepository } from "./DefaultRepository.js";

export const newsRepository = new DefaultRepository(nmg);
