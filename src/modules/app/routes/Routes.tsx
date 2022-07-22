import { Route, Routes, Navigate } from "react-router-dom"
import {
  farmPath,
  liquidityAddPath,
  liquidityPath,
  liquidityRemovePath,
  rootPath,
  rootSwapPath,
  swapPath,
} from "../../../logic/paths"
import PageContainer from "../../../shared/pageContainer"
import Exchange from "../../exchange"
import Pool from "../../pool/Pool"

/* const notFoundRoute: RouteDefinition = {
  path: "*",
  element: <div />,
  protected: false,
  title: "",
} */
const notFoundRoute: RouteDefinition = {
  path: "*",
  element: <div />,
  protected: false,
  redirect: rootPath,
  title: "Pool",
  pathType: 0,
}

export const routes: RouteDefinition[] = [
  {
    path: [
      rootPath,
      liquidityPath,
      liquidityAddPath,
      liquidityRemovePath,
      swapPath,
      rootSwapPath,
    ],
    element: Exchange,
    protected: false,
    title: "Swap",
    pathType: 0,
  },
  {
    path: farmPath,
    element: Pool,
    protected: false,
    redirect: rootPath,
    title: "Pool",
    pathType: 0,
  },
].concat(notFoundRoute as any) // Ensure that notFound is the last route

export interface RouteDefinition {
  path: string | string[]
  protected?: boolean
  redirect?: string
  element?: any
  routes?: RouteDefinition[]
  title?: string
  requires?: any
  pathType?: number
}

interface Props {
  // userLoaded: boolean
}
interface RoutesProps {}

export interface User {
  id: string
}

function getRouteRenderWithAuth(isLoggedIn: boolean, route: RouteDefinition) {
  if (isLoggedIn === route.protected || !route.redirect) {
    const RouteComponent = route.requires
      ? route.requires(route.element)
      : route.element
    return { element: <RouteComponent /> }
  } else {
    // return (routeProps: any) => {
    // const from = route.redirect == '/login' ? `?from=${routeProps.match.url}` : ''
    return { element: <Navigate replace to={route.redirect} /> }
    // }
  }
}

export const RoutesComponent: React.FC<Props & RoutesProps> = () => {
  // const { user } = props
  const isLoggedIn = false

  // userIsLoggedIn(user) && userIsEmailVerified(user)
  // if (!props.initialLoad) {
  //   return <Loading />
  // }

  const mapRoutes = (route: RouteDefinition, i: number) => {
    const render = getRouteRenderWithAuth(isLoggedIn, route)
    if (typeof route.path === "string") {
      return <Route key={i} path={route.path} {...render} />
    } else {
      /* 
        Multiple Route on same component
      */
      return route.path.map((path) => <Route key={i} path={path} {...render} />)
    }
  }

  return (
    <PageContainer>
      <Routes>{routes.map(mapRoutes)}</Routes>
    </PageContainer>
  )
}
