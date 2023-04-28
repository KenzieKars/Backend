import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("endereço")
export class Endereco {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  cep: string;

  @Column()
  estado: string;

  @Column()
  cidade: string;

  @Column()
  rua: string;

  @Column()
  numero: number;

  @Column()
  complemento: string;
}