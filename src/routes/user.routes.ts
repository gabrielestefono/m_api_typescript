import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/createUserController";

const createUserController = new CreateUserController();

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);

export {userRoutes};