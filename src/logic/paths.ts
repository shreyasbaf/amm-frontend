import { Hash, UrlPath, Uuid } from "../shared/helpers/util"

export interface UserProps {
  user: string
}
export interface UserUrlProps extends UserProps {
  organization: Uuid
}

// Basic
export const rootPath: UrlPath<{}> = "/"
export const liquidityPath: UrlPath<{}> = "/liquidity"
export const liquidityRemovePath: UrlPath<{}> = "/remove/:token1/:token2"
export const liquidityAddPath: UrlPath<{}> = "/liquidity/:token1/:token2"
export const swapPath: UrlPath<{}> = "/swap/:token1/:token2"
export const farmPath: UrlPath<{}> = "/farm"
