import AccountForm from "@/components/AccountForm";
import LogoutButton from "@/controllers/LogoutButton";
import ProfileService from "@/services/ProfileService";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Account() {
  const { data: session, status } = useSession({ required: true });
  const [state, setState] = useState({
    profile: undefined,
  });

  useEffect(() => {
    if (status !== "authenticated" || !session.user?.id) {
      return;
    }
    handleGetProfile(session.user?.id);
  }, [session, status]);

  function handleGetProfile(id: string) {
    ProfileService.readProfile(id).then((res) => {
      setState((prev) => {
        return { ...prev, profile: res.data.data };
      });
    });
  }

  return (
    <div>
      <h2>Account</h2>
      <AccountForm profile={state.profile} />
      <LogoutButton />
    </div>
  );
}
