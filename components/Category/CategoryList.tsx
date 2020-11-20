import React, { ReactElement } from "react";
import Link from "next/link";
import styled from "styled-components";
import { ICategory } from "../../types";

interface Props {
  categories: ICategory[];
}

export default function CategoryList({ categories }: Props): ReactElement {
  return (
    <CategoryContainer>
      {categories.map((category) => (
        <Link href={`/products/?cat=${category.id}`} key={category.id} passHref>
          <CategoryItem>
            <CategoryImage
              src={category.image}
              alt=""
              srcSet={category.image}
            />
            <CategoryOverlay>
              <CategoryLabel>{category.name.toLowerCase()}</CategoryLabel>
            </CategoryOverlay>
          </CategoryItem>
        </Link>
      ))}
    </CategoryContainer>
  );
}
export const CategoryContainer = styled.div`
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
export const CategoryItem = styled.a`
  display: inline-block;
  position: relative;
  &:not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing["4"]};
  }
`;
export const CategoryImage = styled.img`
  vertical-align: bottom;
  max-width: 8.5rem;
  border-radius: 0.5rem;
`;
export const CategoryLabel = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.sm};
  padding-bottom: ${({ theme }) => theme.spacing["4"]};
  padding-left: ${({ theme }) => theme.spacing["2"]};
  padding-right: ${({ theme }) => theme.spacing["2"]};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  text-transform: capitalize;
  white-space: pre-wrap;
`;
export const CategoryOverlay = styled.div`
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
