import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'posts'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
      table.integer('category_id').unsigned().references('id').inTable('categories').onDelete('SET NULL');
      table.string('title').notNullable();
      table.text('content').notNullable();
      table.boolean('published').defaultTo(false);
      table.timestamps(true, true);
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
