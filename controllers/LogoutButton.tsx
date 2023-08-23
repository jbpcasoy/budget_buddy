import { signOut } from "next-auth/react";

export default function LogoutButton() {
  function handleLogout() {
    return signOut();
  }

  return (
    <button
      onClick={handleLogout}
      className='bg-slate-200 hover:bg-slate-300 active:bg-slate-200 py-1 px-2 rounded'
    >
      Logout
    </button>
  );
}
