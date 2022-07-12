import React from "react"
import { CardWrapper } from "./style"

interface CardProps {
  children?: React.ReactNode
  title?: string
}

const Card = (props: CardProps) => {
  const { children, title } = props
  return (
    <CardWrapper>
      {title ? <label>{title}</label> : null}

      {children}
    </CardWrapper>
  )
}

export default Card
