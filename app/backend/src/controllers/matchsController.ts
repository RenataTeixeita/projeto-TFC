import { Request, Response } from 'express';
import matchsServices from '../services/matchsServices';

const findAll = async (_req: Request, res: Response) => {
  const allMatchs = await matchsServices.findAll();
  return res.status(200).json(allMatchs);
};

const saveMatch = async (req: Request, res: Response) => {
  const { body } = req;
  const saved = await matchsServices.saveMatch(body);
  return res.status(201).json(saved);
};

const finished = async (req: Request, res: Response) => {
  const { id } = req.params;
  const response = await matchsServices.finished(Number(id));
  return res.status(200).json(response);
};

export default { findAll, saveMatch, finished };
