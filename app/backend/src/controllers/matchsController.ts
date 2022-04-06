import { Request, Response } from 'express';
import matchsServices from '../services/matchsServices';

const findAll = async (_req: Request, res: Response) => {
  const allMatchs = await matchsServices.findAll();
  return res.status(200).json(allMatchs);
};

export default { findAll };
