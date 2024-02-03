import { Router } from "express";
import { userRoutes } from "./user.routes";
import { movieRoutes } from "./movie.routes";
import { MovieRendRoutes } from "./movierend.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/movies", movieRoutes);
routes.use("/movieRend", MovieRendRoutes);

export { routes };
