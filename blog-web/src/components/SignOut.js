import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { auth } from '../firebase-config'

function SignOut({ setIsAuthenticated }) {

  const navigate = useNavigate()

  const signOutWithGoogle = async () => {
    let signOut = signOutWithGoogle(auth)
    localStorage.clear()
    setIsAuthenticated(false)
    navigate("/sign-in")
  }

  return (
    <Link to="/" onClick={() => signOutWithGoogle()}>Sign Out</Link>
  )
}

export default SignOut