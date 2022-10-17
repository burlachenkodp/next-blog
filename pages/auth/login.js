import { FcGoogle } from "react-icons/fc";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

export default function Login() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  //signin with google
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("login succes>>>", result);
      route.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user) {
      route.push("/");
    } else {
        console.log('login');
    }
  }, [user]);

  return (
    <div className="shadow-xl mt-16 p-10 text-gray-700 rounded-lg w-1/2	">
      <h2 className="text-2xl font-medium">JOIN TODAY</h2>
      <div className="py-4">
        <h3 className="py-4">sign in</h3>
        <button
          onClick={GoogleLogin}
          className="text-white bg-gray-700 w-full font-medium rounded-lg flex align-middle p-4 gap-2"
        >
          <FcGoogle className="text-2xl" />
          SIGN IN WITH GOOGLE
        </button>
      </div>
    </div>
  );
}