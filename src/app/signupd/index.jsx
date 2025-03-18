"use client";

import { Heading, Button, Text, Switch, Input, Img } from "../../components";
import React from "react";

export default function SignUpDPage() {
  return (
    <div className="w-full bg-gray-100">
      <div className="mb-[8.63rem] flex flex-col items-center">
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
              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                <Button
                  color="amber_A400"
                  size="xl"
                  variant="outline"
                  shape="round"
                  className="min-w-[4.25rem] rounded-md !border-[1.3px] px-[0.75rem]"
                >
                  Back
                </Button>
              </a>
            </div>
          </div>
        </header>
        <div className="container-xs relative mt-[-9.25rem] flex flex-col items-center px-[3.50rem] md:px-[1.25rem]">
          <div className="w-[28%] rounded-[14px] bg-black_amp_white-white py-[1.50rem] shadow-xs md:w-full sm:py-[1.25rem]">
            <div className="flex flex-col items-center justify-center px-[1.13rem]">
              <div className="mx-[3.38rem] flex flex-col items-center self-stretch md:mx-0">
                <Heading size="headingxl" as="h1" className="text-[1.13rem] font-bold !text-gray-800">
                  Register with
                </Heading>
                <div className="mt-[0.38rem] flex justify-center gap-[0.63rem] self-stretch">
                  <Button
                    color="indigo_50"
                    size="7xl"
                    variant="outline"
                    className="w-[3.38rem] rounded-[14px] !border px-[1.00rem]"
                  >
                    <Img src="img_facebook.svg" width={22} height={22} />
                  </Button>
                  <Button
                    color="indigo_50"
                    size="7xl"
                    variant="outline"
                    className="w-[3.38rem] rounded-[14px] !border px-[1.00rem]"
                  >
                    <Img src="img_ionicon_l_logo_apple.svg" width={22} height={22} />
                  </Button>
                  <Button
                    color="indigo_50"
                    size="7xl"
                    variant="outline"
                    className="w-[3.38rem] rounded-[14px] !border px-[1.13rem]"
                  >
                    <Img src="img_contrast_gray_gray_700.svg" width={16} height={16} />
                  </Button>
                </div>
                <Heading size="headingxl" as="h2" className="mt-[0.88rem] text-[1.13rem] font-bold !text-gray-500">
                  or
                </Heading>
              </div>
              <div className="flex flex-col gap-[1.00rem] self-stretch">
                <div className="flex flex-col items-start gap-[0.38rem]">
                  <Text size="textlg" as="p" className="text-[0.69rem] font-normal">
                    Name
                  </Text>
                  <Input
                    shape="round"
                    type="text"
                    name="Frame 249"
                    placeholder={`your Full name`}
                    className="self-stretch rounded !border px-[0.63rem]"
                  />
                </div>
                <div className="flex flex-col items-start gap-[0.38rem]">
                  <Text size="textlg" as="p" className="text-[0.69rem] font-normal">
                    Email Id
                  </Text>
                  <Input
                    shape="round"
                    type="email"
                    name="Frame 249"
                    placeholder={`Enter your email id`}
                    className="self-stretch rounded !border px-[0.63rem]"
                  />
                </div>
                <div className="flex flex-col items-start gap-[0.38rem]">
                  <Text size="textlg" as="p" className="text-[0.69rem] font-normal">
                    Password
                  </Text>
                  <Input
                    shape="round"
                    type="password"
                    name="Frame 249"
                    placeholder={`Enter your Password`}
                    className="self-stretch rounded !border px-[0.63rem]"
                  />
                </div>
              </div>
              <div className="mt-[0.75rem] flex gap-[0.50rem]">
                <Switch value={true} className="border border-solid border-amber-500" />
                <Text size="texts" as="p" className="text-[0.56rem] font-normal !text-gray-800">
                  Remember me{" "}
                </Text>
              </div>
              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                <Button
                  color="amber_500"
                  size="3xl"
                  shape="round"
                  className="mt-[1.38rem] self-stretch rounded px-[2.13rem] font-lexenddeca sm:px-[1.25rem]"
                >
                  Sign Up
                </Button>
              </a>
              <Heading size="headinglg" as="h3" className="mt-[1.38rem] text-[0.88rem] font-bold !text-gray-500">
                <span className="font-normal text-gray-500">Already have an account?</span>
                <span className="text-gray-500">&nbsp;</span>
                <span className="text-amber-500">Sign in</span>
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
