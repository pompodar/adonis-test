const Category = use('App/Models/Category');

class CategoryController {
  async index({ view }) {
    const categories = await Category.all();
    return view.render('categories.index', { categories: categories.toJSON() });
  }

  async show({ params, view }) {
    const category = await Category.find(params.id);
    const posts = await category.posts().where('published', true).fetch();
    return view.render('categories.show', { category, posts: posts.toJSON() });
  }
}

module.exports = CategoryController;
