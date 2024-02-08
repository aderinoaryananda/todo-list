import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "todolist" })
export class TodoList {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  list: string;
}
