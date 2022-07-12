import * as React from "react"
import { ComponentType } from "react"
import { Navbar } from "../../modules/app/navbar/Navbar"
import { LogoContainer } from "../../modules/app/navbar/style"
import { FlexRow } from "../../styles/styled"
import { FixedHeader } from "./styles"

export const Header = (props: any) => {
  return (
    <FixedHeader>
      <Navbar />
    </FixedHeader>
  )
}

export function withHeader<P>(
  InnerComponent: ComponentType<P>
): ComponentType<P> {
  return (props: any) => (
    <React.Fragment>
      <Header {...props} />
      <InnerComponent {...props} />
    </React.Fragment>
  )
}
