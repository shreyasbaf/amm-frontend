import { TokenWrapper } from "./style"

interface TokenProps {
  token?: string
  label?: string
  labelColor?: string
  size?: string
}

const Token = (props: TokenProps) => {
  const { token = "unknown", label, labelColor, size } = props

  return (
    <TokenWrapper labelColor={labelColor} size={size}>
      <img
        src={require(`../../assets/tokens/${token?.toLowerCase()}.png`)}
        alt={token}
      />
      {label ? <span>{label}</span> : null}
    </TokenWrapper>
  )
}

export default Token
