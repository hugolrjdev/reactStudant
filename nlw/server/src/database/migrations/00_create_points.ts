/* eslint-disable no-unused-vars */

export async function up (knex: any, promise: Promise<any>) {
    return knex.schema.createTable('points', (table: any) => {
      // some code
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longetude').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
  };

export async function  down (knex: any, promise: Promise<any>) {
    return knex.schema.dropTable('point');
  };

  //solução da web que na minha opnião abandonou o typescript 
