import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity('hreo')
export class Hero {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'number' })
  power: number;
}