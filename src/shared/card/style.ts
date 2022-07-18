import styled from "styled-components"
import { screenSizes } from "../../styles/theme"

interface CardWrapperProps {
  cardMaxWidth?: number | string
}

export const CardWrapper = styled.div<CardWrapperProps>`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  max-width: ${(props) => props.cardMaxWidth || screenSizes.S}px;
  margin: 0 auto;
  min-height: auto;
  padding: 2rem 3rem;
  background: #151b24;
  transition: all 300ms ease-in-out;
  border-radius: 12px;

  label {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 42px;
  }
`
