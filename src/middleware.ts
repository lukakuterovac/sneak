import { NextRequest } from "next/server";
import { updateSession } from "./lib";
import { useRouter } from "next/navigation";

export async function middleware(req: NextRequest) {
  return await updateSession(req);
}

export const protectedRoutes = ["/", "/dashboard", "/profile"];

export const redirectToLogin = (router: any) => {
  if (!router.isReady) return;
  router.push("/login");
};
