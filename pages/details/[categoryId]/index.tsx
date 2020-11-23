// Show categories
import { GetServerSidePropsContext } from "next";
import React, { ReactElement } from "react";
import styled from "styled-components";
import { OuterContainer } from "../../../components/helpers";
import Menu from "../../../components/Menu";
import ProductList from "../../../components/Products/ProductList";
import SearchBar from "../../../components/SearchBar";
import { SProductSectionHeader } from "../../../styles/StyledElements";
import { IAllProducts } from "../../../types";
import { getCategory } from "../../../utils";

interface Props {
  category: IAllProducts;
}

export default function Category({ category }: Props): ReactElement {
  return (
    <OuterContainer>
      <SearchBar />
      <SProductSectionHeader hasBackground={false}>
        <div>
          <h2>{category.category_name}</h2>
        </div>
      </SProductSectionHeader>
      <ProductList
        products={category.products}
        category_id={category.category_id}
      />
      <ISpacer />
      <Menu />
    </OuterContainer>
  );
}
const ISpacer = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing["24"]};
`;
export async function getServerSideProps(context: GetServerSidePropsContext) {
  console.log(
    "🚀 ~ file: index.tsx ~ line 20 ~ getServerSideProps ~ context",
    context.params,
  );
  if (context) {
    if (context && "params" in context && "categoryId" in context.params!) {
      const categoryId = context.params!.categoryId! as string;
      const category = getCategory(categoryId);
      console.log(
        "🚀 ~ file: index.tsx ~ line 25 ~ getServerSideProps ~ category",
        category,
      );
      return {
        props: { category },
      };
    }
  }
  // const category
  return {
    props: {}, // will be passed to the page component as props
  };
}
