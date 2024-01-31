import type { Session, User } from "next-auth";
import type { JTW } from "@auth/core/jwt";

declare module "next-auth/jtw" {
  interface JWT {
    id: string | null;
    username?: string | null;
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {
      username?: string | null;
    };
  }

  interface User {
    username?: string | null;
  }
}


