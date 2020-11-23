import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
import React, { ReactElement } from "react";
import styled from "styled-components";
import ButtonAdd from "../../../components/Button/ButtonAdd";
import ButtonCounter from "../../../components/Button/ButtonCounter";
import {
  IconCart,
  IconCategory,
  LeftArrow,
  OuterContainer,
} from "../../../components/helpers";
import { useApp } from "../../../context/AppContext";
import {
  SBaseCost,
  SButtonAdd,
  SButtonContainer,
  SCheckoutButtonLarge,
  SDetailContainer,
  SDetailHeader,
  SDetailNav,
  SDetailsGrid,
  SDetailsRight,
  SGoBackLink,
  SIconBadge,
  SImage,
  SImageContainer,
  SOriginalCost,
  SPercentageOff,
  SQuantity,
} from "../../../styles/StyledElements";
import { INotFound, IProduct } from "../../../types";
import { getProduct, getTopProductsIds } from "../../../utils";

type ReturnData = IProduct | INotFound;
interface ProductDetailsProps {
  product: ReturnData;
}
const ButtonAddToBag = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.accent};
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem;
  & span {
    margin-right: ${({ theme }) => theme.spacing["2"]};
  }
  justify-content: center;
  align-items: center;
  padding: 0.9rem 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.accent};
  transition: all 0.2s;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize["lg"]};
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    background-color: rgba(20, 110, 180, 0.1);
    svg {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.accent};
  }
`;
function isProduct(arg: any): arg is IProduct {
  return arg && arg.id && typeof arg.id === "number";
}
function isOfType<T>(arg: any, key: any, type: any): arg is T {
  return arg && arg[key] && typeof arg[key] === type;
}
export default function ProductDetails(
  props: ProductDetailsProps,
): ReactElement {
  const { cart, addToCart, removeFromCart } = useApp();
  if (isOfType<INotFound>(props.product, "message", "string")) {
    return <OuterContainer>Not Found</OuterContainer>;
  }
  const product = props.product;
  let percentage = 0;
  try {
    percentage = Math.round(
      ((product.original_cost - product.base_cost) / product.original_cost) *
        100,
    );
  } catch (error) {
    console.log("🚀 ~ file: [productId].tsx ~ line 59 ~ error", error);
  }
  const foundProductInCart = cart.find((prod) => prod.id === product.id);
  return (
    <OuterContainer>
      <SDetailNav>
        <OuterContainer>
          <SDetailHeader>
            <Link href="/" passHref>
              <SGoBackLink>
                <span>
                  <LeftArrow />
                </span>
                <h2>Spices Or Masala</h2>
              </SGoBackLink>
            </Link>
            <SDetailsRight>
              <Link href="/categories" passHref>
                <a>
                  <IconCategory />
                </a>
              </Link>
              <Link href="/cart">
                <a className="cart-icon">
                  <IconCart />
                  <SIconBadge>{cart.length}</SIconBadge>
                </a>
              </Link>
            </SDetailsRight>
          </SDetailHeader>
        </OuterContainer>
      </SDetailNav>
      <SDetailsGrid>
        <SImageContainer>
          <SImage
            src={product.image}
            alt={product.name}
            srcSet={product.image}
          />
        </SImageContainer>
        <SDetailContainer>
          <h2>{product.name}</h2>
          <SQuantity>{product.base_qty}</SQuantity>
          <div id="price-container">
            <SBaseCost>₹{product.base_cost.toFixed(2)}</SBaseCost>
            <SOriginalCost>₹{product.original_cost.toFixed(2)}</SOriginalCost>
            <SPercentageOff>{percentage}% off</SPercentageOff>
          </div>
          <SButtonContainer>
            {/* <ButtonAdd isInCart={false} addToCart={() => addToCart(product)} /> */}
            {!!foundProductInCart ? (
              <ButtonCounter
                buttonLarge
                count={foundProductInCart?.count || 0}
                addToCart={() => addToCart(product)}
                removeFromCart={() => removeFromCart(product)}
              />
            ) : (
              <ButtonAddToBag onClick={() => addToCart(product)}>
                Add To Bag
              </ButtonAddToBag>
            )}
            <SCheckoutButtonLarge>
              {foundProductInCart?.count ? "Go to Bag" : "Buy Now"}
            </SCheckoutButtonLarge>
          </SButtonContainer>
        </SDetailContainer>
      </SDetailsGrid>
    </OuterContainer>
  );
}
export const ButtonWrapper = styled.div`
  grid-column: 1/1;
`;
export const getStaticProps: GetStaticProps<ProductDetailsProps> = async (
  ctx: GetStaticPropsContext,
) => {
  // details/:categoryId/:productId
  console.log("🚀 ~ file: details.tsx ~ line 89 ~ ctx.params", ctx.params);
  const categoryId = ctx.params!.categoryId;
  const productId = ctx.params!.productId;
  if (categoryId && productId) {
    const product = getProduct(+categoryId, +productId);
    return { props: { product } };
  }
  return { props: { product: { message: "Not Found" } } };
};
export const getStaticPaths: GetStaticPaths<{
  categoryId: string;
  productId: string;
}> = async () => {
  // Generating static files for all the top products
  const staticProducts = getTopProductsIds();
  return {
    fallback: true,
    paths: staticProducts,
  };
};
