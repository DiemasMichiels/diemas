import { signIn, signOut, useSession } from 'next-auth/react'

const LoginPage = () => {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }

  return (
    <>
      Not signed in <br />
      <button
        onClick={() =>
          signIn('github', {
            callbackUrl: `${window.location.origin}/api/auth/callback`,
          })
        }
      >
        Sign in with GitHub
      </button>
    </>
  )
}

export default LoginPage
