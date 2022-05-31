import React from 'react'
import { auth, provider } from '../firebase-config'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function SignIn({ setIsAuthenticated }) {
  let navigate = useNavigate()

  const signInWithGoogle = async () => {
    let signIn = await signInWithPopup(auth, provider)
    localStorage.setItem("signIn", signIn?.user?.email)
    setIsAuthenticated(true)
    navigate('/')
  }

  return (
    <div className='loginPage'>
      <p> Sign In with Google to Continue..</p>
      <button className='login-with-google-btn' onClick={() => signInWithGoogle()}> Sign In</button>
    </div>
  )
}

export default SignIn