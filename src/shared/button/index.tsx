import { ButtonWrapper, ButtonAlignment, buttonTypes } from "./style"

interface ButtonProps {
  children?: React.ReactNode
  btnType?: buttonTypes
  align?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
  fullWidth?: boolean
  width?: string
}

export const Button = (props: ButtonProps) => {
  const { children, btnType, align, onClick, fullWidth, width } = props
  return (
    <ButtonAlignment align={align}>
      <ButtonWrapper
        btnType={btnType}
        fullWidth={fullWidth}
        width={width}
        onClick={onClick}>
        {children}
      </ButtonWrapper>
    </ButtonAlignment>
  )
}
