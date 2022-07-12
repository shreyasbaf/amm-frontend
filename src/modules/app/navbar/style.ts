import styled from "styled-components"

export const HeaderContainer = styled.header`
  padding: 0.5rem 30px;
  position: sticky;
  top: 0;
  backdrop-filter: blur(8px);
  background: rgb(22, 27, 34);
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
