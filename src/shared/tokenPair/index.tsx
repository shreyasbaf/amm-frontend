import { Spacer, Text } from "../shared"
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
          <Text variants="h6">
            <Spacer marginLeft="1rem">
              {token1} / {token2}
            </Spacer>
          </Text>
        ) : null}
      </div>
    </TokenPairWrapper>
  )
}

export default TokenPair
