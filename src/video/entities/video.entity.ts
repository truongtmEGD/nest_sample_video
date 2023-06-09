import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Video {
	@PrimaryGeneratedColumn()
	public id: number;

	@Column()
	public firstName: string;

	@Column()
	public lastName: string;

	@Column({ default: true })
	public isActive: boolean;
}
