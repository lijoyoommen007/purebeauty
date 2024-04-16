import React from "react";

function Footer() {
  return (
    <div className="flex flex-col px-14 py-10  w-full bg-customRed max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-start w-full max-md:flex-wrap max-md:pr-5 max-md:mr-2 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/70d0ca3d176ac8cdd1ffd09f16ecf11c0d2519e5fae5540f956f5922c62fcdd1?apiKey=087df68079624fb19f353daf9a4716f6&"
            className="shrink-0 self-start max-w-full aspect-[4] w-[227px]"
          />
          <div className="flex gap-5 justify-between self-end mt-6">
            <div className="flex flex-col self-start text-orange-100">
              <div className="text-sm leading-7 uppercase">ADDRESS</div>
              <div className="mt-8 text-xs font-light leading-6">
                13 Brinkley Circuit Palmerston
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-sm leading-7 text-orange-100 uppercase">
                SOCIAL MEDIA
              </div>
              <div className="flex gap-2 mt-6 max-md:pr-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d7ad2fbe65f547a92e901ebbda33f20574bb32873cd3687495727dc4dbdd06b?apiKey=087df68079624fb19f353daf9a4716f6&"
                  className="shrink-0 w-6 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ea8ff83839e76689a71170cb4f41e66b04f46252f4b8fe7a7edb68a22a8dd11?apiKey=087df68079624fb19f353daf9a4716f6&"
                  className="shrink-0 w-6 aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 self-start mt-28 text-sm leading-7 text-orange-100 uppercase max-md:mt-10">
          <div className="flex-auto my-auto">
            © 2022 PURE BEAUTY. POWERED BY
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc1a4974d184b4bcf91185e2918c2759800bf5efb3ee1c1cc2a44eed58aaa411?apiKey=087df68079624fb19f353daf9a4716f6&"
            className="shrink-0 aspect-[5.88] w-[88px]"
          />
        </div>
        <div className="self-end mt-1.5 mb-4 text-sm leading-7 text-orange-100 uppercase max-md:mr-2">
          ALL RIGHTS RESERVED.
        </div>
      </div>
  );
}

export default Footer
