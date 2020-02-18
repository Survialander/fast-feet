import jwt from 'jsonwebtoken';
import tokenConfig from '../../config/tokenConfigs';
import { promisify }  from 'util';

export default async (req, res, next) => {  
  const { authorization } = req.headers;
  
  if(!authorization) {
    return res.status(403).json({
      message: 'Not authorized.'
    })
  }
  
  const [, token] = authorization.split(' ');
  
  try {
    const decoded = await promisify(jwt.verify)(token, tokenConfig.key);
    req.userId = decoded.id

    return next();
  } catch(err) {
    return res.status(403).json({ message: 'Invalid token.', error: err })
  }
}
