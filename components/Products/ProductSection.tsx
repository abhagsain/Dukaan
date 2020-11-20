import Link from "next/link";
import React, { ReactElement } from "react";
import styled from "styled-components";
import { ITopProducts } from "../../types";

interface ProductsSectionProps extends ITopProducts {}

export default function ProductSection({
  category_id,
  category_name,
  product_count,
  products,
}: ProductsSectionProps): ReactElement {
  return (
    <SProductSection>
      <SProductSectionHeader>
        <div>
          <h2>{category_name}</h2>
          <p>{product_count}</p>
        </div>
        <Link href={`/producuts/?cat=${category_id}`}>
          <a>See All</a>
        </Link>
      </SProductSectionHeader>
      <SProductGrid>
        {products.map((product) => (
          <SProductGridItem key={product.id}>
            <Link
              key={product.id}
              href={`/product/details/?id=${product.id}`}
              passHref
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
                href={`/product/details/?id=${product.id}`}
                passHref
              >
                <a href="">
                  <h2>{product.name}</h2>
                </a>
              </Link>
              <small>{product.base_qty}</small>
              <SProductPrice>
                <div>
                  <div>₹{product.base_cost}</div>
                </div>
                <SProductButton type="button">
                  <span>Add </span>
                  <svg
                    className="addPlusIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                  >
                    <g>
                      <path d="M6 0c.385 0 .702.29.745.663L6.75.75v10.5c0 .414-.336.75-.75.75-.385 0-.702-.29-.745-.663l-.005-.087V.75C5.25.336 5.586 0 6 0z"></path>
                      <path d="M11.25 5.25c.414 0 .75.336.75.75 0 .385-.29.702-.663.745l-.087.005H.75C.336 6.75 0 6.414 0 6c0-.385.29-.702.663-.745L.75 5.25h10.5z"></path>
                    </g>
                  </svg>
                </SProductButton>
              </SProductPrice>
            </SProductBody>
          </SProductGridItem>
        ))}
      </SProductGrid>
    </SProductSection>
  );
}

const SProductSection = styled.div`
  padding-top: ${({ theme }) => theme.spacing["6"]};
  &::last-child {
    /* padding-bottom: ${({ theme }) => theme.spacing["32"]}; */
  }
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
  grid-template-columns: repeat(4, 1fr);
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
  /* margin-top: ${({ theme }) => theme.spacing["4"]}; */
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
const SProductButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.accent};
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.25rem;
  & span {
    margin-right: ${({ theme }) => theme.spacing["2"]};
  }
  align-items: center;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.accent};
  transition: all 0.2s;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.accent};
    svg {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
  & svg {
    fill: #146eb4;
  }
`;
