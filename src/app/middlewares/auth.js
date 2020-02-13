import jwt from 'jsonwebtoken';
import tokenConfig from '../../config/tokenConfigs';

export default (req, res, next) => {  
  const { authorization } = req.headers;
  
  if(!authorization) {
    return res.status(403).json({
      message: 'not authorized.'
    })
  }
  
  const [, token] = authorization.split(' ');

  try {
    const decoded = jwt.verify(token, tokenConfig.key)
    
    req.userId = decoded.id

    return next();
  } catch(err) {
    return res.status(403).json({ message: 'Invalid token.', error: err })
  }

  next();
}
