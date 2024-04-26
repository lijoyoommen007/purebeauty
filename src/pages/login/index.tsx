// pages/login.tsx

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/action/authAction'; // Assuming login is an action creator
import Link from 'next/link';

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  const dispatch:any = useDispatch();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      if (username && password) {
        dispatch(login(username, password)); // Dispatch login action with username and password
        setUsername('');
        setPassword('');
        setError('');
      } else {
        setLoading(false);
        setError('Invalid username or password.');
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError((error as Error).message || 'An error occurred.'); // Handle login failure with a more informative message
    }
  };

  return (
    <div style={{ minHeight: "100vh" }} className="pl-16 py-16 bg-customRed max-md:pl-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full mt-16 ">
          <div className="flex flex-col text-sm font-light text-orange-100 max-md:mt-10">
            <Link href="/">
              <img
                loading="lazy"
                src="/loginLogo.svg"
                className="max-w-full aspect-[4] w-[199px]"
                alt="Login Logo" // Add alt text for accessibility
              />
            </Link>
            <div className="mt-20 text-3xl leading-10 max-md:mt-10">Login</div>
            <input
              style={{ height: "3rem" }}
              className="mt-10 max-md:mt-10 bg-transparent focus:outline-none border-b-2 border-white-500 "
              placeholder="USERNAME"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              style={{ height: "3rem" }}
              className="mt-10 max-md:mt-10 bg-transparent focus:outline-none border-b-2 border-white-500 "
              placeholder="PASSWORD"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              disabled={loading}
              onClick={handleLogin}
              className="justify-center mb-5 items-center px-16 py-4 mt-10 whitespace-nowrap bg-customRed hover:bg-pink-900 border border-orange-100 border-solid rounded-[32px] max-md:px-5 max-md:mt-10 focus:outline-none outline-none"
            >
              {loading ? "LOADING..." : "LOGIN"}
            </button>
            {error && <div className="text-orange-100" style={{ textAlign: 'center' }}>{error}</div>}
          </div>
        </div>
        <div className="flex flex-col ml-96 w-[65%] max-md:ml-0 max-md:w-full ">
          <img
            loading="lazy"
            src="/shutterstock_1780103120 1.png"
            className="grow  max-w-[800px] max-h-[600px] max-md:max-w-full rounded-r-none rounded-3xl"
            alt="Login Image" // Add alt text for accessibility
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
