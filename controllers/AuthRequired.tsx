import { useSession } from "next-auth/react";
import React from "react";

interface AuthRequiredProps {
  children: React.ReactNode;
}

export default function AuthRequired({ children }: AuthRequiredProps) {
  const {} = useSession({
    required: true,
  });
  return children;
}
