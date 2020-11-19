import type { NextApiRequest, NextApiResponse } from "next";
import data from "../data.json";
import { ICategory, INotFound } from "../../../types";

export default (
  req: NextApiRequest,
  res: NextApiResponse<ICategory | INotFound>,
) => {
  const { categoryId } = req.query;
  const foundCategory = data.all_products.find(
    (product) => product.category_id === Number(categoryId),
  );

  if (!foundCategory) {
    res.statusCode = 404;
    return res.json({ message: "No Products Found" });
  }
  // res.statusCode = 200;
  // res.json(foundCategory);
};
