import { Hash, UrlPath, Uuid } from "../shared/helpers/util"

export interface UserProps {
  user: string
}
export interface UserUrlProps extends UserProps {
  organization: Uuid
}

// Basic
export const rootPath: UrlPath<{}> = "/"
export const poolPath: UrlPath<{}> = "/pool"
