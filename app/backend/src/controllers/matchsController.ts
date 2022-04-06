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

// const findInProgress = async (req: Request, res: Response) => {
//   const { inProgress } = req.query;
//   const fineshed = await matchsServices.findInProgress(inProgress);
//   if (typeof (fineshed) === null) {
//     console.log('Nenhuma partida finalizada');
//   }
//   return res.status(200).json(fineshed);
// };

export default { findAll, saveMatch };
