import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

export default function Dashboard() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);

  const getData = async () => {
    if (loading) return;
    if (!user) return route.push("/auth/login");
  };

  useEffect(() => {
    getData();
  }, [user, loading]);

  return (
    <div>
      <h1>YOUR POST</h1>
      <div>posts</div>
      <button
        onClick={() => auth.signOut()}
        className="py-2 px-4 trst-sm bg-cyan-500 text-white rounded-lg font-medium ml-8"
      >
        SIGN OUT
      </button>
    </div>
  );
}
