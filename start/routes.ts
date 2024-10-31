/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const PostController = () => import('#controllers/posts_controller')
const AuthController = () => import('#controllers/auth_controller')

router.get('/register', async ({ view }) => {
  return view.render('auth/register')
})
router.post('/register', [AuthController, 'register'])

router.get('/login', async ({ view }) => {
  return view.render('auth/login')
})

router.post('/login', [AuthController, 'login'])

router.post('/logout', [AuthController, 'logout']).middleware('auth')

// Post routes
router.get('/', [PostController, 'index'])
router.get('/posts', [PostController, 'index'])
router.get('/posts/create', [PostController, 'create'])
router.post('/posts', [PostController, 'store'])
//router.get('/posts/:id', 'PostController.show')

// Category routes
// router.get('/categories', 'CategoryController.index')
// router.get('/categories/:id', 'CategoryController.show')

