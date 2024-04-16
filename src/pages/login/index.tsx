// pages/login.tsx

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/authSlice';
import { LoginCredentials } from "../../constants/loginCredentials";
import Link from 'next/link';

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleLogin = () => {
    if (username && password && username === LoginCredentials.UserName && password === LoginCredentials.Password) {
      // Dispatch login action
      dispatch(login({ username }));
      setUsername('');
      setPassword('');
      setError('');
    } else {
      setError('Please enter a valid username and password');
    }
  };

  return (
    <div style={{ minHeight: "100vh" }} className="pl-16 py-16 bg-customRed max-md:pl-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full ">
          <div className="flex flex-col text-sm font-light text-orange-100 max-md:mt-10">
            <Link href="/">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d56b447825fbc510208930741ee16b918cec306660689d24bd33aa3931109c1?apiKey=087df68079624fb19f353daf9a4716f6&"
                className="max-w-full aspect-[4] w-[199px]"
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

            <button onClick={handleLogin} className="justify-center mb-5 items-center px-16 py-4 mt-10 whitespace-nowrap bg-customRed hover:bg-pink-900 border border-orange-100 border-solid rounded-[32px] max-md:px-5 max-md:mt-10 focus:outline-none outline-none" >
              LOGIN
            </button>
            {error && <div style={{ color: 'red' }}>{error}</div>}

          </div>
        </div>
        <div className="flex flex-col ml-20 w-[65%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0ed975ae99ba3bba9a1aed2681ebccc905c6af0270641b00ac85effd2000bf61?apiKey=087df68079624fb19f353daf9a4716f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0ed975ae99ba3bba9a1aed2681ebccc905c6af0270641b00ac85effd2000bf61?apiKey=087df68079624fb19f353daf9a4716f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0ed975ae99ba3bba9a1aed2681ebccc905c6af0270641b00ac85effd2000bf61?apiKey=087df68079624fb19f353daf9a4716f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0ed975ae99ba3bba9a1aed2681ebccc905c6af0270641b00ac85effd2000bf61?apiKey=087df68079624fb19f353daf9a4716f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0ed975ae99ba3bba9a1aed2681ebccc905c6af0270641b00ac85effd2000bf61?apiKey=087df68079624fb19f353daf9a4716f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0ed975ae99ba3bba9a1aed2681ebccc905c6af0270641b00ac85effd2000bf61?apiKey=087df68079624fb19f353daf9a4716f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0ed975ae99ba3bba9a1aed2681ebccc905c6af0270641b00ac85effd2000bf61?apiKey=087df68079624fb19f353daf9a4716f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0ed975ae99ba3bba9a1aed2681ebccc905c6af0270641b00ac85effd2000bf61?apiKey=087df68079624fb19f353daf9a4716f6&"
            className="grow  max-w-[100%] max-h-[600px] max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
