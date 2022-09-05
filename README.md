<div align="center" style="margin-top:20px">

[![AMM-BASIC-Template]("https://uploads-ssl.webflow.com/60c92ce167b91f55c48259ca/60e883fa2ffc2286619f0430_RapidInnovationsLogo.svg"))]()
### Powercity Accelerator
</div>
<hr>

## Docs
- [Technical](#contributing)
  - [Codebase](#codebase)
    - [Technologies](#technologies)
    - [Folder Structure](#folder-structure)
    - [Code Style](#code-style)
  - [First time setup](#first-time-setup)
  - [Running the app locally](#running-the-app-locally)

#### Technologies
let's talk about the coarse architecture of this repo:
- **Typescript**: We use React to power our frontend apps. Almost all of the code you'll touch in this codebase will be Typescript.
  Here is a list of technologies we use:
- **React**: Frontend React app

#### Folder structure
```sh
AMM_TEMPLATE/
    ├── ...
    ├── src                    # source file of the app
    │   ├── asset              # Asset of the app like image,fonts
    │   ├── blockchain         # Blockchain related files and foldrs
    │   ├── logic              # Related to Redux file
    │   ├── modules             # Modules contains the app page and route setup
    │   ├── shared             # Shared folder contain the reusable components
    │   └── styles             # It contains the global style of the app
    ├──public
    ├── ...
```
#### Code Style
- We follow proper naming convention like for folder we are using `camel Case` for files `Pascal Case` and function name should be in `camel Case`.
- We are following Prettier to proper format the code.
##### Rules
- **No `console.log`s in any file**: we are removing `console.log` after develping done.
### First time setup
The first step to running Powercity Accelerator locally is downloading the code by cloning the repository:
```sh
git clone https://github.com/Rapid-Innovation-Starters/web-react-amm-frontend-amm.git
```
After clone install the node modules:
```sh
yarn install
```
### Running the app locally
To start the React server locally:
```sh
yarn start
```