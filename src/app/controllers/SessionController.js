import jwt from 'jsonwebtoken';
import User from '../models/User';
import tokenConfig from '../../config/tokenConfigs';

class SessionController {
  async index(req, res) {
    
  }

  async store(req, res) {
    const { email, password } = req.body;

    if(!email) {
      return res.status(400).json({ message: 'Email not given.' });
    } else if (!password) {
      return res.status(400).json({ message: 'Password not given.' });
    }
    
    const user = await User.findOne({ where: { email }});
    
    if(!user) {
      return res.status(400).json({ message: 'Invalid Email.' })
    }

    const check = await user.checkPassword(password);

    if(!check) {
      return res.json({ message: 'Invalid password!' });
    }

    return res.json({
      user: {
        name: user.name,
        email: user.email
      },
      token: jwt.sign({ id: user.id }, tokenConfig.key, {
        expiresIn: tokenConfig.expiration
      })
    })
  } 

  async update(req, res) {

  }

  async delete(req, res) {

  }
}

export default new SessionController();