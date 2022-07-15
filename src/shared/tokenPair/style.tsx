import styled from "styled-components"

interface TokenPairWrapperProps {
  token2Shift?: string
}

export const TokenPairWrapper = styled.div<TokenPairWrapperProps>`
  display: flex;
  position: relative;

  .tokenPair2 {
    display: flex;
    align-items: center;
    position: absolute;
    white-space: nowrap;
    left: ${(props) => props.token2Shift || `1.7rem`};
  }
`
