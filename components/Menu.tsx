import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { ReactElement, useEffect, useState } from "react";
import styled, { ThemedStyledFunction } from "styled-components";
import { useApp } from "../context/AppContext";
import { SMenuIconBadge } from "../styles/StyledElements";
import { ICartProduct } from "../types";
import { mediaQueries } from "../utils";
import {
  IconBagActive,
  IconBagInactive,
  IconCategoryActive,
  IconCategoryInactive,
  IconHomeActive,
  IconHomeInactive,
  IconOrdersActive,
  IconOrdersInactive,
} from "./helpers";

interface Props {}
interface CustomLinkProps {
  href: string;
  children?: React.ReactNode[];
}
const getTotalItems = (cart: ICartProduct[]) => {
  return cart.reduce((acc, curr) => {
    return acc + curr.count;
  }, 0);
};

export default function Menu({}: Props): ReactElement {
  const { cart } = useApp();
  const router = useRouter();
  const isLinkActive = (pathname: string) => router.pathname === pathname;
  const totalItems = getTotalItems(cart);
  return (
    <SFooter>
      <SFooterWrapper>
        <Link href="/" passHref>
          <SMenuContainer>
            {isLinkActive("/") ? <IconHomeActive /> : <IconHomeInactive />}
            <SMenuItem isActive={isLinkActive("/")}>Home</SMenuItem>
          </SMenuContainer>
        </Link>
        <Link href="/categories" passHref>
          <SMenuContainer>
            {isLinkActive("/categories") ? (
              <IconCategoryActive />
            ) : (
              <IconCategoryInactive />
            )}
            <SMenuItem isActive={isLinkActive("/categories")}>
              Categories
            </SMenuItem>
          </SMenuContainer>
        </Link>
        <Link href="/cart" passHref>
          <SMenuContainer>
            {isLinkActive("/cart") ? <IconBagActive /> : <IconBagInactive />}
            <SMenuItem isActive={isLinkActive("/cart")}>Bag</SMenuItem>
            {!!totalItems && <SMenuIconBadge>{totalItems}</SMenuIconBadge>}
          </SMenuContainer>
        </Link>
        <Link href="/orders" passHref>
          <SMenuContainer>
            {isLinkActive("/orders") ? (
              <IconOrdersActive />
            ) : (
              <IconOrdersInactive />
            )}
            <SMenuItem isActive={isLinkActive("/orders")}>Orders</SMenuItem>
          </SMenuContainer>
        </Link>
      </SFooterWrapper>
    </SFooter>
  );
}
const SFooter = styled.footer`
  position: fixed;
  border-top: 1px solid #dee2e6 !important;
  bottom: 0;
  left: 0;
  background: white;
  width: 100%;
  z-index: 1002;
`;
const SFooterWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
const SMenuContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing["1"]};
  margin-bottom: 0.625rem;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing["2"]} ${theme.spacing["4"]}`};
  font-size: ${({ theme }) => theme.fontSize.sm};
  transition: all 0.2s;
  & svg {
    ${({ theme }) =>
      mediaQueries("md")(`
    width: 32px;
    height: 32px;
  `)}
  }
  &:hover {
    opacity: 0.75;
  }
`;
const SMenuItem = styled.p<{ isActive: boolean }>`
  font-weight: 500;
  font-size: 12px;
  ${({ theme }) =>
    mediaQueries("sm")(`
  font-size: ${theme.fontSize["sm"]};
  `)}
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.accent : "#b3b3b3"};
`;
