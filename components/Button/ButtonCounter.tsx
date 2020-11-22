import React, { ReactElement } from "react";
import styled from "styled-components";
import { IconMinus, IconPlus } from "../helpers";
interface Props {
  count: number;
  addToCart: () => void;
  removeFromCart: () => void;
}

export default function ButtonCounter({
  count,
  addToCart,
  removeFromCart,
}: Props): ReactElement {
  return (
    <SButtonCounter className="button-counter">
      <SIconWrapper onClick={() => removeFromCart()}>
        <IconMinus />
      </SIconWrapper>
      <SProductCount>{count}</SProductCount>
      <SIconWrapper onClick={() => addToCart()}>
        <IconPlus />
      </SIconWrapper>
    </SButtonCounter>
  );
}

const SButtonCounter = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.accent};
  width: 97.5px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  padding: 0;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
`;
const SProductCount = styled.p`
  padding: 0.4rem 0;
  background-color: #146eb41a;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.accent};
  flex: 1;
`;
const SIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
  flex: 1;
  cursor: pointer;
`;
