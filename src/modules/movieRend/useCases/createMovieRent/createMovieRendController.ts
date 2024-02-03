import { Request, Response } from "express";	
import { CreateMovieRendUseCase } from "./createMovieRendUseCase";

export class CreateMovieRendController{
	async handle(req: Request, res: Response){
		const {userId, movieId} = req.body;

		const createMovieRendUseCase = new CreateMovieRendUseCase();

		try {
			const result = await createMovieRendUseCase.execute({userId, movieId});
			return res.status(201).json(result);
		} catch (error) {
			return res.status(400).json({error: error});
		}

	}
}