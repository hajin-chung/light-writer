// oauth flow
// https://developers.google.com/identity/protocols/oauth2/web-server?hl=ko#httprest
// 1. redirect client to accounts.google.com/o/oauth2/v2/auth?redirect_uri=[redirect_uri]
// 2. handle callback from [redirect_uri]: exchange to access token https://oauth2.googleapis.com/token

import type { APIRoute } from "astro";
import jwt_decode from "jwt-decode";

type UserInfo = {
  id: string;
  name: string;
  email: string;
  picture?: string;
};

export const get: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  if (!code) {
    return new Response(JSON.stringify({ error: true, message: "no code" }));
  }

  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    body: JSON.stringify({
      code,
      client_id: import.meta.env.PUBLIC_GOOGLE_CLIENT_ID,
      client_secret: import.meta.env.GOOGLE_CLIENT_SECRET,
      grant_type: "authorization_code",
      redirect_uri: "http://localhost:3000/api/auth/callback/google",
      // TODO: better redirect_uri
    }),
  });

  const tokenObj = await tokenRes.json();
  const idToken: string = tokenObj.id_token;

  if (!idToken) {
    return new Response(JSON.stringify({ error: true, message: "no idToken" }));
  }

  const idObj: any = jwt_decode(idToken);
  const user: UserInfo = {
    id: idObj.sub,
    name: idObj.name,
    email: idObj.email,
    picture: idObj.picture,
  };

  // TODO: validate user type

  // check if new user (SELECT id FROM User WHERE id=user.id)
  // if new user insert user
  // create new session token
  // set cookie
  // redirect to main page
  // TODO: better redirection

  return new Response(JSON.stringify({ message: "hi", code, tokenObj, idObj }));
};
