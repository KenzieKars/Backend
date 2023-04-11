import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum EnumCombustivel {
    GASOLINA = "gasolina",
    ETANOL = "etanol"
}

@Entity("anuncio")
class Anuncio {
    @PrimaryGeneratedColumn("uuid")
    id: string
    @Column()
    marca: string
    @Column()
    modelo: string
    @Column()
    ano: string
    @Column({default: "GASOLINA"})
    combustivel: string
    @Column()
    cor: string
    @Column({type: "decimal", precision: 12, scale:3})
    quilometragem: number
    @Column({type: "decimal", precision:12, scale:2})
    preco: number
    @Column()
    descricao: string
    @Column("text", {array: true})
    imagens: string[]
    @Column({default: true})
    ativo: boolean
    @CreateDateColumn()
    criadoEm: Date
    @UpdateDateColumn()
    atualizadoEm: Date
}

export { Anuncio }