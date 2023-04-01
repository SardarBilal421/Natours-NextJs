import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavLayout({ children, isLogin }) {
  const router = useRouter();

  const handleLogout = () => {
    event.preventDefault();
    router.push("/");
  };

  const handleUser = () => {
    event.preventDefault();
    router.push("/dashboard/user");
  };

  return (
    <>
      <nav className=" bg-neutral-700 p-3 flex justify-between">
        <div className="p-3 text-white inline drop-shadow-md">
          <Link href="/">ALL TOURS</Link>
        </div>
        <Image
          src="/img/logo-white.png"
          width="80"
          height="10"
          className="w-auto"
          alt="natours-logo"
        ></Image>
        {isLogin ? (
          <div>
            <button className=" mx-5 px-3 py-2 border-0 rounded-3xl text-white hover:-translate-y-1 hover:drop-shadow-xl">
              <Link href="/auth/login">
                <span className="hover:shadow-md ">LOG IN</span>
              </Link>
            </button>
            <button className=" mx-5 px-3 py-2 border-2 rounded-3xl text-white hover:bg-white hover:text-black hover:-translate-y-1">
              <Link href="/auth/signup">SIGN UP</Link>
            </button>
          </div>
        ) : (
          <div>
            <button
              className=" mx-5 px-3 py-2 border-0 rounded-3xl text-white hover:-translate-y-1 hover:drop-shadow-xl"
              onClick={handleLogout}
            >
              <span className="hover:shadow-md ">LOG OUT</span>
            </button>
            <button className=" mx-5 px-3 py-2  text-white ">
              <span class="material-symbols-outlined pr-2 absolute top-11 right-28 ">
                account_circle
              </span>
              BILAL
            </button>
          </div>
        )}
      </nav>
    </>
  );
}
