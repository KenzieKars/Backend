import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate
} from "typeorm";
import { Anuncio } from "./advertisement.entity";
import { hashSync, getRounds } from "bcryptjs";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 127, unique: true })
  email: string;

  @Column({ length: 150 })
  nome: string;

  @Column({ length: 14 })
  telefone: string;

  @Column()
  bio: string;

  @Column({ length: 100 })
  imagem: string;

  @CreateDateColumn()
  criadoEm: Date;

  @UpdateDateColumn()
  atualizadoEm: Date;

  @Column({ length: 11 })
  cpf: string;

  @Column()
  aniversario: string;

  @Column({ default: false })
  vendedor: boolean;

  @Column({ length: 120 })
  senha: string;

  @Column({ default: true })
  isActive: boolean;

  @BeforeUpdate()
  @BeforeInsert()
  hashPassword() {
    const isEncrypted = getRounds(this.senha);
    if (!isEncrypted) {
      this.senha = hashSync(this.senha, 10);
    }
  }

  @OneToMany(() => Anuncio, (announcement) => announcement.user, {
    cascade: true,
  })
  announcements: Anuncio[];
}
