import React from 'react'
import SignUp from '../../components/sign-up/sign-up.component';
import SignIn from '../../components/sign-in/sign-in.component';
import { auth,signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import {AuthenticationContainer} from './authentication.styles.jsx'
// import { signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";
// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';


//Uncomment to get Authentication with Redirect.

const Authentication = () => {

  // useEffect(() => {
  //   async function getUserFromRedirect() {
  //     const responce = await getRedirectResult(auth);

  //     if(responce) {
  //       const userDocRef = await createUserDocumentFromAuth(responce.user);
  //     }
  //   }

  //   getUserFromRedirect();
  // },[])

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  } 

  return (
    <AuthenticationContainer>
      {/* <button onClick={logGoogleUser}>Sign In With Google</button> */}
      {/* <button onClick={signInWithGoogleRedirect}>Sign In With Google Redirect</button> */}
      <SignIn />
      <SignUp />
    </AuthenticationContainer>
  )
}

export default Authentication;