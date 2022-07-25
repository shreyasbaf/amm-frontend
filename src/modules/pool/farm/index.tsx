import { useState } from "react"
import { Button } from "../../../shared/button"
import Card from "../../../shared/card"
import Collapse from "../../../shared/collapse"
import { FlexBox } from "../../../shared/flexBox"
import CustomModal from "../../../shared/modal/modal"
import { Spacer, Text } from "../../../shared/shared"
import TokenPair from "../../../shared/tokenPair"
import { FlexCol, FlexRow } from "../../../styles/styled"
import { screenSizes } from "../../../styles/theme"
import SwapInput from "../../../shared/swapInput"
import { FarmInfo } from "./style"

const Farm = () => {
  const [openModal, setOpenModal] = useState(false)
  const [approve, setApprove] = useState(false)
  const [addLp, setAddLp] = useState<any>()

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
            {approve ? (
              <FlexBox>
                <FlexCol alignItems={`flex-start`}>
                  <Text variants="h6">BNB-CAKE staked</Text>
                  <Text variants="h5">0</Text>
                </FlexCol>
                <FlexRow>
                  <Button
                    width="3rem"
                    onClick={() => {
                      setOpenModal(true)
                      setAddLp(false)
                    }}>
                    -
                  </Button>
                  <Spacer marginLeft="1rem" />
                  <Button
                    width="3rem"
                    onClick={() => {
                      setOpenModal(true)
                      setAddLp(true)
                    }}>
                    +
                  </Button>
                </FlexRow>
              </FlexBox>
            ) : (
              <Button fullWidth onClick={() => setApprove(true)}>
                Enable
              </Button>
            )}
          </div>
        </FarmInfo>
        <CustomModal
          show={openModal}
          toggleModal={() => {
            setOpenModal(!openModal)
          }}
          heading={
            addLp === false
              ? "Unstake LP tokens"
              : addLp === true
              ? "Stake LP tokens"
              : ""
          }>
          <Spacer marginTop="3rem" />
          <SwapInput token={`BNB-BUSD`} balance={`10.05`} />
          <Spacer marginTop="2rem" />
          <FlexBox>
            <Button width="49%">Cancel</Button>
            <Button width="49%">Confirm</Button>
          </FlexBox>
        </CustomModal>
      </Collapse>
    </Card>
  )
}

export default Farm
