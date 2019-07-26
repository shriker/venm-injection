import { Router, Response, Request, NextFunction } from "express"
import * as userController from "./user"
import passport from "passport"

// API keys and Passport configuration
import * as passportConfig from "../config/passport"

const DefaultRouter = Router()
DefaultRouter.get("/", function(req: Request, res: Response) {
  res.send("hello.")
})
export { DefaultRouter }

const AuthRouter = Router()
AuthRouter.get("/login", userController.getLogin)
AuthRouter.post("/login", userController.postLogin)
AuthRouter.get("/logout", userController.logout)
AuthRouter.get("/forgot", userController.getForgot)
AuthRouter.post("/forgot", userController.postForgot)
AuthRouter.get("/reset/:token", userController.getReset)
AuthRouter.post("/reset/:token", userController.postReset)
AuthRouter.get("/signup", userController.getSignup)
AuthRouter.post("/signup", userController.postSignup)
AuthRouter.get(
  "/account",
  passportConfig.isAuthenticated,
  userController.getAccount
)
AuthRouter.post(
  "/account/profile",
  passportConfig.isAuthenticated,
  userController.postUpdateProfile
)
AuthRouter.post(
  "/account/password",
  passportConfig.isAuthenticated,
  userController.postUpdatePassword
)
AuthRouter.post(
  "/account/delete",
  passportConfig.isAuthenticated,
  userController.postDeleteAccount
)
AuthRouter.get(
  "/account/unlink/:provider",
  passportConfig.isAuthenticated,
  userController.getOauthUnlink
)
export { AuthRouter }

const OpenAPIRouter = Router()
export { OpenAPIRouter }
