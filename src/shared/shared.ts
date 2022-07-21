import { Link } from "react-router-dom"
import styled, { keyframes } from "styled-components"
import { colors } from "../styles/theme"

export const SharedTitle = styled.div`
  font-size: 56px;
  overflow-wrap: normal;
  font-weight: 600;
  margin: 10px 0;

  span {
    font-weight: 100;
    margin-right: 12px;
    margin: 0;
    padding-right: 10px;
  }
`

export const SharedDescription = styled.p`
  font-weight: 300;
  max-width: 780px;
  font-size: 24px;
  line-height: 30px;
  margin: 0px;
`

export const SharedButton = styled.button`
  font-size: 21px;
  text-decoration: none;
  color: #ffff;
  padding: 15px 20px;
  margin: 10px 0;
  background-color: transparent;
  border: 2px solid #455757;
  transition: all linear 0.5s;
  cursor: pointer;
  &:hover {
    color: #ffff;
    opacity: 0.8;
    box-shadow: 5px 5px #ebda86;
  }
`

export const SharedDetailBlock = styled.div`
  color: #ffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-size: 48px;
    font-weight: 700;
  }
  .description {
    font-size: 14px;
    margin: 5px 0;
    font-weight: 700;
  }
`

export const SharedForum = styled.div`
  border: 1px solid #ffff;
  padding: 10px 25px;
  font-weight: 300;
  font-size: 24px;
  border-radius: 8px;
`

export interface SpacerProps {
  margin: string
  marginTop: string
  marginBottom: string
  marginLeft: string
  marginRight: string
  padding: string
  paddingTop: string
  paddingBottom: string
  paddingLeft: string
  paddingRight: string
}

export const Spacer = styled.div<Partial<SpacerProps>>`
  display: flex;
  justify-content: center;
  margin: ${(props) => props.margin};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  padding: ${(props) => props.padding};
  padding-left: ${(props) => props.paddingLeft};
  padding-right: ${(props) => props.paddingRight};
  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};
`

interface CircularLoadingProps {
  variant: "small" | "medium" | "large" | "extraLarge"
  size: string
  color: string
}

const spinAnimation = keyframes`
 0% {
    transform: rotate(0);
  }
  100%{
    transform: rotate(359deg);
  }
`

const handleCircularLoadingSize = (props: Partial<CircularLoadingProps>) => {
  if (props.size) {
    return props.size
  }
  switch (props.variant) {
    case "small":
      return `22px`
    case "medium":
      return `32px`
    case "large":
      return `42px`
    case "extraLarge":
      return `52px`
    default:
      return `32px`
  }
}

export const CircularLoading = styled.div<Partial<CircularLoadingProps>>`
  width: ${handleCircularLoadingSize};
  height: ${handleCircularLoadingSize};
  border: 4px solid ${(props) => props.color || colors.navy};
  border-top: 4px solid transparent;
  border-radius: 50%;
  animation: ${spinAnimation} 0.6s linear 0s infinite;
`

interface IconButtonProps {
  switchSwap?: boolean
}

const RotateAnimation = (switchSwap: boolean | undefined) => keyframes`
  0%{
    transform: ${switchSwap === false && `rotate(180deg)`} ;    
  }

  100%{
    transform: ${switchSwap && `rotate(180deg)`} ;    
  }
`

export const IconButton = styled.img<IconButtonProps>`
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
  animation: ${(props) => RotateAnimation(props.switchSwap)} 0.5s;
  animation-fill-mode: forwards;
`

export const StyledSlider = styled.input.attrs({ type: "range" })`
  width: 100%;
  height: 0.2rem;
  border-radius: 3rem;
  -webkit-appearance: none;
  appearance: none;
  background: ${colors.lightGrey};
  cursor: pointer;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background-color: ${colors.lightNavy};
    height: 2rem;
    width: 2rem;
    border-radius: 50%;

    :hover {
      transform: scale(1.2);
      transition: all 0.2s ease-in-out;
    }
  }
`

const TextVariants = {
  h1: {
    fontSize: `6rem`,
    fontWeight: 300,
  },
  h2: {
    fontSize: `3.75rem`,
    fontWeight: 300,
  },
  h3: {
    fontSize: `3rem`,
    fontWeight: 400,
  },
  h4: {
    fontSize: `2.25rem`,
    fontWeight: 400,
  },
  h5: {
    fontSize: `1.5rem`,
    fontWeight: 400,
  },
  h6: {
    fontSize: `1.25rem`,
    fontWeight: 400,
  },
  normal: {
    fontSize: `1rem`,
    fontWeight: 400,
  },
}

interface TextProps {
  size?: number | string
  weight?: number | string
  variants?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal"
  color?: string
}

export const Text = styled.span<TextProps>`
  font-size: ${(props) =>
    props.size || (props.variants && TextVariants[props.variants].fontSize)};
  font-weight: ${(props) =>
    props.weight ||
    (props.variants && TextVariants[props.variants].fontWeight)};
  color: ${(props) => props.color};
`

interface TabButtonProps {
  active?: boolean
}

export const TabButton = styled(Link)<TabButtonProps>`
  cursor: pointer;
  background-color: ${colors.gray};
  border-radius: 12px 12px 0px 0px;
  width: 12rem;
  margin: 0px 12px;
  position: relative;
  z-index: 1;
  border-bottom: ${(props) => props.active && `5px solid red`};
  padding: 1rem;
  text-align: center;
`
