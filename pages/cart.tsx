import Link from "next/link";
import React, { ReactElement } from "react";
import styled from "styled-components";
import ButtonCounter from "../components/Button/ButtonCounter";
import LinkMain from "../components/Button/LinkMain";
import EmptyBag from "../components/EmptyBag";
import { OuterContainer } from "../components/helpers";
import Menu from "../components/Menu";
import { useApp } from "../context/AppContext";
import { SBadge, SBottomSpacer } from "../styles/StyledElements";

interface Props {}

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
      <SCartGrid>
        <SCartHeader>
          <SCartHeading>Checkout</SCartHeading>
          <SBadge>{cart.length}</SBadge>
        </SCartHeader>
        <SCartRow>
          {cart.map((item) => {
            return (
              <SCartItem key={item.id}>
                <Link href={`/details/`}>
                  <a>
                    <SCartImage src={item.image} srcSet={item.image} />
                  </a>
                </Link>
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
              <LinkMain href="/checkout">Proceed to Checkout</LinkMain>
            </SCheckoutButtonContainer>
          </SCheckoutContainer>
        </SCartCheckout>
      </SCartGrid>
      <SBottomSpacer />
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
