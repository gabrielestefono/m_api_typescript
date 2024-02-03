import { Request, Response } from "express";	
import { CreateUserUseCase } from "./createUserUseCase";

export class CreateUserController{
	async handle(req: Request, res: Response){
		const {name, email} = req.body;

		const createUserUseCase = new CreateUserUseCase();

		try {
			const result = await createUserUseCase.execute({name, email});
			return res.status(201).json(result);
		} catch (error) {
			return res.status(400).json({error: error});
		}

	}
}