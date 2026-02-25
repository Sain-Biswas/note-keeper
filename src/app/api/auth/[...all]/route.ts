import { toNextJsHandler } from "better-auth/next-js";
import { auth } from "~/server/authentication/server.auth";

export const { DELETE, GET, PATCH, POST, PUT } = toNextJsHandler(auth);
