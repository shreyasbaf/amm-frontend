import styled from "styled-components"
import { colors } from "../../../styles/theme"

export const FarmInfo = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 1rem;
  background: ${colors.darkGrey};
  border-radius: 0.3rem;

  .grid-columns1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 1rem;
  }

  .grid-columns {
    padding: 1rem;
    border-radius: 0.3rem;
  }
`
