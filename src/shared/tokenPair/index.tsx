import { SharedDescription } from "../shared"
import Token from "../token"
import { TokenPairWrapper } from "./style"

interface TokenPairProps {
  token1?: string
  token2?: string
  size?: string
  token2Shift?: string
  label?: boolean
}

const TokenPair = (props: TokenPairProps) => {
  const { size, token1, token2, token2Shift, label } = props
  return (
    <TokenPairWrapper token2Shift={token2Shift}>
      <Token token={token1} size={size} />
      <div className="tokenPair2">
        <Token token={token2} size={size} />
        {label ? (
          <SharedDescription>
            {token1} / {token2}
          </SharedDescription>
        ) : null}
      </div>
    </TokenPairWrapper>
  )
}

export default TokenPair
