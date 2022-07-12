import { FlexContainer } from "./style"

interface FlexProps {
  children?: React.ReactNode;
}

export const FlexBox = (props: FlexProps) => {
  const { children } = props
  return (
    <FlexContainer>
      {children}
    </FlexContainer>
  );
}
