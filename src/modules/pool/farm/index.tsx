import { Button } from "../../../shared/button"
import Card from "../../../shared/card"
import Collapse from "../../../shared/collapse"
import { FlexBox } from "../../../shared/flexBox"
import { Spacer, Text } from "../../../shared/shared"
import TokenPair from "../../../shared/tokenPair"
import { FlexCol, FlexRow } from "../../../styles/styled"
import { screenSizes } from "../../../styles/theme"
import AddLp from "../addLp"
import RemoveLp from "../removeLp"
import { FarmInfo } from "./style"

const Farm = () => {
  const header = (
    <>
      <TokenPair token1={"BNB"} token2={"USDC"} label />
      <FlexCol alignItems={`flex-start`}>
        <Text variants="h6">Earn</Text>
        <Text variants="normal">0</Text>
      </FlexCol>

      <FlexCol alignItems={`flex-start`}>
        <Text variants="h6">APR</Text>
        <Text variants="normal">22.57%</Text>
      </FlexCol>

      <FlexCol alignItems={`flex-start`}>
        <Text variants="h6">Liquidity</Text>
        <Text variants="normal">$135,909,873</Text>
      </FlexCol>
    </>
  )

  return (
    <Card cardMaxWidth={screenSizes.XL}>
      <Collapse header={header}>
        <FarmInfo>
          <div className="grid-columns1">
            <Text variants="h6">Get CAKE-BNB LP</Text>
            <Text variants="h6">View Contract</Text>
            <Text variants="h6">See Pair Info</Text>
          </div>
          <div className="grid-columns">
            <FlexBox>
              <FlexCol alignItems={`flex-start`}>
                <Text variants="h6">Cake Earned</Text>
                <Text variants="h5">0</Text>
              </FlexCol>
              <Button>Harvest</Button>
            </FlexBox>
          </div>
          <div className="grid-columns">
            {true ? (
              <FlexBox>
                <FlexCol alignItems={`flex-start`}>
                  <Text variants="h6">BNB-CAKE staked</Text>
                  <Text variants="h5">0</Text>
                </FlexCol>
                <FlexRow>
                  <RemoveLp />
                  <Spacer marginLeft="1rem" />
                  <AddLp />
                </FlexRow>
              </FlexBox>
            ) : (
              <FlexCol alignItems={`flex-start`}></FlexCol>
            )}
          </div>
        </FarmInfo>
      </Collapse>
    </Card>
  )
}

export default Farm
