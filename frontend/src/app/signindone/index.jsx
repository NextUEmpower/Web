"use client";

import { Heading, Button, Text, Switch, Input, Img } from "../../components";
import Link from "next/link";
import React from "react";

export default function SignInDPage() {
  return (
    <div className="w-full bg-gray-200_01">
      <div className="mb-[9.13rem] flex flex-col items-center">
        <header className="flex items-start justify-center self-stretch bg-gradient1 py-[1.75rem] sm:py-[1.25rem]">
          <div className="container-xs mb-[17.50rem] flex justify-center md:px-[1.25rem]">
            <div className="flex w-full items-center justify-between gap-[1.25rem]">
              <Img
                src="img_header_logo.png"
                width={138}
                height={46}
                alt="Header Logo"
                className="h-[2.88rem] w-[8.63rem] object-contain"
              />
              <Link href="/landingpaged">
                <Button
                  color="amber_A400"
                  size="xl"
                  variant="outline"
                  shape="round"
                  className="min-w-[4.25rem] rounded-md !border-[1.3px] px-[0.75rem]"
                >
                  Back
                </Button>
              </Link>
            </div>
          </div>
        </header>
        <div className="container-xs relative mt-[-9.63rem] flex flex-col items-center px-[3.50rem] md:px-[1.25rem]">
        <div className="flex w-[28%] flex-col items-center justify-center gap-[2.13rem] rounded-[14px] bg-black_amp_white-white px-[1.13rem] py-[3.88rem] shadow-xs md:w-full md:py-[1.25rem]">
            <Link href="#">
              <Heading size="text8xl" as="h1" className="!font-inter text-[1.25rem] font-medium !text-black-900_01">
                Sign In
              </Heading>
            </Link>
            <div className="flex flex-col items-center gap-[2.13rem] self-stretch">
              <div className="flex flex-col items-start gap-[0.38rem] self-stretch">
                <Text size="textlg" as="p" className="text-[0.69rem] font-normal">
                  Email
                </Text>
                <Input
                  shape="round"
                  type="email"
                  name="Frame 249"
                  placeholder={`Your email`}
                  className="self-stretch rounded !border px-[0.63rem]"
                />
              </div>
              <div className="flex flex-col items-start gap-[0.38rem] self-stretch">
                <Text size="textlg" as="p" className="text-[0.69rem] font-normal">
                  Password
                </Text>
                <Input
                  shape="round"
                  type="password"
                  name="Frame 249"
                  placeholder={`Your password`}
                  className="self-stretch rounded !border px-[0.63rem]"
                />
              </div>
              <div className="flex gap-[0.50rem]">
                <Switch value={true} className="border border-solid border-amber-500" />
                <Text size="texts" as="p" className="text-[0.56rem] font-normal !text-gray-800">
                  Remember me{" "}
                </Text>
              </div>
              <Link href="/dashboardone">
                <Button
                  color="amber_500"
                  size="3xl"
                  shape="round"
                  className="self-stretch rounded px-[2.13rem] font-lexenddeca sm:px-[1.25rem]"
                >
                  Sign In
                </Button>
              </Link>
              <Heading size="headingmd" as="h2" className="text-[0.69rem] font-bold !text-gray-500">
                <span className="font-normal text-gray-500">Don&#39;t have an account?</span>
                <span className="text-gray-500">&nbsp;</span>
                <Link href="/signupd">
                  <span className="text-amber-500">Sign up</span>
                </Link>
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
