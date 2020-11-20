import { GetStaticProps } from "next";
import React, { ReactElement } from "react";
import styled from "styled-components";
import { ITopCategories, ITopProducts } from "../types";
import { getData } from "../utils";
import { CategoryList } from "../components/Category";
import Menu from "../components/Menu";
const OuterContainer = styled.div`
  padding: 0 2rem;
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`;
export const SectionHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing["5"]};
`;

interface ProductsSectionProps {}

function ProductsSection({}: ProductsSectionProps): ReactElement {
  return (
    <div>
      <h2>Name</h2>
    </div>
  );
}
type HomeProps = IStaticProps;
interface IStaticProps {
  top_categories: ITopCategories[];
  top_products: ITopProducts[];
}
export default function Home({
  top_categories,
  top_products,
}: HomeProps): ReactElement {
  return (
    <OuterContainer>
      <SectionHeading>My Dukaan</SectionHeading>
      <SectionHeading>Top Categories</SectionHeading>
      <CategoryList categories={top_categories} />
      <ProductsSection />
      <Menu />
    </OuterContainer>
  );
}

export const getStaticProps: GetStaticProps<IStaticProps> = async () => {
  const data = getData();
  return { props: data };
};
