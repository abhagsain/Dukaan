import type { NextApiRequest, NextApiResponse } from "next";
import data from "../data.json";
import { INotFound, ProductResponse, IProduct } from "../../../types";

export default (
  req: NextApiRequest,
  res: NextApiResponse<INotFound | ProductResponse>,
) => {
  if ("params" in req.query && Array.isArray(req.query.params)) {
    const [categoryId, productId] = req.query.params;

    const foundCategory = data.all_products.find(
      (prod) => prod.category_id === Number(categoryId),
    );
    if (!foundCategory) {
      res.statusCode = 404;
      return res.send({ message: "Product not found" });
    }
    // const products =
    if (Array.isArray(foundCategory.products)) {
      const foundProduct = (foundCategory.products as Array<IProduct>).find(
        (el) => el.id === Number(productId),
      );
      if (!foundProduct) {
        res.statusCode = 404;
        return res.send({ message: "Product not found" });
      }
      res.statusCode = 404;
      return res.send({ product: foundProduct });
    }
  }
  res.statusCode = 404;
  return res.send({ message: "Not found" });
};
