import Link from "next/link";
import React, { ReactElement } from "react";
import { SSearchBarContainer } from "../../styles/StyledElements";
import { OuterContainer } from "../helpers";
import SearchBar from "./SearchBar";

interface Props {
  query?: string;
  hasBackLink?: boolean;
}

export default function SearchBarFixed({
  query,
  hasBackLink = true,
}: Props): ReactElement {
  return (
    <SSearchBarContainer>
      <OuterContainer id="search-container">
        {hasBackLink && (
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
        )}
        <SearchBar initalValue={query} />
      </OuterContainer>
    </SSearchBarContainer>
  );
}
