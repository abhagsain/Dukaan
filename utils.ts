import data from "./pages/api/data.json";
export function getData() {
  const { top_categories, top_products } = data;
  return { top_categories, top_products };
}
export function getCategory(category_id: string) {
  const foundCategory = data.all_products.find(
    (product) => product.category_id === Number(category_id),
  );
  if (!foundCategory) {
    return undefined;
  }
  return foundCategory;
}
