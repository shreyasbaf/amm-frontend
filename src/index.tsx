import { Web3ReactProvider } from "@web3-react/core"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import getLibrary from "./blockchain/wallethelper/GetLibrary"
import "./index.css"
import { App } from "./modules/app/"
import reportWebVitals from "./reportWebVitals"

ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Web3ReactProvider>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
