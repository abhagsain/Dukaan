import React, { ReactElement } from "react";
import styled from "styled-components";
import { mediaQueries } from "../utils";
import LinkMain from "./Button/LinkMain";
import { IllustrationBag } from "./helpers";

interface Props {}

export default function EmptyBag({}: Props): ReactElement {
  return (
    <SEmptyBagBody>
      <SEmptyContent>
        <IllustrationBag />
        <SEmptyBodyHeading>Your bag is empty</SEmptyBodyHeading>
        <SEmptyBodyText>
          You don't have any products in your bag.
        </SEmptyBodyText>
        <LinkMain href="/">Back to Shopping</LinkMain>
      </SEmptyContent>
    </SEmptyBagBody>
  );
}

const SEmptyBagBody = styled.section`
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

const SEmptyContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  & svg {
    width: 216px;
    margin: 0 auto;
    ${({ theme }) =>
      mediaQueries("md")(`
      width: 324px;
  `)}
  }
`;
