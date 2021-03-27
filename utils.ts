import data from "./pages/api/data.json";
import {
  IAllProducts,
  ICartProduct,
  ICategory,
  INotFound,
  IProduct,
  IProducutWithCategory,
  ITopCategories,
} from "./types";
export function getData() {
  const { top_categories, top_products } = data;
  return { top_categories, top_products };
}

const notFound = { message: "Not Found" };
export function getProduct(
  categoryId: number,
  productId: number
): IProducutWithCategory | INotFound {
  if (!categoryId && !productId) {
    return notFound;
  }
  const foundCategory = data.all_products.find(
    (prod) => prod.category_id === Number(categoryId)
  );
  if (!foundCategory) {
    return notFound;
  }
  if (Array.isArray(foundCategory.products)) {
    const foundProduct = (foundCategory.products as Array<IProduct>).find(
      (el) => el.id === Number(productId)
    );
    if (!foundProduct) {
      return notFound;
    }
    return {
      category_id: foundCategory.category_id,
      category_name: foundCategory.category_name,
      product: foundProduct,
    };
  }
  return notFound;
}
interface StaticPropsReturn {
  params: {
    categoryId: string;
    productId: string;
  };
}
export function getTopProductsIds(): StaticPropsReturn[] {
  // Get the top products and make static files for them
  const result: StaticPropsReturn[] = [];
  data.top_products.forEach((topProduct) => {
    topProduct.products.forEach((product) => {
      if (product) {
        result.push({
          params: {
            categoryId: topProduct.category_id.toString(),
            productId: product.id.toString(),
          },
        });
      }
      // else {
      //   console.log(
      //     "🚀 ~ file: utils.ts ~ line 54 ~ topProduct.products.forEach ~ product",
      //     product,
      //   );
      // }
    });
  });
  return result;
}

export function getCategory(category_id: string): IAllProducts | undefined {
  const foundCategory = data.top_products.find(
    (product) => product.category_id === Number(category_id)
  );
  if (!foundCategory) {
    return undefined;
  }
  return foundCategory;
}

export function getCategoryList(): ITopCategories[] {
  return data.top_categories;
}
export function getPercentageDecreased(
  originalPrice: number,
  basePrice: number
) {
  return Math.round(((originalPrice - basePrice) / originalPrice) * 100);
}
/**
 * Find the products for a give query
 */
export function findProducts(query: string): IProduct[] {
  if (!query.trim().length) {
    return [];
  }
  // Loop over all the products of all categories and check if
  // their title contains the searched query
  const foundProducts: IProduct[] = [];
  data.all_products.forEach((category) => {
    category.products.forEach((product: IProduct) => {
      if (product.name.toLowerCase().includes(query.toLowerCase())) {

        let productListWithId={...product,category_id:category.category_id}
        foundProducts.push(productListWithId);
      }
    });
  });
  return foundProducts;
}

const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};
export const mediaQueries = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | String) =>
    `@media (min-width: ${breakpoints[key]}) { ${style} }`;
};
export const getTotalItems = (cart: ICartProduct[]) => {
  return cart.reduce((acc, curr) => {
    return acc + curr.count;
  }, 0);
};
