import * as React from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { logout } from '../redux/authSlice';
import Link from 'next/link';

interface NavBarProps {
  subNavData: string;
}

function NavBar({ subNavData }: NavBarProps) {
  const [userName, setUserName] = React.useState<string | null>(null);
  React.useEffect(() => {
    const username = localStorage.getItem('username');
    if (username) {
      setUserName(username);
    } 
  }, []);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleSignOut = () => {
    dispatch(logout());
    // Redirect to login page after logout 
    router.push('/login');
  }

  return (
    <div className="flex flex-col bg-lightYellow">
      <div className="flex z-10 gap-5 justify-between items-start self-center px-5 w-full max-md:flex-wrap max-md:max-w-full bg-lightYellow">
        <Link href="/shop">
        <div className="flex gap-1.5 mt-10 text-sm text-pink-900 whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7c51f03fbde963ebce257fdd139132cedbcd9c7385b6e3662d60a80d28e54a5?apiKey=087df68079624fb19f353daf9a4716f6&"
            className="shrink-0 aspect-square w-[18px]"
          />
          <div>Shop</div>
        </div>
          </Link>
        <Link href={"/"} className="flex gap-5 self-stretch">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f3b539032f986816323eaaed34fd569e58f66ca2b8a3fd975e4d407d3ea6320?apiKey=087df68079624fb19f353daf9a4716f6&"
            className="shrink-0 self-start mt-6 aspect-[0.63] w-[31px]"
          />
          <div className="flex flex-col grow shrink-0 pt-7 pb-7 basis-0 text-black w-fit items-center">
            <p className="uppercase font-serif text-2xl">pure beauty</p>
            <p className="uppercase font-mono text-textone">skin care</p>
          </div>
        </Link>
        <div className="flex gap-2 mt-10 text-sm text-pink-900 whitespace-nowrap">
          <div>{userName}</div>
          {userName ? <p className="cursor-pointer" onClick={handleSignOut}>Logout</p> : <Link className="cursor-pointer" href={"/login"} >Login</Link>}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd3d7aed02aa5fda5c1cbbd905625ce4afdd1170d9c9974fe4257f7d431f1999?apiKey=087df68079624fb19f353daf9a4716f6&"
            className="shrink-0 aspect-square w-[18px] cursor-pointer"
          />
        </div>
      </div>
      <div className="mb-5 justify-center items-start px-16 py-5 w-full text-4xl text-orange-100 whitespace-nowrap bg-customRed rounded-none max-md:pr-5 max-md:pl-6 max-md:max-w-full font-serif">
        {subNavData}
      </div>
    </div>
  );
}

export default NavBar;
