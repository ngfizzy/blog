import { Entity, Column, PrimaryGeneratedColumn, IsEmail  } from 'typeorm';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  @IsEmail()
  name: string
}
