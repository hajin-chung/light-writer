import type { Component } from "solid-js";
import { Button } from "./Button";

export const GoogleLoginButton: Component = () => {
  const oauthEndpoint = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  oauthEndpoint.searchParams.append(
    "client_id",
    import.meta.env.PUBLIC_GOOGLE_CLIENT_ID
  );
  // TODO: better redirect_uri
  oauthEndpoint.searchParams.append(
    "redirect_uri",
    "http://localhost:3000/api/auth/callback/google"
  );
  oauthEndpoint.searchParams.append("response_type", "code");
  oauthEndpoint.searchParams.append("scope", "openid profile email");

  const clickHandler = () => {
    if (window) {
      window.location.href = oauthEndpoint.href;
      console.log(oauthEndpoint.href);
    }
  };

  return <Button onClick={clickHandler}>Google</Button>;
};
