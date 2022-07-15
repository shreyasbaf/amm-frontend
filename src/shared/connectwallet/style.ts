import styled, { keyframes } from "styled-components"

export const Content = styled.div``
export const SemiHead = styled.p`
  font-size: 12px;
  line-height: 19px;
  font-family: Light;
  margin: 0;
  color: white;
  @media (min-width: 700px) {
    font-size: 16px;
  }
`
export const AddressInfoWrap = styled.div<{ menu: any }>`
  display: flex;
  justify-content: center;
  @media (max-width: 600px) {
    transform: translateX(-125px);
  }
  @media (min-width: 600px) {
    transform: ${(props) => (props.menu ? "translateX(-107%)" : "inherit")};
  }
`
export const ConnectButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  border: 1px solid rgba(186, 169, 255, 0.25);
  text-transform: uppercase;
  padding: 10px;
  transition: all 0.2s;
  img {
    margin-right: 8px;
  }
  p {
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    margin: 0;
    color: #fff;
    margin-top: 2px;
  }
  &:hover {
    background: rgba(186, 169, 255, 0.1);
  }
  @media (max-width: 600px) {
    transform: translateX(-134px);
  }
`
export const BnbInfo = styled.div<{ menu: any }>`
  background: transparent;
  color: #fff;
  font-size: 12px;
  line-height: 19px;
  font-family: SemiBold;
  border-radius: 12px;
  border: 0.5px solid rgba(255, 255, 255, 0.2);
  padding: 12px 50px 33px 25px;
  height: 23px;
  @media (max-width: 414px) {
    width: 101px;
  }
  @media (min-width: 600px) {
    font-size: 12px;
    padding: 12px 50px 33px 15px;
    width: ${(props) => (props.menu ? "80px" : "inherit")};
  }
  @media (min-width: 1200px) {
    font-size: 16px;
    padding: 12px 50px 33px 25px;
  }
`

export const AddressInfo = styled.div`
  background: #0d0d13;
  color: #fff;
  font-size: 12px;
  line-height: 19px;
  font-family: SemiBold;
  border: 0.5px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 12px 25px 33px 25px;
  height: 25px;
  margin-left: -40px;
  width: 120px;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
  @media (min-width: 700px) {
    font-size: 12px;
    padding: 12px 10px 33px 10px;
    width: 80px;
  }
  @media (min-width: 1200px) {
    font-size: 16px;
    padding: 12px 25px 33px 25px;
    width: 120px;
  }
`

export const OptionArea = styled.div`
  border-radius: 0px;
  margin-bottom: 25px;
`

export const WalletOption = styled.div`
  background: #000;
  border-radius: 0px;
  background: rgba(186, 169, 255, 0.07);
  border: 1px solid rgba(186, 169, 255, 0.1);
  margin-bottom: 15px;
  z-index: 0;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  &:hover {
    // transform: translate(3px);
    // border: 1px solid #615d71;
  }
  &:active {
    transform: translate(1px, -1px);
  }

  p {
    margin: 0;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    font-family: SemiBold;
    color: #000;
    margin-top: 15px;
  }
`

export const WalletDetails = styled.div`
  margin-top: 40px;
  margin-bottom: 15px;
  p {
    font-size: 16px;
    line-height: 23px;
    font-family: Light;
    color: rgb(9 34 39 / 50%);
    margin-top: 15px;
    text-align: center;
    word-break: break-all;
  }
`

export const LinksFlex = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 0 60px 0;
  a {
    color: #fbec5b;
    text-decoration: none;
    font-size: 12px;
    line-height: 19px;
    font-family: Light;
    letter-spacing: 0.3px;
    cursor: pointer;
    @media (min-width: 700px) {
      font-size: 16px;
    }
  }
  img {
    height: 20px;
    margin-left: 5px;
    display: inline-block;
    margin-top: -3px;
    cursor: pointer;
    @media (min-width: 700px) {
      height: 24px;
    }
  }
  p {
    color: #fff;
    font-size: 12px;
    font-family: Light;
    margin: 0;
  }
`
const breatheAnimation = keyframes`
 0% {  transform: translateY(0px);}
 25% {  transform: translateY(15px);}
 50% {  transform: translateY(10px);}
 75% { transform: translateY(5px); }
 100% { transform: translateY(0px); }

 `
export const StatusImage = styled.img`
  animation: ${breatheAnimation} 1.5s linear infinite;
`
export const StatusContent = styled.div`
  text-align: center;
  a {
    font-family: Light;
    font-size: 16px;
    line-height: 19px;
    color: #fbec5b;
    margin-right: 5px;
    margin-top: 4px;
  }
  p {
    font-family: SemiBold;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    margin: 0;
    color: #fff;
  }
  h2 {
    font-family: Medium;
    font-size: 16px;
    line-height: 19px;
    margin: 10px 0;
    color: #fff;
  }

  h3 {
    font-family: Light;
    font-size: 14px;
    line-height: 16px;
    margin: 0;
    color: #fff;
    font-weight: 300;
  }
`

export const LinkFlex = styled.div`
  display: flex;

  img {
    margin-top: -4px;
  }
`
export const ButtonWrapper = styled.div`
  display: flex;
`

export const ConnectLink = styled.a`
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
`
