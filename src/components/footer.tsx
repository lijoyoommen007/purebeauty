import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa6";

function Footer() {
  return (
    <div className="flex flex-col px-14 py-10  w-full bg-customRed max-md:px-5  max-md:max-w-full">
        <div className="flex gap-5 justify-between items-start w-full max-md:flex-wrap max-md:pr-5 max-md:mr-2 max-md:max-w-full">
          <img
            loading="lazy"
            src="/loginLogo.svg"
            className="shrink-0 self-start max-w-full aspect-[4] w-[227px]"
          />
          <div className="flex gap-5 justify-between self-end mt-6">
            <div className="flex flex-col self-start text-orange-100">
              <div className="text-sm leading-7 uppercase">ADDRESS</div>
              <div className="mt-6 text-xs font-light leading-6">
                13 Brinkley Circuit Palmerston
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-sm leading-7 text-orange-100 uppercase">
                SOCIAL MEDIA
              </div>
              <div className="flex gap-2 mt-6 max-md:pr-5 ml-3">
              <AiOutlineInstagram style={{color:"#FFE0B2",fontSize:"1.5rem"}} />
              <FaFacebookF style={{color:"#FFE0B2",fontSize:"1.3rem",marginLeft:"1rem"}}  />

              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 self-start mt-28 text-sm leading-7 text-orange-100 uppercase max-md:mt-10">
          <div className="flex-auto my-auto font-mono">
            © 2022 PURE BEAUTY. POWERED BY
          </div>
          <img
            loading="lazy"
            src="/planetmedia_text.svg"
            className="shrink-0 aspect-[5.88] w-[88px]"
          />
        </div>
        <div style={{marginTop:"-1.5rem"}} className="self-end text-sm leading-7 text-orange-100 uppercase max-md:mr-2 font-mono">
          ALL RIGHTS RESERVED.
        </div>
      </div>
  );
}

export default Footer
