import { useSession, signIn, signOut } from "next-auth/react"

export default function Signin() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        {/* Signed in as {session.user.email} <br /> */}
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
        <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}