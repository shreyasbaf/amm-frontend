import { ButtonWrapper, ButtonAlignment, buttonTypes } from "./style"

interface ButtonProps {
  children?: React.ReactNode
  btnType?: buttonTypes
  align?: "center" | "start" | "end"
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
  fullWidth?: boolean
  width?: string
  disabled?: boolean
}

export const Button = (props: ButtonProps) => {
  const { children, btnType, align, onClick, fullWidth, width, disabled } =
    props

  if (align) {
    return (
      <ButtonAlignment align={align}>
        <ButtonWrapper
          disabled={disabled}
          btnType={btnType}
          fullWidth={fullWidth}
          width={width}
          onClick={onClick}>
          {children}
        </ButtonWrapper>
      </ButtonAlignment>
    )
  } else {
    return (
      <ButtonWrapper
        disabled={disabled}
        btnType={btnType}
        fullWidth={fullWidth}
        width={width}
        onClick={onClick}>
        {children}
      </ButtonWrapper>
    )
  }
}
