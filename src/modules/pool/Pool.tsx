import React from "react"
import { Spacer } from "../../shared/shared"
import Farm from "./farm"

const Pool: React.FC = () => {
  return (
    <div>
      {Array(4)
        .fill(0)
        .map(() => (
          <>
            <Farm />
            <Spacer marginBottom="1rem" />
          </>
        ))}
    </div>
  )
}

export default Pool
