import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "maths" })
export class Math {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  Bilangan: string;

  @Column()
  AVG: number;
}
