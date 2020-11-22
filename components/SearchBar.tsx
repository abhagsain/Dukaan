import React, { ReactElement, useState } from "react";
import styled, { ThemeConsumer } from "styled-components";

interface Props {}

export default function SearchBar({}: Props): ReactElement {
  const [search, setSearch] = useState("");
  const onButtonClicked = () => {};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <SSearchContainer onSubmit={handleSubmit}>
      <SSearchInput
        type="text"
        name="search_input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        id="search"
        placeholder="Search for products..."
      />
      <SButton
        type="button"
        onClick={onButtonClicked}
        disabled={!search.trim().length}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="21"
          viewBox="0 0 21 21"
        >
          <path
            fill="#FFF"
            d="M8.925 16.364c-3.763 0-6.825-3.069-6.825-6.842C2.1 5.75 5.162 2.68 8.925 2.68c3.763 0 6.825 3.07 6.825 6.842 0 3.773-3.062 6.842-6.825 6.842m7.191-1.565c1.085-1.482 1.734-3.302 1.734-5.277 0-4.933-4.004-8.947-8.925-8.947C4.004.575 0 4.589 0 9.522c0 4.934 4.004 8.948 8.925 8.948 2.196 0 4.206-.803 5.761-2.128l3.693 3.702c.205.206.474.309.743.309.268 0 .537-.103.742-.309.41-.411.41-1.076 0-1.488L16.116 14.8z"
          ></path>
        </svg>
      </SButton>
    </SSearchContainer>
  );
}
const SSearchContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.spacing["4"]} 0`};
  /* padding-bottom: ${({ theme }) => theme.spacing["1"]}; */
  z-index: 1000;
`;
const SSearchInput = styled.input`
  padding: ${({ theme }) => theme.spacing["3"]};
  color: ${({ theme }) => theme.colors.primary};
  flex: 1;
  height: 39px;
  background-color: #f2f2f2;
  border-radius: 6px;
  line-height: normal !important;
  border: none;
  margin: 0 8px 0 0;
  box-shadow: ${({ theme }) => theme.outlineNone};
  transition: all 0.2s;
  &:focus {
    /* border: 2px solid ${({ theme }) => theme.colors.gray}; */
    outline: none;
    box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.5);
  }
`;
const SButton = styled.button`
  align-self: stretch;
  padding: 10px;
  outline: none;
  border: none;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.darkGray : theme.colors.accent};
  border-radius: 6px;
  cursor: ${({ disabled }) => (disabled ? `not-allowed` : `pointer`)};
`;
