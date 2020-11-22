import Link from "next/link";
import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  children: JSX.Element[] | JSX.Element | string;
  href: string;
}
export default function LinkMain({ children, href }: Props): ReactElement {
  return (
    <Link href={href}>
      <SButton>{children}</SButton>
    </Link>
  );
}
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
