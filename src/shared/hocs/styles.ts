import { ReactComponentElement } from "react"
import styled from "styled-components"

export interface HeaderLinks {
  path?: string
  defaultUrl?: string
  title: string
  image: ReactComponentElement<any>
}

export const FixedHeader = styled.div<any>`
  z-index: 999;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  top: 0;
  background: white;
`

export const Logo = styled.div``
export const Navigations = styled.div``
export const HeaderRightComponent = styled.div``
