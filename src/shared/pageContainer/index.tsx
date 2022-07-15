import React from "react"
import { Navbar } from "../../modules/app/navbar/Navbar"
import { PageContainerWrapper } from "./style"

interface PageContainerProps {
  children: React.ReactNode
}

const PageContainer = (props: PageContainerProps) => {
  const { children } = props
  return (
    <PageContainerWrapper>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>Footer Content</footer>
    </PageContainerWrapper>
  )
}

export default PageContainer
