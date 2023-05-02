import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from "typeorm";
  import { Anuncio } from "./advertisement.entity";
  
  import { User } from "./user.entity";
  
  @Entity("comentario")
  export class Comentario {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column()
    comentario: string;
  
    @CreateDateColumn()
    created_at: Date;
  
    @ManyToOne(() => User, { onDelete: "CASCADE" })
    user: User;
  
    @ManyToOne(() => Anuncio, { onDelete: "CASCADE" })
    announcements: Anuncio;
  }