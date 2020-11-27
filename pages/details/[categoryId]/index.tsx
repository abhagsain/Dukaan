// Show categories
import { GetServerSidePropsContext } from "next";
import React, { ReactElement } from "react";
import { OuterContainer } from "../../../components/helpers";
import Layout from "../../../components/Layout";
import Menu from "../../../components/Menu";
import NotFound from "../../../components/NotFound";
import ProductList from "../../../components/Products/ProductList";
import SearchBar from "../../../components/SearchBar/SearchBar";
import {
  SBottomSpacer,
  SProductSectionHeader,
} from "../../../styles/StyledElements";
import { IAllProducts } from "../../../types";
import { getCategory } from "../../../utils";

interface Props {
  category: IAllProducts;
}

export default function Category({ category }: Props): ReactElement {
  if (!category) {
    return <NotFound>Not Found</NotFound>;
  }
  return (
    <Layout title={`${category.category_name || "Category"}`}>
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
        <SBottomSpacer />
        <Menu />
      </OuterContainer>
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  console.log(
    "🚀 ~ file: index.tsx ~ line 20 ~ getServerSideProps ~ context",
    context.params,
  );
  if (context) {
    if (context && "params" in context && "categoryId" in context.params!) {
      const categoryId = context.params!.categoryId! as string;
      const category = getCategory(categoryId);
      if (!category) {
        return {
          props: {},
        };
      }
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
