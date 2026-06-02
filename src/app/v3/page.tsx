import { redirect } from "next/navigation";

// A V3 é a versão atual e mora na raiz. Mantemos /v3 como atalho.
export default function V3Redirect() {
  redirect("/");
}
