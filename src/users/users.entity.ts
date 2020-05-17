import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class Users {
	@PrimaryGeneratedColumn()
	userId: number;
	
	@Column()
	username: string;
	
	@Column()
	password: string;
	
	@Column()
	school: string;
	
	@Column()
	phone: string;
	
	@Column()
	name: string;
}