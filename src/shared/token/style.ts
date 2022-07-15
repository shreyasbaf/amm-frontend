import styled from "styled-components"

interface TokenWrapperProps {
  labelColor?: string
  size?: string
}

export const TokenWrapper = styled.div<TokenWrapperProps>`
  display: flex;
  align-items: center;

  img {
    height: ${(props) => props.size || `50px`};
    width: ${(props) => props.size || `50px`};
  }

  span {
    margin-left: 12px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    color: ${(props) => props.labelColor};
  }
`
