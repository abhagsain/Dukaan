import Link from "next/link";
import React, { Fragment, ReactElement } from "react";
import styled from "styled-components";
import { useApp } from "../../context/AppContext";
import { IProduct, ITopProducts } from "../../types";
import ButtonAdd from "../Button/ButtonAdd";
import ButtonCounter from "../Button/ButtonCounter";
import { IconMinus, IconPlus } from "../helpers";

interface ProductsSectionProps extends ITopProducts {}

export default function ProductSection({
  category_id,
  category_name,
  product_count,
  products,
}: ProductsSectionProps): ReactElement {
  const { addToCart, cart, removeFromCart } = useApp();
  // products.map(el => el.);
  return (
    <SProductSection>
      <SProductSectionHeader>
        <div>
          <h2>{category_name}</h2>
          <SBadge>{product_count}</SBadge>
        </div>
        <Link href={`/details/${category_id}}`}>
          <a>See All</a>
        </Link>
      </SProductSectionHeader>
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
    </SProductSection>
  );
}

const SProductSection = styled.div`
  padding-top: ${({ theme }) => theme.spacing["6"]};
`;
const SProductSectionHeader = styled.div`
  top: 70px;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing["4"]} ${theme.spacing["4"]}`};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  position: sticky;
  background-color: ${({ theme }) => theme.colors.gray1};
  & div {
    display: flex;
  }
  & div h2 {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: bold;
  }
  & div p {
    padding: ${({ theme }) => `${theme.spacing["1"]} ${theme.spacing["2"]}`};
    background-color: ${({ theme }) => theme.colors.accent};
    font-weight: bold;
    margin: ${({ theme }) => `0 ${theme.spacing["2"]}`};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 0.25rem;
    font-weight: 500;
  }
  & a {
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 500;
  }
`;
const SProductGrid = styled.div`
  display: grid;
  margin-top: ${({ theme }) => theme.spacing["4"]};
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing["4"]};
`;
const SProductImage = styled.img`
  width: 100%;
  border-radius: 0.5rem;
  transition: all 0.5s;
  &:hover {
    opacity: 0.75;
  }
`;
const SProductGridItem = styled.div`
  width: 100%;
`;
const SProductBody = styled.div`
  display: flex;
  flex-direction: column;
  & h2 {
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: 500;
    transition: opacity 0.2s;
    padding-top: ${({ theme }) => theme.spacing["4"]};
  }
  & h2:hover {
    opacity: 0.75;
  }
  & small {
    margin-top: ${({ theme }) => theme.spacing["1"]};
  }
  padding-bottom: ${({ theme }) => theme.spacing["4"]};
`;
const SProductPrice = styled.div`
  margin-top: ${({ theme }) => theme.spacing["2"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const SBadge = styled.p`
  padding: 0.25rem 0.5rem;
  background-color: #146eb4;
  font-weight: bold;
  margin: 0 0.5rem;
  color: #fff;
  border-radius: 0.25rem;
  font-weight: 500;
`;
