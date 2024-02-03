import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../../dtos/createUserDTO";

export class CreateUserUseCase{
	async execute({name, email}: CreateUserDTO): Promise<User>{
		// Verifica se o email já está cadastrado

		const userAlreadyExists = await prisma.user.findUnique({
			where: {
				email
			}
		});

		if(userAlreadyExists){
			// erro
		}

		// Cria o usuário
		const user = await prisma.user.create({
			data: {
				name,
				email
			}
		});

		return user;
	}
}