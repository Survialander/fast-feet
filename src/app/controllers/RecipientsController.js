import Recipients from '../models/Recipients';
import * as Yup from 'yup'; 

class RecipientsController {
  async index(req, res) {
    
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      street: Yup.string().required(),
      number: Yup.number().required(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      cep: Yup.number().required(),
      complement: Yup.string()
    }) 

    if(!(await schema.isValid(req.body))) {
      return res.status(400).json({
        message: 'Validation fails.'
      })
    }

    const { street, cep, state, number, city, complement } = await Recipients.create(req.body);
    
    return res.status(200).json({ street, cep, state, number, city, complement });
  }

  async update(req, res) {

  }

  async delete(req, res) {

  }
}

export default new RecipientsController();
