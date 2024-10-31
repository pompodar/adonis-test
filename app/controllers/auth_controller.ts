import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from '#models/user'

export default class AuthController {
  public async register({ request, auth, response }: HttpContextContract) {
    const data = request.only(['email', 'password'])
    const user = await User.create(data)

    // Log the user in after registration
    // await auth.login(user)
    return response.redirect('/')
  }

  public async login({ request, auth, response }: HttpContextContract) {
    const { email, password } = request.only(['email', 'password'])

    try {
      await auth.attempt(email, password)
      return response.redirect('/')
    } catch {
      return response.badRequest('Invalid credentials')
    }
  }

  public async logout({ auth, response }: HttpContextContract) {
    await auth.logout()
    return response.redirect('/login')
  }
}
