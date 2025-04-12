"use client";

import { Button, Input, Text, Img } from "../../components";
import React from "react";

export default function ForgotPasswordPage() {
  return (
    <div className="w-full bg-gray-100">
      <div className="mb-[8.63rem] flex flex-col items-center">
        <header className="flex items-start justify-center self-stretch bg-gradient1 py-[1.75rem] sm:py-[1.25rem]">
          <div className="container-xs mb-[17.50rem] flex justify-center md:px-[1.25rem]">
            <div className="flex w-full items-center justify-between gap-[1.25rem]">
              <Img
                src="img_header_logo.svg"
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
          <div className="flex w-[28%] flex-col gap-[1.38rem] rounded-[14px] bg-black_amp_white-white px-[1.13rem] py-[7.50rem] shadow-xs md:w-full md:py-[1.25rem]">
            <div className="flex flex-col gap-[1.00rem]">
              <div className="flex flex-col items-start gap-[0.38rem]">
                <Text size="textlg" as="p" className="text-[0.69rem] font-normal">
                  Email ID
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
                  Old Password
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
                  New Password
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
            <Button
              color="amber_500"
              size="3xl"
              shape="round"
              className="mb-[0.50rem] self-stretch rounded px-[2.13rem] font-lexenddeca sm:px-[1.25rem]"
            >
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
