import Link from "next/link";
import React, { ReactElement } from "react";
import { SButton } from "../../styles/StyledElements";
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
