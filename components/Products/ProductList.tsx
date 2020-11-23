import Link from "next/link";
import React, { ReactElement } from "react";
import { useApp } from "../../context/AppContext";
import {
  SProductBody,
  SProductGrid,
  SProductGridItem,
  SProductImage,
  SProductPrice,
} from "../../styles/StyledElements";
import { IProduct } from "../../types";
import ButtonAdd from "../Button/ButtonAdd";
import ButtonCounter from "../Button/ButtonCounter";

interface ProductListProps {
  products: IProduct[];
  category_id: number;
}

export default function ProductList({
  products,
  category_id,
}: ProductListProps) {
  const { addToCart, cart, removeFromCart } = useApp();

  return (
    <SProductGrid>
      {products.map((product) => {
        const onlyAboveProduct = cart.filter(
          (item) => item.id === product.id,
        )[0];
        const isInCart = !!onlyAboveProduct;
        const handleAddToCart = () => () => {
          addToCart(product);
        };
        return (
          <SProductGridItem key={product.id}>
            <Link
              key={product.id}
              href={`/details/${category_id}/${product.id}`}
            >
              <a>
                <SProductImage
                  src={product.image}
                  alt={product.name}
                  srcSet={product.image}
                />
              </a>
            </Link>
            <SProductBody>
              <Link
                key={product.id}
                href={`/details/${category_id}/${product.id}`}
              >
                <a>
                  <h2>{product.name}</h2>
                </a>
              </Link>
              <small>{product.base_qty}</small>
              <SProductPrice>
                <div>
                  <div>₹{product.base_cost}</div>
                </div>
                {isInCart ? (
                  <ButtonCounter
                    count={onlyAboveProduct.count}
                    addToCart={handleAddToCart()}
                    removeFromCart={() => removeFromCart(product)}
                  />
                ) : (
                  <ButtonAdd
                    isInCart={!!onlyAboveProduct}
                    addToCart={handleAddToCart()}
                  />
                )}
              </SProductPrice>
            </SProductBody>
          </SProductGridItem>
        );
      })}
    </SProductGrid>
  );
}
