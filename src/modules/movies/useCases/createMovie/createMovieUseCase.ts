import { Movie } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/apperror";
import { CreateMovieDTO } from "../../dtos/createMovieDTO";

export class CreateMovieUseCase{
	async execute({title, duration, release_date}: CreateMovieDTO): Promise<Movie>{
		// Verifica se o Filme já está cadastrado

		const movieAlreadyExists = await prisma.movie.findUnique({
			where: {
				title
			}
		});

		if(movieAlreadyExists){
			throw new AppError("Movie already exists");
		}

		// Cria o usuário
		const movie = await prisma.movie.create({
			data: {
				title,
				duration,
				release_date
			}
		});

		return movie;
	}
}