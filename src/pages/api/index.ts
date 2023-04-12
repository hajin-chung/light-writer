import type { APIRoute } from "astro";

export const get: APIRoute = ({ params }) => {
  // const id = params.id;

  return new Response(
    JSON.stringify({ message: "hi you have reached the api", params }),
    {
      status: 200,
    }
  );
};
