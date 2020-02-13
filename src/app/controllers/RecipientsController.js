import Recipients from '../models/Recipients';

class RecipientsController {
  async index(req, res) {
    return res.json(req.userId)
  }

  async store(req, res) {

  }

  async update(req, res) {

  }

  async delete(req, res) {

  }
}

export default new RecipientsController();
