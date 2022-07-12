import { InputWrapper } from "./style"

interface InputProps {
  type?: string
  disable?: boolean
  states?: any
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
  fullWidth?: boolean
}

export const StyledInput = (props: InputProps) => {
  const { type, disable, states, onChange, fullWidth } = props
  return (
    <InputWrapper
      type={type}
      onChange={onChange}
      disabled={disable}
      state={states}
      fullWidth={fullWidth}
    />
  )
}
