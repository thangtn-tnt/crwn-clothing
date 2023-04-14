import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase-utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

export default function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <h1>SIGN IN PAGE</h1>
      <SignUpForm />
    </>
  );
}
