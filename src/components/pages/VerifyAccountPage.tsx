// modules
import { redirect } from "next/navigation"
// lib
import { verifyAccount } from "@/lib/actions/auth.actions"
// components
import Loader from "@/components/shared/Loader"

export default async function VerifyAccountPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const { userId, secret } = searchParams

  if (!userId || !secret) {
    return <p>Invalid verification link.</p>
  }

  const result = await verifyAccount(userId as string, secret as string)

  if (result.success) {
    // After verification redirect on login page
    redirect("/sign-in")
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen grow">
      <Loader />
    </div>
  )
}
