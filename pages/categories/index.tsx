import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Link from "next/link";
import React, { ReactElement } from "react";
import styled from "styled-components";
import { OuterContainer } from "../../components/helpers";
import Layout from "../../components/Layout";
import Menu from "../../components/Menu";
import SearchBarFixed from "../../components/SearchBar/SearchBarFixed";
import {
  SBottomSpacer,
  SCategoryLabel,
  SCategoryOverlay,
  SProductGrid,
} from "../../styles/StyledElements";
import { ITopCategories } from "../../types";
import { getCategoryList, mediaQueries } from "../../utils";

interface CategoryProps {
  categories: ITopCategories[];
}

export default function Categories({
  categories,
}: CategoryProps): ReactElement {
  return (
    <Layout title="Categories | Dukaan">
      <OuterContainer>
        <SearchBarFixed hasBackLink={false} />
        <SCategoryHeading>Listed Categories</SCategoryHeading>
        <SCategoryGrid>
          {categories.map((category) => (
            <Link href={`/details/${category.id}`} passHref key={category.id}>
              <SCategoryItem>
                <img
                  src={category.image}
                  alt={category.name}
                  srcSet={category.image}
                />
                <SCategoryOverlay>
                  <SCategoryName>{category.name.toLowerCase()}</SCategoryName>
                </SCategoryOverlay>
              </SCategoryItem>
            </Link>
          ))}
        </SCategoryGrid>
        <SBottomSpacer />
        <Menu />
      </OuterContainer>
    </Layout>
  );
}
const SCategoryGrid = styled.div`
  display: grid;
  margin-top: ${({ theme }) => theme.spacing["4"]};
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing["4"]};
  ${() =>
    mediaQueries("sm")(`
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  `)}
  ${() =>
    mediaQueries("lg")(`
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  `)}
`;
const SCategoryItem = styled.a`
  width: 100%;
  position: relative;
  /* cursor: pointer; */
  &:not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing["4"]};
  }
  & img {
    vertical-align: bottom;
    width: 100%;
    border-radius: 0.5rem;
  }
`;
const SCategoryName = styled.h4`
  padding-left: 1rem;
  padding-right: 0.5rem;
  font-weight: 500;
  color: #fff;
  text-transform: capitalize;
  white-space: pre-wrap;
  color: ${({ theme }) => theme.colors.white};
  text-transform: capitalize;
  white-space: pre-wrap;
  font-size: 15px;
  padding-bottom: 1rem;
  ${({ theme }) =>
    mediaQueries("sm")(`
  padding-bottom: 1.5rem; 
  font-size: ${theme.fontSize.sm}; 
  `)}
  ${({ theme }) =>
    mediaQueries("md")(`
  font-size: ${theme.fontSize.lg}; 
  `)}
`;
const SCategoryHeading = styled.h2`
  margin-top: 6rem;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize["base"]};
  ${({ theme }) =>
    mediaQueries("sm")(`
    font-size: ${theme.fontSize["xl"]};
  `)}
`;
export async function getServerSideProps(): Promise<{
  props: CategoryProps;
}> {
  const categories = getCategoryList();
  return {
    props: {
      categories,
    },
  };
}
