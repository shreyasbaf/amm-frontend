import "./App.css"
import { RoutesComponent } from "./routes/Routes"
import { ThemeProvider } from "styled-components"
import { getTheme, Themes } from "../../styles/theme"
import { GlobalStyle } from "../../styles/globalStyle"
import { useEagerConnect } from "../../blockchain/wallethelper/WalletListner"

export const App = () => {
  const currentTheme = { ...getTheme(Themes.BASIC), selected: Themes.BASIC }
  useEagerConnect()
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <RoutesComponent />
    </ThemeProvider>
  )
}
