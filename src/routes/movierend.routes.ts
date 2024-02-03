import { Router } from "express";
import { CreateMovieRendController } from "../modules/movieRend/useCases/createMovieRent/createMovieRendController";

const createMovieRendController = new CreateMovieRendController();

const MovieRendRoutes = Router();

MovieRendRoutes.post("/", createMovieRendController.handle);

export {MovieRendRoutes};