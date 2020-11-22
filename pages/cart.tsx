import Link from "next/link";
import React, { ReactElement } from "react";
import styled from "styled-components";
import ButtonCounter from "../components/Button/ButtonCounter";
import { OuterContainer } from "../components/helpers";
import Menu from "../components/Menu";
import { SBadge } from "../components/Products/ProductSection";
import { useApp } from "../context/AppContext";

const IllustrationBag = () => (
  <SEmtpyBagSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216 126">
    <g fill="none" fillRule="evenodd" transform="translate(0 -1)">
      <path fill="#FFF0E7" d="M79 32h67l-6 9 8 6H77l9-6z" />
      <path
        stroke="#EE741F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M53 111.5h21.454m-34.326 0H47m136.128 0H186m-30 0h22.428"
      />
      <path
        fill="#FFF"
        stroke="#EE741F"
        strokeLinecap="round"
        strokeWidth={2.5}
        d="M76.006 89.215V49c0-1.657 1.36-3 3.037-3h69.48c1.092 0 1.977.895 1.977 2v73c0 2.21-1.77 4-3.955 4H79.961c-2.184 0-3.955-1.79-3.955-4v-19m0-4.103v-4.503m.021 8.162V88.91"
      />
      <path
        stroke="#EE741F"
        strokeWidth={2.5}
        d="M78 46V34c0-1.105.804-2 1.795-2h66.41c.991 0 1.795.895 1.795 2v12"
      />
      <circle
        cx={96.5}
        cy={63.5}
        r={3.5}
        fill="#FFF"
        stroke="#EE741F"
        strokeWidth={2.5}
      />
      <circle
        cx={129.5}
        cy={63.5}
        r={3.5}
        fill="#FFF"
        stroke="#EE741F"
        strokeWidth={2.5}
      />
      <path
        stroke="#EE741F"
        strokeLinecap="round"
        strokeWidth={2.5}
        d="M129 67c0 8.837-7.163 16-16 16s-16-7.163-16-16M79.061 32.997l7.107 7.015a1 1 0 01-.218 1.587L78 46h0M147.109 33.07l-6.802 6.937a1 1 0 00.235 1.578L148.636 46h0"
      />
      <path
        stroke="#EE741F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M139.1 7.303L128 19.756M113 3v16.756M87 7.303l11.1 12.453"
      />
      <path
        fill="#EE741F"
        d="M119 30a7 7 0 010 14h64a7 7 0 010 14h22a7 7 0 010 14h-19a7 7 0 000 14h6a7 7 0 010 14h-52a7.026 7.026 0 01-1.5-.161 7.026 7.026 0 01-1.5.161H46a7 7 0 010-14H7a7 7 0 010-14h40a7 7 0 000-14H22a7 7 0 010-14h40a7 7 0 010-14h57zm90 56a7 7 0 110 14 7 7 0 010-14z"
        opacity={0.1}
      />
    </g>
  </SEmtpyBagSVG>
);
interface Props {}

const ButtonMain = ({
  children,
  href,
}: {
  children: JSX.Element[] | JSX.Element | string;
  href: string;
}) => {
  return (
    <Link href={href}>
      <SButton>{children}</SButton>
    </Link>
  );
};
const EmptyBag = () => {
  return (
    <SEmptyBagBody>
      <SEmptyContent>
        <IllustrationBag />
        <SEmptyBodyHeading>Your bag is empty</SEmptyBodyHeading>
        <SEmptyBodyText>
          You don't have any products in your bag.
        </SEmptyBodyText>
        <ButtonMain href="/">Back to Shopping</ButtonMain>
      </SEmptyContent>
    </SEmptyBagBody>
  );
};
export default function Cart({}: Props): ReactElement {
  const { cart, addToCart, removeFromCart } = useApp();
  const total = cart.reduce((acc, curr) => {
    return acc + curr.base_cost * curr.count;
  }, 0);
  if (!cart.length) {
    return (
      <OuterContainer>
        <SCartGrid>
          <SCartHeader>
            <SCartHeading>Checkout</SCartHeading>
            <SBadge>{cart.length}</SBadge>
          </SCartHeader>
          <EmptyBag />
        </SCartGrid>
        <Menu />
      </OuterContainer>
    );
  }
  return (
    <OuterContainer>
      {/* <pre>{JSON.stringify(cart, null, 4)}</pre> */}
      <SCartGrid>
        <SCartHeader>
          <SCartHeading>Checkout</SCartHeading>
          <SBadge>{cart.length}</SBadge>
        </SCartHeader>
        <SCartRow>
          {cart.map((item) => {
            return (
              <SCartItem key={item.id}>
                <SCartImage src={item.image} srcSet={item.image} />
                <SCartContent>
                  <h2>{item.name.toLowerCase()}</h2>
                  <small>{item.base_qty}</small>
                  <SItemPriceContainer>
                    <span>₹</span>{" "}
                    <SItemPrice>{" " + item.base_cost.toFixed(2)}</SItemPrice>
                  </SItemPriceContainer>
                  <ButtonCounter
                    count={item.count}
                    addToCart={() => addToCart(item)}
                    removeFromCart={() => removeFromCart(item)}
                  />
                </SCartContent>
              </SCartItem>
            );
          })}
        </SCartRow>
        <SCartCheckout>
          <SCheckoutContainer>
            <SCheckoutHeader>
              <STextContainer>
                <SCheckoutText>Item Total </SCheckoutText>
                <SCheckoutText>{total.toFixed(2)} </SCheckoutText>
              </STextContainer>
              <STextContainer>
                <SCheckoutText>Delivey </SCheckoutText>
                <SCheckoutText>30 </SCheckoutText>
              </STextContainer>
              <STextContainer>
                <SCheckoutTotalText>Grand Total </SCheckoutTotalText>
                <SCheckoutTotalText>
                  {(total + 30).toFixed(2)}
                </SCheckoutTotalText>
              </STextContainer>
            </SCheckoutHeader>
            <SCheckoutButtonContainer>
              <ButtonMain href="/checkout">Proceed to Checkout</ButtonMain>
            </SCheckoutButtonContainer>
          </SCheckoutContainer>
        </SCartCheckout>
      </SCartGrid>
      <Menu />
    </OuterContainer>
  );
}
const SCartHeader = styled.div`
  display: flex;
  grid-column: 1/13;
`;
const SCartGrid = styled.div`
  display: grid;
  margin-top: ${({ theme }) => theme.spacing["10"]};
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
`;
const SCartRow = styled.div`
  grid-column: 1/8;
`;
const SCartCheckout = styled.div`
  grid-column: 9/13;
  max-width: 320px;
  width: 320px;
  justify-self: flex-end;
  /* margin-left: auto; */
`;
const SCartHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 600;
`;
const SCartItem = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing["8"]};
  display: flex;
`;
const SCartContent = styled.div`
  margin-left: ${({ theme }) => theme.spacing["6"]};
  & h2 {
    font-weight: 500;
    text-transform: capitalize;
    font-size: ${({ theme }) => theme.fontSize.lg};
    color: ${({ theme }) => theme.colors.primary};
  }
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const SCartImage = styled.img`
  overflow: hidden;
  object-position: center;
  height: 159px;
  width: 159px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  object-fit: contain;
`;
const SItemPriceContainer = styled.div`
  display: flex;
`;
const SItemPrice = styled.p`
  /* font-size: ${({ theme }) => theme.fontSize["base"]}; */
  font-size: 15px;
  font-weight: bold;
`;
const SCheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const SCheckoutHeader = styled.div`
  padding: ${({ theme }) => theme.spacing["5"]};
  background-color: #f2f2f3;
`;
const STextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SCheckoutText = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing["4"]};
`;
const SCheckoutTotalText = styled.p`
  font-size: ${({ theme }) => theme.fontSize["lg"]};
  font-weight: bold;
`;
const SCheckoutButtonContainer = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing["6"]};
`;
const SButton = styled.a`
  padding: 1.2rem 40px;
  cursor: pointer;
  text-align: center;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.accent};
`;
const SEmptyBagBody = styled.div`
  grid-column: 1/13;
  display: flex;
  height: 70vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const SEmptyBodyHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSize["xl"]};
  font-weight: bold;
  margin-top: ${({ theme }) => theme.spacing["6"]};
`;
const SEmptyBodyText = styled.h2`
  margin: ${({ theme }) => `${theme.spacing["2"]} 0 ${theme.spacing["4"]} 0 `};
  padding-bottom: ${({ theme }) => theme.spacing["12"]};
`;
const SEmtpyBagSVG = styled.svg`
  width: 324px;
  height: 188px;
`;
const SEmptyContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
