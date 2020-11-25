import React, { ReactElement } from "react";
import styled from "styled-components";
import { SSectionHeading } from "..";
import { OuterContainer } from "../../components/helpers";
import Menu from "../../components/Menu";
import { useApp } from "../../context/AppContext";
import { mediaQueries } from "../../utils";

interface Props {}

export default function Orders({}: Props): ReactElement {
  const { orders } = useApp();
  if (!orders.length) {
    return (
      <OuterContainer>
        <SOrderHeader>
          <SSectionHeading>My Orders</SSectionHeading>
          <SSectionHeading>No Orders Placed</SSectionHeading>
        </SOrderHeader>
      </OuterContainer>
    );
  }
  return (
    <OuterContainer>
      <SOrderHeader>
        <SSectionHeading>My Orders</SSectionHeading>
      </SOrderHeader>
      <SOrderContainer>
        {orders.map((order) => (
          <SOrderWrapper>
            <SImageContainer>
              <SOrderImage src={order.image} srcSet={order.image} />
            </SImageContainer>
            <SOrderContent>
              <h2>{order.name.toLowerCase()}</h2>
              <small>
                {order.count}
                {order.count > 1 ? " items" : " item"}
              </small>
              <SOrderPriceContainer>
                <div>
                  <p id="order-count">{order.count}</p>x
                  <p id="order-cost">₹{order.base_cost}</p>
                </div>
                <p>₹{order.base_cost * order.count}</p>
              </SOrderPriceContainer>
            </SOrderContent>
          </SOrderWrapper>
        ))}
      </SOrderContainer>
      <Menu />
    </OuterContainer>
  );
}
const SOrderImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;
const SOrderContainer = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  ${({ theme }) =>
    mediaQueries("md")(`
      font-size: ${theme.fontSize["sm"]};
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    `)}
`;
const SOrderHeader = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
`;
const SOrderWrapper = styled.div`
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 1rem;
  ${({ theme }) =>
    mediaQueries("md")(`
  grid-template-columns: 120px 1fr;
  gap: 1.5rem;
      font-size: ${theme.fontSize["sm"]};
    `)}
  & div {
    width: 100%;
  }
`;
const SImageContainer = styled.div`
  width: 100%;
`;
const SOrderContent = styled.div`
  & h2 {
    font-weight: 500;
    text-transform: capitalize;
    font-size: ${({ theme }) => theme.fontSize["sm"]};
    ${({ theme }) =>
      mediaQueries("md")(`
    margin-top: 1rem;
      font-size: ${theme.fontSize["base"]};
    `)}
  }
  & small {
    color: gray;
    display: inline-block;
    text-transform: uppercase;
    font-weight: 500;
    margin: ${({ theme }) => `${theme.spacing["3"]} 0`};
    font-size: ${({ theme }) => theme.fontSize["xs"]};
    ${({ theme }) =>
      mediaQueries("md")(`
      font-size: ${theme.fontSize["base"]};
    `)}
  }
`;
const SOrderPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  & div {
    display: flex;
    align-items: center;
  }
  & #order-count {
    padding: ${({ theme }) => `${theme.spacing["1"]} ${theme.spacing["3"]}`};
    max-width: 24px;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    font-weight: 500;
    align-items: center;
    max-height: 24px;
    margin-right: ${({ theme }) => theme.spacing["2"]};
    border: 1px solid ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
    background-color: rgba(20, 110, 180, 0.2);
  }
  & p {
    font-size: ${({ theme }) => theme.fontSize["xs"]};
    ${({ theme }) =>
      mediaQueries("md")(`
    font-size: ${theme.fontSize["base"]};
      font-size: ${theme.fontSize["sm"]};
    `)}
  }
  & #order-cost {
    margin-left: ${({ theme }) => theme.spacing["2"]};
  }
`;
