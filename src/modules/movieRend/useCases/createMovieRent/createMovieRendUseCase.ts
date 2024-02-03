import { AppError } from "../../../../errors/apperror";
import { prisma } from "../../../../prisma/client";
import { CreateMovieRendDTO } from "../../dtos/createMovieRendDTOS";

export class CreateMovieRendUseCase{
	async execute({movieId, userId}: CreateMovieRendDTO){
		// Verifica se o Filme existe
		const movieExists = await prisma.movie.findUnique({
			where: {
				id: movieId
			}
		});

		if(!movieExists){
			throw new AppError("Movie does not exists");
		}

		// Verificar se o filme já está alugado

		const movieAlreadyRended = await prisma.movieRend.findFirst({
			where: {
				movieId
			}
		});

		if(movieAlreadyRended){
			throw new AppError("Movie already rended");
		}

		// Verificar se o usuário existe

		const userExists = await prisma.user.findUnique({
			where: {
				id: userId
			}
		});

		if(!userExists){
			throw new AppError("User does not exists");
		}

		// Cria a locação

		const movieRend = await prisma.movieRend.create({
			data: {
				userId,
				movieId
			}
		});

		return movieRend;
	}
}