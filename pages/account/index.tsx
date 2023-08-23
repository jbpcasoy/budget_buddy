import AccountForm from "@/components/AccountForm";
import LogoutButton from "@/controllers/LogoutButton";
import { useSession } from "next-auth/react";

export default function Account() {
  const { data: session } = useSession({ required: true });
  return (
    <div>
      <h2>Account</h2>
      <AccountForm />
      <LogoutButton />
    </div>
  );
}
