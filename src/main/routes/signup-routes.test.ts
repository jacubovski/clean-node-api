import app from '../config/app'
import * as request from 'supertest'

describe('SignUp Routes', () => {
  test('should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Breno',
        email: 'breno@email.com',
        password: '123456',
        passwordConfirmation: '123456'

      })
      .expect(200)
  })
})
