import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateVideoDto {
	@IsEmail()
	public email: string;

	@IsNotEmpty()
	password: string;
}
