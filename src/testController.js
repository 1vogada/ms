import { getData } from './sbadptr.js';
export async function getTestData(req, res, next) {
  try {
    res.json(await getData());
  } catch (error) {
    next(err);
  }
}