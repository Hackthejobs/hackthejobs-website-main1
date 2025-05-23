"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const [logo1, setLogo1] = useState(false);
  const [logo2, setLogo2] = useState(false);
  const [logo3, setLogo3] = useState(false);

  const handleLogoEvent1 = () => {
    setLogo1((prev) => !prev);
  };
  const handleLogoEvent2 = () => {
    setLogo2((prev) => !prev);
  };
  const handleLogoEvent3 = () => {
    setLogo3((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#EFF6FF] xm:bg-[#fff]">
      <div>
        <div className="bg-[#fff] border-b-[1px] xm:border-b-[0px] border-b-[#1453FF]">
          <Link href="/">
            <Image
              src="/hack-logo.png"
              alt="hackthejobs logo"
              width={180}
              height={52}
              className="cursor-pointer mx-auto xm:m-[0px] py-[20px] xm:pb-[0px] xm:px-4"
            />
          </Link>
        </div>
        <section className="font-onest py-[65px] xm:py-[0px]">
          <div className="w-[616px] md:w-[90%] xm:w-[100%] bg-[#fff] p-[32px] sm:p-[16px] rounded-[8px] mx-auto">
            <h1 className="text-[32px] font-medium leading-[41.6px] text-[#2A2A2A] mb-2 xm:mt-6 text-center">
              Log In
            </h1>
            <p className="font-normal text-[16px] leading-[20.8px] text-[#828282] mb-[32px] text-center">
              Welcome back, select your account type
            </p>
            <div>
              {/* <a href="https://dashboard.hackthejobs.com/auth/login" target="_blank"> */}
              <a
                href="https://dashboard.hackthejobs.com/auth/login"
                target="_blank"
              >
                <div
                  style={{
                    background: logo1 ? "#1453FF" : "",
                    color: logo1 ? "#fff" : "",
                  }}
                  className="bg-[#fff] px-[48px] py-[29px] mb-[28px] rounded-[8px] border-[1px]  border-[#EAEAEA] flex justify-center items-center gap-[12px]"
                  onMouseOver={handleLogoEvent1}
                  onMouseOut={handleLogoEvent1}
                >
                  {logo1 ? (
                    <Image
                      src="/hover-fellow.png"
                      width={20}
                      height={20}
                      alt="fellow icon"
                    />
                  ) : (
                    <Image
                      src="/fellow.png"
                      width={20}
                      height={20}
                      alt="fellow icon"
                    />
                  )}
                  <p
                    style={{ color: logo1 ? "#fff" : "" }}
                    className="font-medium text-[16px] text-[#2A2A2A] leading-[24px] tracking-[3%]"
                  >
                    Fellow
                  </p>
                </div>
              </a>
              <a href="https://spm.hackthejobs.com/auth/login" target="_blank">
                <div
                  style={{
                    background: logo2 ? "#1453FF" : "",
                    color: logo2 ? "#fff" : "",
                  }}
                  className="bg-[#fff] px-[48px] py-[29px] mb-[28px] rounded-[8px] border-[1px] border-[#EAEAEA] flex justify-center items-center gap-[12px]"
                  onMouseOver={handleLogoEvent2}
                  onMouseOut={handleLogoEvent2}
                >
                  {logo2 ? (
                    <Image
                      src="/hover-spm.png"
                      width={20}
                      height={20}
                      alt="spm icon"
                    />
                  ) : (
                    <Image
                      src="/spm.png"
                      width={20}
                      height={20}
                      alt="spm icon"
                    />
                  )}
                  <p
                    style={{ color: logo2 ? "#fff" : "" }}
                    className="font-medium text-[16px] text-[#2A2A2A] leading-[24px] tracking-[3%]"
                  >
                    Product Manager
                  </p>
                </div>
              </a>
              <a
                href="https://mentor.hackthejobs.com/auth/login"
                target="_blank"
              >
                <div
                  style={{
                    background: logo3 ? "#1453FF" : "",
                    color: logo3 ? "#fff" : "",
                  }}
                  className="bg-[#fff] px-[48px] py-[29px] rounded-[8px] border-[1px] border-[#EAEAEA] flex justify-center items-center gap-[12px]"
                  onMouseOver={handleLogoEvent3}
                  onMouseOut={handleLogoEvent3}
                >
                  {logo3 ? (
                    <Image
                      src="/hover-mentor-icon.png"
                      width={20}
                      height={20}
                      alt="mentor icon"
                    />
                  ) : (
                    <Image
                      src="/mentor-icon.png"
                      width={20}
                      height={20}
                      alt="mentor icon"
                    />
                  )}
                  <p
                    style={{ color: logo3 ? "#fff" : "" }}
                    className="font-medium text-[16px] text-[#2A2A2A] leading-[24px] tracking-[3%]"
                  >
                    Mentor
                  </p>
                </div>
              </a>
            </div>
            <p className="font-normal leading-[20.8px] text-4 text-[#828282] text-center mt-[32px] ">
              Don't have an account?{" "}
              <Link href="/signup" className="text-[#1453FF] cursor-pointer">
                Sign Up
              </Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
