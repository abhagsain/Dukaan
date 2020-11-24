import React, { ReactElement } from "react";
import Link from "next/link";
import styled from "styled-components";
import { ICategory } from "../../types";
import { SCategoryLabel, SCategoryOverlay } from "../../styles/StyledElements";

interface Props {
  categories: ICategory[];
}

export default function CategoryList({ categories }: Props): ReactElement {
  return (
    <SCategoryContainer>
      {categories.map((category) => (
        <Link href={`/details/${category.id}`} key={category.id} passHref>
          <SCategoryItem>
            <SCategoryImage
              src={category.image}
              alt=""
              srcSet={category.image}
            />
            <SCategoryOverlay>
              <SCategoryLabel>{category.name.toLowerCase()}</SCategoryLabel>
            </SCategoryOverlay>
          </SCategoryItem>
        </Link>
      ))}
    </SCategoryContainer>
  );
}
export const SCategoryContainer = styled.div`
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  max-width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding-bottom: ${({ theme }) => theme.spacing["4"]};
`;
export const SCategoryItem = styled.a`
  display: inline-block;
  position: relative;
  &:not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing["4"]};
  }
`;
export const SCategoryImage = styled.img`
  vertical-align: bottom;
  max-width: 8.5rem;
  border-radius: 0.5rem;
`;
