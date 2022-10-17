import Link from "next/link";
import Image from "next/image";

import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Nav() {
  const [user, loading] = useAuthState(auth);
  console.log(user);
  return (
    <nav className="flex justify-between items-center py-10">
      <Link href="/">
        <button className="text-lg font-medium">Creative minds</button>
      </Link>
      <ul className="flex items-center gap-10">
        {!user && (
          <Link href={`/auth/login`}>
            <a className="py-2 px-4 trst-sm bg-cyan-500 text-white rounded-lg font-medium ml-8">
              join now
            </a>
          </Link>
        )}
        {user && (
          <div className="flex items-center gap-6">
            <Link href="/post">
              <button className="font-medium bg-cyan-500 text-white py-2 px-4 rounded-mg textx-sm">
                POST
              </button>
            </Link>
            <Link href="/dashboard">
              <picture>
                <source srcSet={user.photoURL} type="image/webp" />
                <img src={user.photoURL} alt="Landscape picture" className="w-12 cursor-pointer"/>
              </picture>
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
}
