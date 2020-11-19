import type { NextApiRequest, NextApiResponse } from "next";
import data from "./data.json";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  const { top_categories, top_products } = data;
  res.json({ top_categories, top_products });
};
