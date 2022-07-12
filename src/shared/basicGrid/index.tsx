import { GridContainer } from './style'

interface GridProps {
    children?: React.ReactNode
}

export const BasicGrid = (props: GridProps) => {
    const { children } = props
    return (
        <GridContainer>
            {children}
        </GridContainer>
    )
}
