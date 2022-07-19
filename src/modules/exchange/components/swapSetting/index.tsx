import { Button } from "../../../../shared/button"
import Card from "../../../../shared/card"
import useComponentVisible from "../../../../shared/hooks/useComponentVisible"
import { IconButton, Spacer, Text } from "../../../../shared/shared"
import { StyledInput } from "../../../../shared/styledInput"
import { FlexRow } from "../../../../styles/styled"
import { colors } from "../../../../styles/theme"
import { SwapSettingCard } from "./style"

const SwapSetting = () => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false)

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
              <StyledInput />
            </FlexRow>
            <Spacer marginTop="1rem" />
            <Text variants="normal">Deadline</Text>
            <Spacer marginBottom="0.5rem" />
            <FlexRow>
              <Button>Auto</Button>
              <StyledInput />
            </FlexRow>
          </Card>
        )}
      </div>
    </SwapSettingCard>
  )
}

export default SwapSetting
