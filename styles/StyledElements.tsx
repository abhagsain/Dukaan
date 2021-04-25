import styled, { keyframes, ThemeProps } from "styled-components";
import { ITheme } from "../theme";
import { mediaQueries } from "../utils";
export const SDetailNav = styled.nav`
  padding: 1.5rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10000;
  left: 0;
  /* box-shadow: 0 0.5px 4px 0 #ccc; */
  background-color: ${({ theme }) => theme.colors.white};
`;
export const SDetailHeader = styled.div`
  /* margin-top: ${({ theme }) => theme.spacing["6"]}; */
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  & .details-icon {
    fill: #000;
    stroke: #000;
    transition: all 0.2s;
    cursor: pointer;
  }
  & .details-icon:hover {
    fill: ${({ theme }) => theme.colors.accent};
    stroke: ${({ theme }) => theme.colors.accent};
  }
`;
export const SGoBackLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  & h2 {
    margin-left: 8px;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize["lg"]};
  }
  & svg {
    margin-right: ${({ theme }) => theme.spacing["1"]};
  }
  & .cart-icon {
    transition: all 0.2s;
    cursor: pointer;
  }
  & .cart-icon:hover {
    fill: ${({ theme }) => theme.colors.accent};
    stroke: ${({ theme }) => theme.colors.accent};
  }
`;
export const SDetailsRight = styled.div`
  display: flex;
  align-items: center;
  & .cart-icon {
    position: relative;
    margin-left: ${({ theme }) => theme.spacing["4"]};
  }
`;
export const SIconBadge = styled.span`
  width: 1.3rem;
  /* margin-left: -8px; */
  height: 1.3rem;
  border-radius: 50%;
  background-color: #e50b20;
  position: absolute;
  text-align: center;
  display: flex;
  align-items: center;
  color: white;
  justify-content: center;
  font-weight: bold;
  right: -10px;
  top: -7px;
`;
export const SDetailsGrid = styled.div`
  display: block;
  ${({ theme }) =>
    mediaQueries("sm")(`
  font-size: ${theme.fontSize["sm"]};
  display: grid;
  `)}
  gap: ${({ theme }) => theme.spacing["5"]};
  grid-template-columns: repeat(12, 1fr);
  margin-top: ${({ theme }) => theme.spacing["24"]};
`;
export const SImageContainer = styled.div`
  grid-column: 1/6;
`;
export const SDetailContainer = styled.div`
  grid-column: 6/13;
  margin-top: ${({ theme }) => theme.spacing["4"]};
  display: flex;
  flex-direction: column;
  & h2 {
    font-size: ${({ theme }) => theme.fontSize["base"]};
    ${({ theme }) =>
      mediaQueries("sm")(`
    font-size: ${theme.fontSize["lg"]};
  `)}
    margin-bottom: ${({ theme }) => theme.spacing["2"]};
  }
  & #price-container {
    display: flex;
    align-items: center;
  }
  ${({ theme }) =>
    mediaQueries("sm")(`
  margin-left: ${theme.spacing["10"]};

  `)}
`;
export const SBaseCost = styled.p`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize["xl"]};
`;
export const SQuantity = styled.small`
  margin-bottom: ${({ theme }) => theme.spacing["3"]};
`;
export const SOriginalCost = styled.p`
  /* font-weight: bold; */
  margin-left: ${({ theme }) => theme.spacing["2"]};
  text-decoration: line-through;
  color: grey;
  font-size: ${({ theme }) => theme.fontSize["sm"]};
`;
export const SPercentageOff = styled.small`
  letter-spacing: normal;
  text-align: center;
  color: #fff;
  background-color: #ee741f;
  font-weight: bold;
  display: inline-block;
  height: 22px;
  border-radius: 4px;
  padding-top: 1.5px;
  padding-left: ${({ theme }) => theme.spacing["2"]};
  padding-right: ${({ theme }) => theme.spacing["2"]};
  margin-left: ${({ theme }) => theme.spacing["2"]};
  text-transform: uppercase;
`;
export const SImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;
export const SButtonContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  margin-top: ${({ theme }) => theme.spacing["10"]};
`;
export const SButton = styled.a`
  padding: 1.2rem 40px;
  cursor: pointer;
  text-align: center;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.accent};
`;
export const SCheckoutButtonLarge = styled(SButton)`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  &:hover {
    background-color: #115f9c;
  }
`;
export const SButtonAdd = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.accent};
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.25rem;
  & span {
    margin-right: ${({ theme }) => theme.spacing["2"]};
  }
  justify-content: center;
  align-items: center;
  font-weight: 500;
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
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.accent};
  }
  & svg {
    fill: #146eb4;
  }
`;

export const SProductSection = styled.div`
  padding-top: ${({ theme }) => theme.spacing["6"]};
`;
export const SProductSectionHeader = styled.div<{ hasBackground?: boolean }>`
  top: 70px;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing["4"]}`};
  border: 1px solid
    ${({ theme, hasBackground }) =>
      !hasBackground ? theme.colors.white : theme.colors.gray};
  position: sticky;
  background-color: ${({ theme, hasBackground }) =>
    !hasBackground ? theme.colors.white : theme.colors.gray1};
  & div {
    display: flex;
  }
  & div h2 {
    text-transform: capitalize;
    font-size: ${({ theme }) => theme.fontSize.base};
    ${({ theme }) =>
      mediaQueries("sm")(`
    font-size: ${theme.fontSize.lg};
  `)}
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
    font-size: ${({ theme }) => theme.fontSize.sm};
    ${({ theme }) =>
      mediaQueries("sm")(`
      ${theme.fontSize.base}
  `)}
  }
  & a {
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 500;
    font-size: 15px;
    ${({ theme }) =>
      mediaQueries("sm")(`
      ${theme.fontSize.base}
  `)}
  }
`;
export const SProductGrid = styled.div`
  display: grid;
  margin-top: ${({ theme }) => theme.spacing["4"]};
  gap: ${({ theme }) => theme.spacing["4"]};
  grid-template-columns: repeat(1fr);
  ${({ theme }) =>
    mediaQueries("md")(`
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  `)}
  ${({ theme }) =>
    mediaQueries("md")(`
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  `)}
  ${({ theme }) =>
    mediaQueries("lg")(`
    gap: ${theme.spacing["6"]};
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  `)}
`;

export const SProductLink = styled.a`
  position: relative;
  /* height: 260px; */
  display: flex;
  /* border: 2px solid red; */
  /* height: 90px; */
  & .product-image {
    /* height: 90px; */
    background-color: #e5e7eb;
    min-width: 90px;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    min-height: 100%;
    ${() =>
      mediaQueries("md")(`
    max-width: 100%;
  `)};
    ${() =>
      mediaQueries("lg")(`
    min-height: 260px;
  `)};
  }
`;
export const SProductImage = styled.img`
  width: 100%;
  border-radius: 0.5rem;
  transition: all 0.5s;
  border-radius: 8px;
  &:hover {
    opacity: 0.75;
  }
`;
const pulse = keyframes`
   0%, 100% {
    opacity: 1;
    background-color: #E5E7EB;
  }
  50% {
    opacity: .3;
    background-color: #F3F4F6;
  }
`;
export const SProductImagePlaceholder = styled.div`
  width: 100%;
  max-width: 90px;
  height: 90px;
  border-radius: 8px;
  /* background-color: #f9fafb; */
  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  ${() =>
    mediaQueries("sm")(`
  `)};
`;
export const SProductGridItem = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 1rem;
  align-items: center;
  ${({ theme }) =>
    mediaQueries("md")(`
    display: block;
  `)}
`;
export const SProductBody = styled.div`
  display: flex;
  flex-direction: column;

  & h2 {
    font-weight: 500;
    transition: opacity 0.2s;
    padding-top: ${({ theme }) => theme.spacing["4"]};
    font-size: 15px;
    text-transform: capitalize;
    ${({ theme }) =>
      mediaQueries("sm")(`
    font-size: ${theme.fontSize.base};
    `)}
  }
  & h2:hover {
    opacity: 0.75;
  }
  & small {
    margin-top: ${({ theme }) => theme.spacing["1"]};
  }
  padding-bottom: ${({ theme }) => theme.spacing["4"]};
`;
export const SProductPrice = styled.div`
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
export const SBottomSpacer = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing["24"]};
`;
export const SContainer = styled.div`
  max-width: 20rem;
  margin-top: 3rem;
`;
export const SSearchBarContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10000;
  left: 0;
  background-color: ${({ theme }) => theme.colors.white};
  /* max-width: ${({ theme }) => theme.maxWidth}; */
  margin: 0 auto;
  & #search-container {
    display: flex;
    align-items: center;
    & #left-arrow {
      width: 30px;
      margin-right: 10px;
    }
  }
`;
export const SCategoryOverlay = styled.div`
  /* background: rgba(0, 0, 0, 0.5); */
  background: linear-gradient(
    to bottom,
    rgba(2, 0, 36, 0) 0%,
    rgba(0, 0, 0, 0.4) 80%
  ) !important;
  transition: all 0.5s;
  position: absolute;
  display: flex;
  align-items: flex-end;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  border-radius: 6px;
  &:hover {
    opacity: 0.8;
  }
`;
export const SCategoryLabel = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.sm};
  padding-bottom: ${({ theme }) => theme.spacing["4"]};
  padding-left: ${({ theme }) => theme.spacing["2"]};
  padding-right: ${({ theme }) => theme.spacing["2"]};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  text-transform: capitalize;
  white-space: pre-wrap;
`;
export const SMenuIconBadge = styled.span`
  position: absolute;
  top: 7px;
  border-radius: 50%;
  margin-left: 26px;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
  background-color: #e50b20;
  -moz-border-radius: 0.5rem;
  -webkit-border-radius: 0.5rem;
  display: inline-block;
  width: 1.1rem;
  height: 1.1rem;
  padding-top: 0.15rem;
`;
