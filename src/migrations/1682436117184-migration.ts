import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1682436117184 implements MigrationInterface {
    name = 'Migration1682436117184'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying(127) NOT NULL, "nome" character varying(150) NOT NULL, "telefone" character varying(14) NOT NULL, "bio" character varying NOT NULL, "imagem" character varying(100) NOT NULL, "criadoEm" TIMESTAMP NOT NULL DEFAULT now(), "atualizadoEm" TIMESTAMP NOT NULL DEFAULT now(), "cpf" character varying(11) NOT NULL, "aniversario" character varying NOT NULL, "vendedor" boolean NOT NULL DEFAULT false, "senha" character varying(120) NOT NULL, "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "anuncio" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "marca" character varying NOT NULL, "modelo" character varying NOT NULL, "ano" character varying NOT NULL, "combustivel" character varying NOT NULL DEFAULT 'FlEX', "cor" character varying NOT NULL, "quilometragem" numeric(12,3) NOT NULL, "preco" numeric(12,2) NOT NULL, "descricao" character varying NOT NULL, "imagens" text array NOT NULL, "ativo" boolean NOT NULL DEFAULT true, "criadoEm" TIMESTAMP NOT NULL DEFAULT now(), "atualizadoEm" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_5541bfac946f277f59379e45014" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "anuncio" ADD CONSTRAINT "FK_3040fdd14e3e8da0ae20b8ab013" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "anuncio" DROP CONSTRAINT "FK_3040fdd14e3e8da0ae20b8ab013"`);
        await queryRunner.query(`DROP TABLE "anuncio"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
