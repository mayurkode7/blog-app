import React from 'react'
import { auth, provider } from '../firebase-config'
import { signInWithPopup } from 'firebase/auth'

function SignIn() {


  const signInWithGoogle = async () => {
    let signIn = await signInWithPopup(auth, provider)
    localStorage.setItem("signIn", signIn?.user?.email)
  }

  return (
    <div className='loginPage'>
      <p> Sign In with Google to Continue..</p>
      <button className='login-with-google-btn' onClick={() => signInWithGoogle()}> Sign In</button>
    </div>
  )
}

export default SignIn