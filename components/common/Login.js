import { useSession, signIn, signOut } from "next-auth/react"
import Button from '@mui/material/Button';

export default function Login() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        {/* Signed in as {session.user.email} <br /> */}
        <Button className="white-btn" onClick={() => signOut({ callbackUrl: '/pt/dashboard' })}>Sign out</Button>
      </>
    )
  }
  return (
    <>
        <Button className="white-btn" onClick={() => signIn()}>Sign in</Button>
    </>
  )
}