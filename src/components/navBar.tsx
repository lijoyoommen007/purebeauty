import * as React from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { logout } from '../redux/slice/authSlice';
import Link from 'next/link';
import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
import { LiaBloggerB } from "react-icons/lia";

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
    <>
    <div  className="flex flex-col bg-lightYellow sticky top-0 z-50">
      <div className="flex z-10 gap-5 justify-between items-start self-center px-5 w-full max-md:flex-wrap max-md:max-w-full bg-lightYellow ">
        <Link href={router.pathname=="/shop"?"/":"/shop"}>
        <div className="flex gap-1.5 mt-10 text-sm text-pink-900 whitespace-nowrap">
        {router.pathname=="/shop"?
        <>
        <LiaBloggerB style={{fontSize:"1.2rem"}} />
                  <div>Blog</div>
                  </>:
        <>
        <AiOutlineShopping style={{fontSize:"1.2rem"}}/>

          <div>Shop</div>
          </>
          
          }
        </div>
          </Link>
        <Link href={"/"} className="flex gap-5 self-stretch">
          
          <div className="flex flex-col grow shrink-0 pt-5 pb-5 basis-0 text-black w-fit items-center">
          <img
            loading="lazy"
            src="/navBarLogo.svg"
            className="shrink-0 self-start  w-[15rem]"
          />
          </div>
        </Link>
        <div className="flex gap-2 mt-10 text-sm text-pink-900 whitespace-nowrap">
          <div>{userName}</div>
          {userName ? <p className="cursor-pointer" onClick={handleSignOut}>Logout</p> : <Link className="cursor-pointer" href={"/login"} >Login</Link>}
          <AiOutlineLogout onClick={handleSignOut} style={{fontSize:"1.3rem",cursor:"pointer"}}/>
        </div>
      </div>
      
    </div>
    <div className=" mb-5 justify-center items-start px-16 py-5 w-full text-2xl md:text-4xl text-orange-100 whitespace-nowrap bg-customRed rounded-none max-md:pr-5 max-md:pl-6 max-md:max-w-full font-serif">
        {subNavData}
      </div>
    </>
  );
}

export default NavBar;
