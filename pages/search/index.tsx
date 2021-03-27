import { GetServerSidePropsContext } from "next";
import React, { ReactElement } from "react";
import styled from "styled-components";
import LinkMain from "../../components/Button/LinkMain";
import { IllustrationNotFound, OuterContainer } from "../../components/helpers";
import Layout from "../../components/Layout";
import NotFound from "../../components/NotFound";
import ProductList from "../../components/Products/ProductList";
import SearchBarFixed from "../../components/SearchBar/SearchBarFixed";
import { SBottomSpacer } from "../../styles/StyledElements";
import { IProduct } from "../../types";
import { findProducts } from "../../utils";

interface SearchProps {
  products: IProduct[];
  status: "SUCCESS" | "NOT_FOUND" | "INVALID_QUERY";
  query: string;
}
export default function Search({
  status,
  products,
  query,
}: SearchProps): ReactElement {
  if (status === "INVALID_QUERY") {
    // it means the query string is invalid i.e other the "search_query"
    return (
      <OuterContainer>
        <NotFound>Not Sure What You're Looking For</NotFound>
      </OuterContainer>
    );
  } else if (status === "NOT_FOUND") {
    return (
      <OuterContainer>
        <SearchBarFixed query={query} />
        <STopMargin />
        <SIllusContainer>
          <div>
            <IllustrationNotFound />
            <h2>No Proudct Found</h2>
            <p>
              Please check the spelling or try searching for something else..
            </p>
            <LinkMain href="/">Back to Shopping</LinkMain>
          </div>
        </SIllusContainer>
      </OuterContainer>
    );
  }
  console.log(products)
  return (
    <Layout title="Search">
      <OuterContainer>
        <SearchBarFixed query={query} />
        <SHeadingContainer>
          <h2>
            {products.length} results for <span>"{query}"</span>
          </h2>
        </SHeadingContainer>
        <ProductList category_id={undefined} products={products} />
        <SBottomSpacer />
      </OuterContainer>
    </Layout>
  );
}

const SIllusContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 50vh;
  justify-content: center;
  & svg {
    max-width: 324px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
  & h2 {
    font-size: ${({ theme }) => theme.fontSize["lg"]};
    font-weight: bold;
  }
  & p {
    margin-top: ${({ theme }) => theme.spacing["2"]};
    margin-bottom: ${({ theme }) => theme.spacing["12"]};
    color: gray;
  }
`;

const STopMargin = styled.div`
  margin: ${({ theme }) => `6rem 0 ${theme.spacing["6"]} 0`};
`;
const SHeadingContainer = styled(STopMargin)`
  display: flex;
  align-items: center;
  /* margin: ${({ theme }) =>
    `${theme.spacing["12"]} 0 ${theme.spacing["6"]} 0`}; */
  h2 {
    font-weight: 500;
  }
  span {
    font-weight: bold;
  }
`;
export const getServerSideProps = async (
  context: GetServerSidePropsContext<{ categoryId: string; productId: string }>,
): Promise<{ props: SearchProps }> => {
  const { search_query } = context.query;
  if (search_query && typeof search_query === "string") {
    const products = findProducts(search_query);
    if (!products.length) {
      return {
        props: {
          products,
          query: search_query,
          status: "NOT_FOUND",
        },
      };
    }
    return {
      props: {
        products,
        query: search_query,
        status: "SUCCESS",
      },
    };
  }
  return {
    props: {
      products: [],
      query: search_query as string,
      status: "INVALID_QUERY",
    },
  };
};
