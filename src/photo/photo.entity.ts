import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('app_user')
export class Photo {
  @PrimaryGeneratedColumn()
  userId: string;

  @Column()
  phone: string;
}