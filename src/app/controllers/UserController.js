import User from '../models/User';
import bcrypt from 'bcrypt';

class UserController {
  async index(req, res) {
    await res.send('usuarios')
  }

  async store(req, res) {

  }

  async update(req, res) {

  }

  async delete(req, res) {

  }
}

export default new UserController();