import { useState } from "react"
import { Button } from "../../../../shared/button"
import Card from "../../../../shared/card"
import useComponentVisible from "../../../../shared/hooks/useComponentVisible"
import { IconButton, Spacer, Text } from "../../../../shared/shared"
import { StyledInput } from "../../../../shared/styledInput"
import { FlexRow } from "../../../../styles/styled"
import { colors } from "../../../../styles/theme"
import { SwapSettingCard } from "./style"

interface settingProps{
  handleSlippage?: any,
  handleDeadline?: any
}

const SwapSetting = (props: settingProps) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false)
  const [slippageValueonChange, setSlippageValueOnChange] = useState<string>("")
  const [deadlineValueOnChange, setDeadlineValueOnChange] = useState<string>("")
  const { handleSlippage , handleDeadline} = props

  const onChangeSlippage = (e: any) => {
    let t = e.target.value;
    e.target.value =
      t.indexOf(".") >= 0
        ? t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)
        : t;
    let value: string = e.target.value;

    if (value !== "" && Number(value) >= 0 && Number(value) <= 50) {
      handleSlippage(value);
      setSlippageValueOnChange(value)
    }else if (value == ""){
      setSlippageValueOnChange("")
    }
  }

  const onChangeDeadline = (e: any) => {
    let t = e.target.value;
    e.target.value =
      t.indexOf(".") >= 0
        ? t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 0)
        : t;
    let value: string = e.target.value;

    if (value !== "" && Number(value) >= 0 && Number(value) <= 20) {
      handleDeadline(value);
      setDeadlineValueOnChange(value)
    }else if (value == ""){
      setDeadlineValueOnChange("")
    }
  }

  return (
    <SwapSettingCard>
      <IconButton
        onClick={() => {
          setIsComponentVisible(!isComponentVisible)
        }}
        src={require("../../../../assets/icons/setting-icon.svg")}
      />

      <div className="settingCard" ref={ref}>
        {isComponentVisible && (
          <Card
            backgroundColor={colors.darkNavy}
            title="Transaction Setting"
            titleFontVariant="h6"
            cardMaxWidth={400}>
            <Text variants="normal">Slippage Setting</Text>
            <Spacer marginBottom="0.5rem" />
            <FlexRow>
              <Button>Auto</Button>
              <StyledInput value={slippageValueonChange} onChange={onChangeSlippage}/>
            </FlexRow>
            <Spacer marginTop="1rem" />
            <Text variants="normal">Deadline</Text>
            <Spacer marginBottom="0.5rem" />
            <FlexRow>
              <Button>Auto</Button>
              <StyledInput value={deadlineValueOnChange} onChange={onChangeDeadline}/>
            </FlexRow>
          </Card>
        )}
      </div>
    </SwapSettingCard>
  )
}

export default SwapSetting
