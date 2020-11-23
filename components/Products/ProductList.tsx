import Link from "next/link";
import React, { ReactElement } from "react";
import styled from "styled-components";
import { useApp } from "../../context/AppContext";
import {
  SIconBadge,
  SProductBody,
  SProductGrid,
  SProductGridItem,
  SProductImage,
  SProductPrice,
} from "../../styles/StyledElements";
import { IProduct } from "../../types";
import { getPercentageDecreased } from "../../utils";
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
        const percentage = getPercentageDecreased(
          product.original_cost,
          product.base_cost,
        );

        const handleAddToCart = () => () => {
          addToCart(product);
        };
        return (
          <SProductGridItem key={product.id}>
            <Link
              key={product.id}
              passHref
              href={`/details/${category_id}/${product.id}`}
            >
              <SProductLink>
                <SProductImage
                  src={product.image}
                  alt={product.name}
                  srcSet={product.image}
                />
                {/* <SProductBadge>{percentage}% Off</SProductBadge> */}
              </SProductLink>
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
                <SPriceContainer>
                  <div>₹{product.base_cost}</div>
                  <div id="base-cost">₹{product.original_cost}</div>
                </SPriceContainer>
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
const SProductLink = styled.a`
  position: relative;
`;
const SPriceContainer = styled.div`
  display: flex;
  align-items: center;
  & div:nth-of-type(1) {
    font-weight: 500;
    padding-right: ${({ theme }) => theme.spacing["1"]};
  }
  & div:nth-of-type(2) {
    text-decoration: line-through;
    color: gray;
    font-size: ${({ theme }) => theme.fontSize["sm"]};
  }
`;
const SProductBadge = styled.div`
  position: absolute;
  font-weight: bold;
  top: 0;
  right: -266px;
  margin-right: 6px;
  margin-top: 6px;
  white-space: nowrap;
  text-transform: uppercase;
  vertical-align: baseline;
  padding-top: 3px;
  font-size: 12px;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
  background-color: #ee741f;
  display: inline-block;
  width: 68px;
  height: 22px;
  border-radius: 4px;
`;
