import styled from "styled-components"
import { pageContentWidth } from "../../styles/styled"
import { gapSizes } from "../../styles/theme"

interface PageContainerWrapperProps {
  noPadding?: boolean
}

export const PageContainerWrapper = styled.div<PageContainerWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  min-height: 100vh;
  width: 100%;
  transition: all 300ms ease-in-out;
  color: ${({ theme }) => theme.white};

  header {
    width: 100%;
  }

  main {
    width: calc(100% - 2 * var(--pageMargin));
    max-width: ${pageContentWidth}px;
    padding: ${(props) => (!props.noPadding ? `${gapSizes.XXL} 0 ` : "0")};
  }

  footer {
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
    justify-content: flex-end;
  }
`
