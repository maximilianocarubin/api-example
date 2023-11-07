import app from '../app';
import { VercelRequest, VercelResponse } from '@vercel/node';

module.exports = (req: VercelRequest, res: VercelResponse) => {
  app(req, res);
};
