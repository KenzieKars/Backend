import { MigrationInterface, QueryRunner } from "typeorm";

export class createAnuncio1681241216367 implements MigrationInterface {
    name = 'createAnuncio1681241216367'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "anuncio" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "marca" character varying NOT NULL, "modelo" character varying NOT NULL, "ano" character varying NOT NULL, "combustivel" character varying NOT NULL DEFAULT 'GASOLINA', "cor" character varying NOT NULL, "quilometragem" numeric(12,3) NOT NULL, "preco" numeric(12,2) NOT NULL, "descricao" character varying NOT NULL, "imagens" text array NOT NULL, "ativo" boolean NOT NULL DEFAULT true, "criadoEm" TIMESTAMP NOT NULL DEFAULT now(), "atualizadoEm" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_5541bfac946f277f59379e45014" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "anuncio"`);
    }

}
