import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('menu_usual')
export class Cat {
	@PrimaryGeneratedColumn()
	menu_id: number;
	
	@Column()
	menu_text: string;
	
	@Column()
	menu_icon: string;
	
	@Column()
	menu_href: string;
}