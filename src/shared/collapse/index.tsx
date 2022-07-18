import React, { useState } from "react"
import { IconButton, SharedDescription, Spacer } from "../shared"
import { CollapseHeader } from "./style"

interface CollapseProps {
  header?: string | React.ReactNode | undefined
  children?: React.ReactNode
  iconSrc?: string
}

const Collapse = (props: CollapseProps) => {
  const { header, children, iconSrc } = props
  const [showDescription, setShowDescription] = useState(false)
  return (
    <div>
      <CollapseHeader onClick={() => setShowDescription(!showDescription)}>
        {typeof header === "string" ? (
          <SharedDescription>{header}</SharedDescription>
        ) : (
          header
        )}
        <IconButton
          src={iconSrc || require("../../assets/icons/arrow-down-icon.svg")}
        />
      </CollapseHeader>
      {showDescription ? (
        <>
          <Spacer marginTop="2rem" /> {children}
        </>
      ) : null}
    </div>
  )
}

export default Collapse
