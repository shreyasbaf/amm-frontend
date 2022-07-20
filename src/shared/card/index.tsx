import React from "react"
import { FlexRow } from "../../styles/styled"
import { Spacer, Text } from "../shared"
import { CardWrapper } from "./style"

interface CardProps {
  children?: React.ReactNode
  title?: string
  cardMaxWidth?: number | string
  titleFontVariant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal"
  rightComponent?: React.ReactNode
  backgroundColor?: string
}

const Card = (props: CardProps) => {
  const {
    children,
    title,
    cardMaxWidth,
    titleFontVariant,
    rightComponent,
    backgroundColor,
  } = props
  return (
    <CardWrapper backgroundColor={backgroundColor} cardMaxWidth={cardMaxWidth}>
      {title || rightComponent ? (
        <>
          <FlexRow
            justifyContent={rightComponent ? `space-between` : `flex-start`}>
            <Text variants={titleFontVariant || "h4"}>{title}</Text>
            {rightComponent}
          </FlexRow>
          <Spacer marginTop="1.5rem" />
        </>
      ) : null}
      {children}
    </CardWrapper>
  )
}

export default Card
