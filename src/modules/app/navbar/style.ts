import styled from "styled-components"
import { screenSizes } from "../../../styles/theme"

export const HeaderContainer = styled.div`
  padding: 0.5rem 30px;
  position: sticky;
  top: 0;
  backdrop-filter: blur(8px);
  background: rgb(22, 27, 34);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 12px;

  @media (max-width: ${screenSizes.M}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  div:nth-child(2) {
    display: flex;
    justify-content: center;
    @media (max-width: ${screenSizes.M}px) {
      justify-content: end;
    }
  }

  div:last-child {
    display: flex;
    justify-content: end;
    @media (max-width: ${screenSizes.M}px) {
      justify-content: space-between;
      grid-column: span 2;
    }
  }
`
export const LogoContainer = styled.div`
  width: 150px;
  height: 50px;
  img {
    width: 100%;
    height: 100%;
  }
`
export const Navigations = styled.nav`
  display: flex;
  align-items: center;
  a {
    font-size: 16px;
    text-decoration: none;
    border-radius: 12px;
    color: #ffff;
    padding: 8px 20px;
    margin: 0 10px;
    border: 2px solid #455757;
    transition: all linear 0.5s;
    &:hover {
      color: #ffff;
      opacity: 0.8;
      background: rgba(90, 97, 105, 0.72);
    }
  }
`
export const WalletContainer = styled.div`
  display: flex;
  align-items: center;
`

export const NetworkContainer = styled.div`
  font-size: 16px;
  text-decoration: none;
  border-radius: 12px;
  color: #ffff;
  padding: 8px 20px;
  margin: 0 10px;
  border: 2px solid #455757;
  transition: all linear 0.5s;
`
