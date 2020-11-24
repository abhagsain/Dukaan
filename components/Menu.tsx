import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { ReactElement } from "react";
import styled, { ThemedStyledFunction } from "styled-components";
import { useApp } from "../context/AppContext";
import { IconBag, IconCategories, IconHome, IconOrders } from "./helpers";

interface Props {}
interface CustomLinkProps {
  href: string;
  children?: React.ReactNode[];
}
// export const CustomLink ({ href, children }: CustomLinkProps): ReactElement => {
//   const router = useRouter()

//   // let className = children.props.className || ''
//   let isActive = false
//   if (router.pathname === href) {
//     isActive = true;
//   }

//   if(children)
//   return <Link href={href}>{React.cloneElement(children, { isActive })}</Link>
//   return <div>Hey</div>
// }
export default function Menu({}: Props): ReactElement {
  const { cart } = useApp();
  const totalItems = cart.reduce((acc, curr) => {
    return acc + curr.count;
  }, 0);
  return (
    <SFooter>
      <SFooterWrapper>
        <Link href="/" passHref>
          <SMenuContainer>
            <IconHome />
            <SMenuItem>Home</SMenuItem>
          </SMenuContainer>
        </Link>
        <Link href="/categories" passHref>
          <SMenuContainer>
            <IconCategories />
            <SMenuItem>Categories</SMenuItem>
          </SMenuContainer>
        </Link>
        <Link href="/cart" passHref>
          <SMenuContainer>
            <IconBag />
            <SMenuItem>Bag {totalItems && totalItems}</SMenuItem>
          </SMenuContainer>
        </Link>
        <Link href="/" passHref>
          <SMenuContainer>
            <IconOrders />
            <SMenuItem>Orders</SMenuItem>
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
`;
const SMenuItem = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  color: #b3b3b3;
`;
