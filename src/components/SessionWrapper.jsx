"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export default function SessionWrapper({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
};
