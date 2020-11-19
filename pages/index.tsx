import { GetStaticProps } from "next";
import React, { ReactElement } from "react";
import styled from "styled-components";
import { ITopCategories, ITopProducts } from "../types";
import { getData } from "../utils";
import { CategoryList } from "./components/Category";
const OuterContainer = styled.div`
  padding: 0 2rem;
  width: 100%;
  max-width: 71.25rem;
  margin: 0 auto;
`;
export const SectionHeading = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1.25rem;
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
    </OuterContainer>
  );
}

export const getStaticProps: GetStaticProps<IStaticProps> = async () => {
  const data = getData();
  return { props: data };
};
