import { GetServerSidePropsContext } from "next";
import Link from "next/link";
import React, { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import LinkMain from "../../components/Button/LinkMain";
import { IllustrationNotFound, OuterContainer } from "../../components/helpers";
import NotFound from "../../components/NotFound";
import ProductList from "../../components/Products/ProductList";
import SearchBar from "../../components/SearchBar";
import { SBottomSpacer, SDetailNav } from "../../styles/StyledElements";
import { IProduct } from "../../types";
import { findProducts } from "../../utils";

interface SearchProps {
  products: IProduct[];
  status: "SUCCESS" | "NOT_FOUND" | "INVALID_QUERY";
  query: string;
}
const SearchBarHeader = ({ query }: { query: string }) => {
  return (
    <SSearchBarContainer>
      <OuterContainer id="search-container">
        <Link href="/">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              id="left-arrow"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </a>
        </Link>
        <SearchBar initalValue={query} />
      </OuterContainer>
    </SSearchBarContainer>
  );
};
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
        <SearchBarHeader query={query} />
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
  return (
    <OuterContainer>
      <SearchBarHeader query={query} />
      <SHeadingContainer>
        <h2>
          {products.length} results for <span>"{query}"</span>
        </h2>
      </SHeadingContainer>
      <ProductList category_id={123} products={products} />
      <SBottomSpacer />
    </OuterContainer>
  );
}
const SContainer = styled.div`
  max-width: 20rem;
  margin-top: 3rem;
`;
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
const SSearchBarContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10000;
  left: 0;
  background-color: ${({ theme }) => theme.colors.white};
  /* max-width: ${({ theme }) => theme.maxWidth}; */
  margin: 0 auto;
  & #search-container {
    display: flex;
    align-items: center;
    & #left-arrow {
      width: 30px;
      margin-right: 10px;
    }
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
