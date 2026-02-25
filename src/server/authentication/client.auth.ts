import { createAuthClient } from "better-auth/react";
import { envClient } from "~/constant/env-client";

export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: envClient.NEXT_PUBLIC_BASE_URL
});
