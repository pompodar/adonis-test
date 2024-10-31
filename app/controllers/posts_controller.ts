import { inject } from '@adonisjs/core'

import Post from '#models/post'

export default class UsersController {
  @inject()
  async index({ view }: { view: any }) {
    const posts = await Post.query()
    return view.render('posts/index', { posts })
  }

  async create({ view }: { view: any }) {
    return view.render('posts/create')
  }

  async store({ request, auth, response }) {
    const post = new Post()
    post.fill({
      title: request.input('title'),
      content: request.input('content'),
      user_id: 1,
      published: request.input('published') || false
    })

    console.log(post) // Check if `title` and other fields are correctly populated

    await post.save()
    return response.redirect('/posts')
  }

  async show({ params, view }) {
    const post = await Post.find(params.id)
    return view.render('posts/show', { post })
  }
}
