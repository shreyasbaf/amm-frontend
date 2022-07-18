import { Button } from "../../../shared/button"
import Card from "../../../shared/card"
import Collapse from "../../../shared/collapse"
import { FlexBox } from "../../../shared/flexBox"
import { SharedDescription, Spacer } from "../../../shared/shared"
import TokenPair from "../../../shared/tokenPair"
import { FlexCol, FlexRow, Header3, StyledP } from "../../../styles/styled"
import { screenSizes } from "../../../styles/theme"
import AddLp from "../addLp"
import RemoveLp from "../removeLp"
import { FarmInfo } from "./style"

const Farm = () => {
  const header = (
    <>
      <TokenPair token1={"BNB"} token2={"USDC"} label />
      <FlexCol alignItems={`flex-start`}>
        <Header3>Earn</Header3>
        <Header3>0</Header3>
      </FlexCol>

      <FlexCol alignItems={`flex-start`}>
        <Header3>APR</Header3>
        <Header3>22.57%</Header3>
      </FlexCol>

      <FlexCol alignItems={`flex-start`}>
        <Header3>Liquidity</Header3>
        <Header3>$135,909,873</Header3>
      </FlexCol>
    </>
  )

  return (
    <Card cardMaxWidth={screenSizes.XL}>
      <Collapse header={header}>
        <FarmInfo>
          <div className="grid-columns1">
            <Header3>Get CAKE-BNB LP</Header3>
            <Header3>View Contract</Header3>
            <Header3>See Pair Info</Header3>
          </div>
          <div className="grid-columns">
            <FlexBox>
              <FlexCol alignItems={`flex-start`}>
                <StyledP>Cake Earned</StyledP>
                <SharedDescription>0</SharedDescription>
              </FlexCol>
              <Button>Harvest</Button>
            </FlexBox>
          </div>
          <div className="grid-columns">
            {true ? (
              <FlexBox>
                <FlexCol alignItems={`flex-start`}>
                  <StyledP>BNB-CAKE staked</StyledP>
                  <SharedDescription>0</SharedDescription>
                </FlexCol>
                <FlexRow>
                  {/* <Button width="3rem">+</Button> */}
                  <RemoveLp />
                  <Spacer marginLeft="1rem" />
                  <AddLp />
                  {/* <Button width="3rem">-</Button> */}
                </FlexRow>
              </FlexBox>
            ) : (
              <FlexCol alignItems={`flex-start`}>
                {/* <Header3>Enable Farm</Header3>
              <Spacer marginTop="0.5rem" />
              <Button fullWidth>Enable</Button> */}
              </FlexCol>
            )}
          </div>
        </FarmInfo>
      </Collapse>
    </Card>
  )
}

export default Farm
