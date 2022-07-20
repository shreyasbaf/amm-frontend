import React, { useState } from "react"
import { IconButton, SharedDescription, Spacer, Text } from "../shared"
import { CollapseHeader, CollapseWrapper } from "./style"

interface CollapseProps {
  header?: string | React.ReactNode | undefined
  children?: React.ReactNode
  iconSrc?: string
}

const Collapse = (props: CollapseProps) => {
  const { header, children, iconSrc } = props
  const [showDescription, setShowDescription] = useState<boolean | undefined>()
  return (
    <CollapseWrapper showDescription={showDescription}>
      <CollapseHeader
        onClick={() => setShowDescription(!showDescription)}
        showDescription={showDescription}>
        {typeof header === "string" ? (
          <Text variants="h4">{header}</Text>
        ) : (
          header
        )}
        <IconButton
          switchSwap={showDescription}
          src={iconSrc || require("../../assets/icons/down-icon.svg")}
        />
      </CollapseHeader>

      <div className="expanded">
        {showDescription && (
          <>
            <Spacer marginTop="2rem" /> {children}
          </>
        )}
      </div>
    </CollapseWrapper>
  )
}

export default Collapse
