import React, { ReactElement } from "react";
import { SProductSection } from "../../styles/StyledElements";
import { ITopProducts } from "../../types";
import ProductList from "./ProductList";
import ProductSectionHeader from "./ProductSectionHeader";

interface ProductsSectionProps extends ITopProducts {}

export default function ProductSection({
  category_id,
  category_name,
  product_count,
  products,
}: ProductsSectionProps): ReactElement {
  return (
    <SProductSection>
      <ProductSectionHeader
        category_id={category_id}
        category_name={category_name}
        product_count={product_count}
      />
      <ProductList products={products} category_id={category_id} />
    </SProductSection>
  );
}
