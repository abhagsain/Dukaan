import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {}
const S404 = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Heading = styled.h2`
  font-size: ${({ theme }) => theme.fontSize["2xl"]};
  font-weight: 600;
`;
export default function Custom404({}: Props): ReactElement {
  return (
    <S404>
      <Heading>404 - Work In Progress :)</Heading>
    </S404>
  );
}
