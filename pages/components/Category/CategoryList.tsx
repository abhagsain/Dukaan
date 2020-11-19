import React, { ReactElement } from "react";
import Link from "next/link";
import styled from "styled-components";
import { ICategory } from "../../../types";

interface Props {
  categories: ICategory[];
}
export const CategoryContainer = styled.div`
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 1rem 0;
  max-width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;

  /* ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }


  ::-webkit-scrollbar-track {
    border-radius: 5px;
    background: #f1f1f1;
  }


  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #c0c0c0;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #999999;
  } */
`;
export const CategoryItem = styled.a`
  display: inline-block;
  position: relative;
  &:not(:last-child) {
    margin-right: 1rem;
  }
`;
export const CategoryImage = styled.img`
  vertical-align: bottom;
  max-width: 8.5rem;
  border-radius: 0.5rem;
`;
export const CategoryLabel = styled.h4`
  font-size: 0.875rem;
  padding-bottom: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  font-weight: 600;
  color: #fff;
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
