import React, { ReactElement } from "react";
import styled from "styled-components";
import { mediaQueries } from "../../utils";
import { IconMinus, IconPlus } from "../helpers";
interface Props {
  count: number;
  addToCart: () => void;
  removeFromCart: () => void;
  buttonLarge?: boolean;
}
// export function ButtonCounterLarge({
//   count,
//   addToCart,
//   removeFromCart,
// }: Props){

// }
export default function ButtonCounter({
  count,
  addToCart,
  removeFromCart,
  buttonLarge,
}: Props): ReactElement {
  return (
    <SButtonCounter buttonLarge={!!buttonLarge}>
      <SIconWrapper onClick={() => removeFromCart()}>
        <IconMinus />
      </SIconWrapper>
      <SProductCount buttonLarge={!!buttonLarge}>{count}</SProductCount>
      <SIconWrapper onClick={() => addToCart()}>
        <IconPlus />
      </SIconWrapper>
    </SButtonCounter>
  );
}

const SButtonCounter = styled.div<{ buttonLarge: boolean }>`
  border: 1px solid ${({ theme }) => theme.colors.accent};
  width: ${({ buttonLarge }) => (buttonLarge ? "100%" : "97.5px")};
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  padding: 0;
  justify-content: center;
  align-items: center;
  border-radius: ${({ buttonLarge }) => (buttonLarge ? "0.625rem" : ".25rem")};
`;
const SProductCount = styled.p<{ buttonLarge: boolean }>`
  padding: ${({ buttonLarge }) => (buttonLarge ? "1rem 0 " : "0.4rem 0")};
  background-color: #146eb41a;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.accent};
  height: 100%;
  flex: 1;
  font-size: ${({ theme }) => theme.fontSize.sm};
  ${({ theme }) =>
    mediaQueries("sm")(`
    font-size: ${theme.fontSize.base};
  `)}
`;
const SIconWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  padding: 0.5rem 0;
  flex: 1;
  cursor: pointer;
  /* transition: all 0.3s;
  &:hover {
    background-color: rgba(20, 110, 180, 0.1);
  } */
`;
