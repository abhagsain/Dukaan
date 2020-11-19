import type { NextApiRequest, NextApiResponse } from "next";
import data from "./data.json";
export default (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.json(data);
};
