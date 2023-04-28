import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1682692226716 implements MigrationInterface {
    name = 'Migration1682692226716'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "endereço" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cep" character varying NOT NULL, "estado" character varying NOT NULL, "cidade" character varying NOT NULL, "rua" character varying NOT NULL, "numero" integer NOT NULL, "complemento" character varying NOT NULL, CONSTRAINT "PK_b0d2e836eace4c1a7668643530b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying(127) NOT NULL, "nome" character varying(150) NOT NULL, "telefone" character varying(14) NOT NULL, "bio" character varying NOT NULL, "imagem" character varying(100) NOT NULL, "criadoEm" TIMESTAMP NOT NULL DEFAULT now(), "atualizadoEm" TIMESTAMP NOT NULL DEFAULT now(), "cpf" character varying(11) NOT NULL, "aniversario" character varying NOT NULL, "vendedor" boolean NOT NULL DEFAULT false, "senha" character varying(120) NOT NULL, "resetandoSenha" character varying, "resetandoSenhaExpirada" TIMESTAMP, "addressId" uuid, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "REL_bafb08f60d7857f4670c172a6e" UNIQUE ("addressId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "anuncio" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "marca" character varying NOT NULL, "modelo" character varying NOT NULL, "ano" character varying NOT NULL, "combustivel" character varying NOT NULL DEFAULT 'GASOLINA', "cor" character varying NOT NULL, "quilometragem" numeric(12,3) NOT NULL, "preco" numeric(12,2) NOT NULL, "descricao" character varying NOT NULL, "imagens" text array NOT NULL, "ativo" boolean NOT NULL DEFAULT true, "criadoEm" TIMESTAMP NOT NULL DEFAULT now(), "atualizadoEm" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_5541bfac946f277f59379e45014" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea" FOREIGN KEY ("addressId") REFERENCES "endereço"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "anuncio" ADD CONSTRAINT "FK_3040fdd14e3e8da0ae20b8ab013" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "anuncio" DROP CONSTRAINT "FK_3040fdd14e3e8da0ae20b8ab013"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea"`);
        await queryRunner.query(`DROP TABLE "anuncio"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "endereço"`);
    }

}
