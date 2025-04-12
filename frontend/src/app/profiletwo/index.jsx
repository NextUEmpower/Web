"use client";

import { Button, Input, Text, SelectBox, Img, Heading } from "../../components";
import React from "react";
import Link from "next/link";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function ProfileTwoPage() {
  return (
    <div className="relative h-[60.25rem] w-full bg-gray-200_01 md:h-auto">
      <div className="flex flex-1 flex-col items-center">
        <div className="flex flex-col items-center self-stretch bg-gradient1 py-[2.63rem] md:py-[1.25rem]">
          <div className="container-xs mb-[2.88rem] flex flex-col items-start md:px-[1.25rem]">
            <div className="flex self-stretch">
              <Img
                src="img_header_logo.svg"
                width={138}
                height={46}
                alt="Images 2"
                className="h-[2.88rem] w-[10%] object-contain"
              />
            </div>
            <div className="mt-[4.50rem] flex flex-col gap-[0.25rem] self-stretch">
              <div className="flex flex-wrap gap-[0.56rem]">
                <Heading
                  size="h1"
                  as="h1"
                  className="text-[1.94rem] font-semibold !text-black_amp_white-white md:text-[1.81rem] sm:text-[1.69rem]"
                >
                  Hi{" "}
                </Heading>
                <Heading
                  size="h1"
                  as="h2"
                  className="text-[1.94rem] font-semibold !text-black_amp_white-white md:text-[1.81rem] sm:text-[1.69rem]"
                >
                  Ann Mary{" "}
                </Heading>
              </div>
              <div className="mb-[1.50rem] flex">
                <Text size="h1_sub" as="p" className="text-[1.13rem] font-normal !text-gray-200">
                  Let&#39;s Start Your Career Journey!
                </Text>
              </div>
            </div>
            <Text as="p" className="mt-[1.50rem] text-[0.88rem] font-normal !text-black_amp_white-white">
              Dashboard
            </Text>
          </div>
        </div>
        <div className="container-xs relative mt-[-3.88rem] flex flex-col items-end md:px-[1.25rem]">
          <div className="h-[24.38rem] w-[22%] rounded-[14px] bg-black_amp_white-white" />
        </div>
      </div>
      <div className="absolute bottom-[26%] left-[5%] m-auto flex w-[70%] flex-col gap-[2.00rem] rounded-[14px] bg-black_amp_white-white px-[3.38rem] py-[5.00rem] md:p-[1.25rem]">
        <div className="flex gap-[3.13rem] md:flex-col">
          <div className="flex w-full flex-col items-start gap-[0.88rem]">
            <Text size="textxl" as="p" className="!font-inter text-[0.75rem] font-normal">
              Higher Education{" "}
            </Text>
            <SelectBox
              shape="round"
              indicator={
                <Img
                  src="img_checkmark.svg"
                  width={18}
                  height={16}
                  alt="Checkmark"
                  className="h-[1.00rem] w-[1.13rem]"
                />
              }
              name="Frame 226"
              placeholder={`Select`}
              options={dropDownOptions}
              className="gap-[1.00rem] self-stretch rounded !border font-inter"
            />
          </div>
          <div className="flex w-full flex-col items-start gap-[0.88rem]">
            <Text size="textxl" as="p" className="!font-inter text-[0.75rem] font-normal">
              Field of Study{" "}
            </Text>
            <SelectBox
              shape="round"
              indicator={
                <Img
                  src="img_checkmark.svg"
                  width={18}
                  height={16}
                  alt="Checkmark"
                  className="h-[1.00rem] w-[1.13rem]"
                />
              }
              name="Frame 226"
              placeholder={`Select`}
              options={dropDownOptions}
              className="gap-[1.00rem] self-stretch rounded !border font-inter"
            />
          </div>
          <div className="flex w-full flex-col items-start gap-[1.13rem]">
            <Text size="textxl" as="p" className="!font-inter text-[0.75rem] font-normal">
              Institution Name
            </Text>
            <Input
              color="gray_400"
              size="xs"
              shape="round"
              name="Frame 221"
              placeholder={`Enter input`}
              className="self-stretch rounded !border px-[0.50rem] font-inter"
            />
          </div>
        </div>
        <div className="flex items-center gap-[3.13rem] sm:flex-col">
          <div className="flex w-[30%] flex-col items-start gap-[0.88rem] sm:w-full">
            <Text size="textxl" as="p" className="!font-inter text-[0.75rem] font-normal">
              Year of completion
            </Text>
            <SelectBox
              shape="round"
              indicator={
                <Img
                  src="img_checkmark.svg"
                  width={18}
                  height={16}
                  alt="Checkmark"
                  className="h-[1.00rem] w-[1.13rem]"
                />
              }
              name="Frame 226"
              placeholder={`Select`}
              options={dropDownOptions}
              className="gap-[1.00rem] self-stretch rounded !border font-inter"
            />
          </div>
          <div className="flex flex-1 flex-col items-start gap-[0.50rem] self-end sm:self-stretch">
            <Text size="textxl" as="p" className="!font-inter text-[0.75rem] font-normal">
              Agregate Score
            </Text>
            <Input
              color="gray_400"
              size="xs"
              shape="round"
              name="Frame 221"
              placeholder={`Enter input`}
              className="w-[46%] rounded !border px-[0.50rem] font-inter"
            />
          </div>
        </div>
        <div className="flex justify-end gap-[1.31rem]">
          <Link href="/profilethree" target="_blank">
            <Button
              color="deep_purple_500"
              size="xl"
              shape="round"
              className="min-w-[8.88rem] rounded-[5px] px-[1.13rem]"
            >
              Save and Next
            </Button>
          </Link>
          <Button
            color="deep_purple_500"
            size="xl"
            shape="round"
            className="min-w-[4.75rem] rounded-[5px] px-[1.13rem]"
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
