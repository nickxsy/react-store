export const ROUTES_PATH = {
  ADMIN: "/admin",
  BASKET: "/basket",
  SHOP: "/",
  SIGNIN: "/signin",
  SIGNUP: "/signup",
  DEVICE: "/device/:id",
  NOT_FOUND: "*",
} as const;

export const PUBLIC_ROUTES_PATH = {
  SHOP: ROUTES_PATH.SHOP,
  SIGNIN: ROUTES_PATH.SIGNIN,
  SIGNUP: ROUTES_PATH.SIGNUP,
  DEVICE: ROUTES_PATH.DEVICE,
  NOT_FOUND: ROUTES_PATH.NOT_FOUND,
} as const;

export const AUTH_ROUTES_PATH = {
  ADMIN: ROUTES_PATH.ADMIN,
  BASKET: ROUTES_PATH.BASKET,
} as const;
