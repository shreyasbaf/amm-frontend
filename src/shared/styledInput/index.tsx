import { InputWrapper } from "./style"

interface InputProps {
  type?: string
  disable?: boolean
  states?: any
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
}

export const StyledInput = (props: InputProps) => {
  const { type, disable, states, onChange } = props
  return (
    <InputWrapper
      type={type}
      onChange={onChange}
      disabled={disable}
      state={states}
    />
  )
}
