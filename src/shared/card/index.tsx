import React from "react"
import { CardWrapper } from "./style"

interface CardProps {
  children?: React.ReactNode
  title?: string
  cardMaxWidth?: number | string
}

const Card = (props: CardProps) => {
  const { children, title, cardMaxWidth } = props
  return (
    <CardWrapper cardMaxWidth={cardMaxWidth}>
      {title ? <label>{title}</label> : null}
      {children}
    </CardWrapper>
  )
}

export default Card
