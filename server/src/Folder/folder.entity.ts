import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Folder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  author: string;

  @Column()
  name: string;
}
