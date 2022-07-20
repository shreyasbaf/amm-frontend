import styled from "styled-components"

interface CollapseWrapperProps {
  showDescription?: boolean
}

export const CollapseWrapper = styled.div<CollapseWrapperProps>`
  .expanded {
    max-height: ${(props) => (props.showDescription ? `500px` : `0px`)};
    overflow: hidden;
    transition: ${(props) =>
      props.showDescription && `max-height 0.5s ease-in-out`};
  }
`

interface CollapseHeaderProps {
  showDescription?: boolean
}
export const CollapseHeader = styled.div<CollapseHeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`
