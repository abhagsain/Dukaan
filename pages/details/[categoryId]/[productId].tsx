import {
  GetServerSidePropsContext,
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";
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
import { INotFound, IProduct, IProducutWithCategory } from "../../../types";
import {
  getPercentageDecreased,
  getProduct,
  getTopProductsIds,
} from "../../../utils";

type ReturnData = IProducutWithCategory | INotFound;
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
  const product = props.product.product;
  if (!product) {
    console.log(
      "🚀 ~ file: [productId].tsx ~ line 81 ~ product",
      JSON.stringify(props, null, 2),
    );
  }
  let percentage = 0;

  try {
    percentage = getPercentageDecreased(
      product.original_cost,
      product.base_cost,
    );
  } catch (error) {
    console.log(product);
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
                {props.product.category_name ? (
                  <h2>{props.product.category_name}</h2>
                ) : (
                  <h2>Go Back</h2>
                )}
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

export const getServerSideProps = async (
  context: GetServerSidePropsContext<{ categoryId: string; productId: string }>,
) => {
  const categoryId = context.params!.categoryId;
  const productId = context.params!.productId;
  if (categoryId && productId) {
    const product = getProduct(Number(categoryId), Number(productId));
    if (typeof product === "undefined") {
      return { props: { product: { message: "Not Found" } } };
    }
    return { props: { product } };
  }
  return { props: { product: { message: "Not Found" } } };
};
// export const getStaticProps: GetStaticProps<ProductDetailsProps> = async (
//   ctx: GetStaticPropsContext,
// ) => {
//   const categoryId = ctx.params!.categoryId;
//   const productId = ctx.params!.productId;
//   if (categoryId && productId) {
//     const product = getProduct(Number(categoryId), Number(productId));
//     if (typeof product === "undefined") {
//       return { props: { product: { message: "Not Found" } } };
//     }
//     // console.log("\n\n\nline 180 -> chala", categoryId, productId);
//     return { props: { product } };
//   }
//   console.log("\n\n\nline 183 -> chala");
//   return { props: { product: { message: "Not Found" } } };
// };
// export const getStaticPaths: GetStaticPaths<{
//   categoryId: string;
//   productId: string;
// }> = async () => {
//   // Generating static files for all the top products
//   const staticProducts = getTopProductsIds().slice(0, 1);
//   return {
//     fallback: true,
//     paths: staticProducts,
//   };
// };
