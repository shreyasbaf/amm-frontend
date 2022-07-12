import { ButtonWrapper, ButtonAlignment } from "./style"

interface ButtonProps {
  children?: React.ReactNode
  btnType?: string
  align?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export const Button = (props: ButtonProps) => {
  const { children, btnType, align, onClick } = props
  return (
    <ButtonAlignment align={align}>
      <ButtonWrapper btnType={btnType} onClick={onClick}>
        {children}
      </ButtonWrapper>
    </ButtonAlignment>
  )
}
