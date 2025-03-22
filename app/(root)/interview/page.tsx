import React from "react";
import Agent from "@/components/agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

export default async function Page() {
  const user = await getCurrentUser();
  return (
    <>
      <h3>Interview generation</h3>

      <Agent userName={user?.name as string} userId={user?.id} type="generate" />
    </>
  );
}
