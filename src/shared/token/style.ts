import styled from "styled-components"

interface TokenWrapperProps {
  labelColor?: string
}

export const TokenWrapper = styled.div<TokenWrapperProps>`
  display: flex;
  align-items: center;

  img {
    max-height: 30px;
    max-width: 30px;
  }

  label {
    margin-left: 12px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    color: ${(props) => props.labelColor};
  }
`
