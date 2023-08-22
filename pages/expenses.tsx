import AuthRequired from "@/controllers/AuthRequired";

export default function Expenses() {
  return (
    <AuthRequired>
      <h2>Expenses</h2>
    </AuthRequired>
  );
}
