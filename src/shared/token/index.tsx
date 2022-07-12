import { TokenWrapper } from "./style"

interface TokenProps {
  token?: string
  label?: string
  labelColor?: string
}

const Token = (props: TokenProps) => {
  const { token, label, labelColor } = props

  return (
    <TokenWrapper labelColor={labelColor}>
      <img
        src={require(`../../assets/tokens/${token?.toLowerCase()}.png`)}
        alt={token}
      />
      {label ? <span>{label}</span> : null}
    </TokenWrapper>
  )
}

export default Token
