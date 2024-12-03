/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as AuthenticationImport } from "./routes/_authentication";
import { Route as AuthenticatedImport } from "./routes/_authenticated";
import { Route as AuthenticatedIndexImport } from "./routes/_authenticated/index";
import { Route as AuthenticationSignUpImport } from "./routes/_authentication/sign-up";
import { Route as AuthenticationLogInImport } from "./routes/_authentication/log-in";
import { Route as AuthenticatedProfileImport } from "./routes/_authenticated/profile";
import { Route as AuthenticationpasswordVerifyImport } from "./routes/_authentication/(password)/verify";
import { Route as AuthenticationpasswordResetPasswordImport } from "./routes/_authentication/(password)/reset-password";
import { Route as AuthenticationpasswordForgotPasswordImport } from "./routes/_authentication/(password)/forgot-password";

// Create/Update Routes

const AuthenticationRoute = AuthenticationImport.update({
  id: "/_authentication",
  getParentRoute: () => rootRoute,
} as any);

const AuthenticatedRoute = AuthenticatedImport.update({
  id: "/_authenticated",
  getParentRoute: () => rootRoute,
} as any);

const AuthenticatedIndexRoute = AuthenticatedIndexImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => AuthenticatedRoute,
} as any);

const AuthenticationSignUpRoute = AuthenticationSignUpImport.update({
  id: "/sign-up",
  path: "/sign-up",
  getParentRoute: () => AuthenticationRoute,
} as any);

const AuthenticationLogInRoute = AuthenticationLogInImport.update({
  id: "/log-in",
  path: "/log-in",
  getParentRoute: () => AuthenticationRoute,
} as any);

const AuthenticatedProfileRoute = AuthenticatedProfileImport.update({
  id: "/profile",
  path: "/profile",
  getParentRoute: () => AuthenticatedRoute,
} as any);

const AuthenticationpasswordVerifyRoute = AuthenticationpasswordVerifyImport.update({
  id: "/(password)/verify",
  path: "/verify",
  getParentRoute: () => AuthenticationRoute,
} as any);

const AuthenticationpasswordResetPasswordRoute = AuthenticationpasswordResetPasswordImport.update({
  id: "/(password)/reset-password",
  path: "/reset-password",
  getParentRoute: () => AuthenticationRoute,
} as any);

const AuthenticationpasswordForgotPasswordRoute = AuthenticationpasswordForgotPasswordImport.update(
  {
    id: "/(password)/forgot-password",
    path: "/forgot-password",
    getParentRoute: () => AuthenticationRoute,
  } as any
);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/_authenticated": {
      id: "/_authenticated";
      path: "";
      fullPath: "";
      preLoaderRoute: typeof AuthenticatedImport;
      parentRoute: typeof rootRoute;
    };
    "/_authentication": {
      id: "/_authentication";
      path: "";
      fullPath: "";
      preLoaderRoute: typeof AuthenticationImport;
      parentRoute: typeof rootRoute;
    };
    "/_authenticated/profile": {
      id: "/_authenticated/profile";
      path: "/profile";
      fullPath: "/profile";
      preLoaderRoute: typeof AuthenticatedProfileImport;
      parentRoute: typeof AuthenticatedImport;
    };
    "/_authentication/log-in": {
      id: "/_authentication/log-in";
      path: "/log-in";
      fullPath: "/log-in";
      preLoaderRoute: typeof AuthenticationLogInImport;
      parentRoute: typeof AuthenticationImport;
    };
    "/_authentication/sign-up": {
      id: "/_authentication/sign-up";
      path: "/sign-up";
      fullPath: "/sign-up";
      preLoaderRoute: typeof AuthenticationSignUpImport;
      parentRoute: typeof AuthenticationImport;
    };
    "/_authenticated/": {
      id: "/_authenticated/";
      path: "/";
      fullPath: "/";
      preLoaderRoute: typeof AuthenticatedIndexImport;
      parentRoute: typeof AuthenticatedImport;
    };
    "/_authentication/(password)/forgot-password": {
      id: "/_authentication/(password)/forgot-password";
      path: "/forgot-password";
      fullPath: "/forgot-password";
      preLoaderRoute: typeof AuthenticationpasswordForgotPasswordImport;
      parentRoute: typeof AuthenticationImport;
    };
    "/_authentication/(password)/reset-password": {
      id: "/_authentication/(password)/reset-password";
      path: "/reset-password";
      fullPath: "/reset-password";
      preLoaderRoute: typeof AuthenticationpasswordResetPasswordImport;
      parentRoute: typeof AuthenticationImport;
    };
    "/_authentication/(password)/verify": {
      id: "/_authentication/(password)/verify";
      path: "/verify";
      fullPath: "/verify";
      preLoaderRoute: typeof AuthenticationpasswordVerifyImport;
      parentRoute: typeof AuthenticationImport;
    };
  }
}

// Create and export the route tree

interface AuthenticatedRouteChildren {
  AuthenticatedProfileRoute: typeof AuthenticatedProfileRoute;
  AuthenticatedIndexRoute: typeof AuthenticatedIndexRoute;
}

const AuthenticatedRouteChildren: AuthenticatedRouteChildren = {
  AuthenticatedProfileRoute: AuthenticatedProfileRoute,
  AuthenticatedIndexRoute: AuthenticatedIndexRoute,
};

const AuthenticatedRouteWithChildren = AuthenticatedRoute._addFileChildren(
  AuthenticatedRouteChildren
);

interface AuthenticationRouteChildren {
  AuthenticationLogInRoute: typeof AuthenticationLogInRoute;
  AuthenticationSignUpRoute: typeof AuthenticationSignUpRoute;
  AuthenticationpasswordForgotPasswordRoute: typeof AuthenticationpasswordForgotPasswordRoute;
  AuthenticationpasswordResetPasswordRoute: typeof AuthenticationpasswordResetPasswordRoute;
  AuthenticationpasswordVerifyRoute: typeof AuthenticationpasswordVerifyRoute;
}

const AuthenticationRouteChildren: AuthenticationRouteChildren = {
  AuthenticationLogInRoute: AuthenticationLogInRoute,
  AuthenticationSignUpRoute: AuthenticationSignUpRoute,
  AuthenticationpasswordForgotPasswordRoute: AuthenticationpasswordForgotPasswordRoute,
  AuthenticationpasswordResetPasswordRoute: AuthenticationpasswordResetPasswordRoute,
  AuthenticationpasswordVerifyRoute: AuthenticationpasswordVerifyRoute,
};

const AuthenticationRouteWithChildren = AuthenticationRoute._addFileChildren(
  AuthenticationRouteChildren
);

export interface FileRoutesByFullPath {
  "": typeof AuthenticationRouteWithChildren;
  "/profile": typeof AuthenticatedProfileRoute;
  "/log-in": typeof AuthenticationLogInRoute;
  "/sign-up": typeof AuthenticationSignUpRoute;
  "/": typeof AuthenticatedIndexRoute;
  "/forgot-password": typeof AuthenticationpasswordForgotPasswordRoute;
  "/reset-password": typeof AuthenticationpasswordResetPasswordRoute;
  "/verify": typeof AuthenticationpasswordVerifyRoute;
}

export interface FileRoutesByTo {
  "": typeof AuthenticationRouteWithChildren;
  "/profile": typeof AuthenticatedProfileRoute;
  "/log-in": typeof AuthenticationLogInRoute;
  "/sign-up": typeof AuthenticationSignUpRoute;
  "/": typeof AuthenticatedIndexRoute;
  "/forgot-password": typeof AuthenticationpasswordForgotPasswordRoute;
  "/reset-password": typeof AuthenticationpasswordResetPasswordRoute;
  "/verify": typeof AuthenticationpasswordVerifyRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  "/_authenticated": typeof AuthenticatedRouteWithChildren;
  "/_authentication": typeof AuthenticationRouteWithChildren;
  "/_authenticated/profile": typeof AuthenticatedProfileRoute;
  "/_authentication/log-in": typeof AuthenticationLogInRoute;
  "/_authentication/sign-up": typeof AuthenticationSignUpRoute;
  "/_authenticated/": typeof AuthenticatedIndexRoute;
  "/_authentication/(password)/forgot-password": typeof AuthenticationpasswordForgotPasswordRoute;
  "/_authentication/(password)/reset-password": typeof AuthenticationpasswordResetPasswordRoute;
  "/_authentication/(password)/verify": typeof AuthenticationpasswordVerifyRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths:
    | ""
    | "/profile"
    | "/log-in"
    | "/sign-up"
    | "/"
    | "/forgot-password"
    | "/reset-password"
    | "/verify";
  fileRoutesByTo: FileRoutesByTo;
  to:
    | ""
    | "/profile"
    | "/log-in"
    | "/sign-up"
    | "/"
    | "/forgot-password"
    | "/reset-password"
    | "/verify";
  id:
    | "__root__"
    | "/_authenticated"
    | "/_authentication"
    | "/_authenticated/profile"
    | "/_authentication/log-in"
    | "/_authentication/sign-up"
    | "/_authenticated/"
    | "/_authentication/(password)/forgot-password"
    | "/_authentication/(password)/reset-password"
    | "/_authentication/(password)/verify";
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  AuthenticatedRoute: typeof AuthenticatedRouteWithChildren;
  AuthenticationRoute: typeof AuthenticationRouteWithChildren;
}

const rootRouteChildren: RootRouteChildren = {
  AuthenticatedRoute: AuthenticatedRouteWithChildren,
  AuthenticationRoute: AuthenticationRouteWithChildren,
};

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_authenticated",
        "/_authentication"
      ]
    },
    "/_authenticated": {
      "filePath": "_authenticated.tsx",
      "children": [
        "/_authenticated/profile",
        "/_authenticated/"
      ]
    },
    "/_authentication": {
      "filePath": "_authentication.tsx",
      "children": [
        "/_authentication/log-in",
        "/_authentication/sign-up",
        "/_authentication/(password)/forgot-password",
        "/_authentication/(password)/reset-password",
        "/_authentication/(password)/verify"
      ]
    },
    "/_authenticated/profile": {
      "filePath": "_authenticated/profile.tsx",
      "parent": "/_authenticated"
    },
    "/_authentication/log-in": {
      "filePath": "_authentication/log-in.tsx",
      "parent": "/_authentication"
    },
    "/_authentication/sign-up": {
      "filePath": "_authentication/sign-up.tsx",
      "parent": "/_authentication"
    },
    "/_authenticated/": {
      "filePath": "_authenticated/index.tsx",
      "parent": "/_authenticated"
    },
    "/_authentication/(password)/forgot-password": {
      "filePath": "_authentication/(password)/forgot-password.tsx",
      "parent": "/_authentication"
    },
    "/_authentication/(password)/reset-password": {
      "filePath": "_authentication/(password)/reset-password.tsx",
      "parent": "/_authentication"
    },
    "/_authentication/(password)/verify": {
      "filePath": "_authentication/(password)/verify.tsx",
      "parent": "/_authentication"
    }
  }
}
ROUTE_MANIFEST_END */
