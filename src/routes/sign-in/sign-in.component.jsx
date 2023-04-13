import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase-utils";

export default function SignIn() {
  useEffect(() => {
    async function getAuth() {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
      console.log(response);
    }
    getAuth();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <h1>SIGN IN PAGE</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with GoogleRedirect
      </button>
    </>
  );
}
