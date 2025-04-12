"use client";

import { Button, Input, Text, SelectBox, Img, DatePicker, Heading } from "../../components";
import React from "react";
import Link from "next/link";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function ProfilePage() {
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
          <div className="h-[34.38rem] w-[22%] rounded-[14px] bg-black_amp_white-white" />
        </div>
      </div>
      <div className="absolute bottom-[17%] left-[5%] m-auto flex w-[72%] flex-col gap-[0.63rem] rounded-[14px] bg-black_amp_white-white p-[2.38rem] sm:p-[1.25rem]">
        <div className="flex flex-col items-start">
          <div className="flex flex-col items-end">
            <Img
              src="img_ellipse_1008.svg"
              width={140}
              height={140}
              alt="Ellipse 1008"
              className="h-[8.75rem] w-full rounded-[50%]"
            />
            <Button
              color="gray_400_01"
              size="lg"
              className="relative mt-[-1.88rem] w-[1.88rem] rounded-[14px] px-[0.38rem]"
            >
              <Img src="img_bi_person_fill_gray_700_02.svg" width={16} height={16} />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-[3.25rem] sm:gap-[1.63rem]">
          <div className="mr-[2.50rem] flex flex-col gap-[3.38rem] md:mr-0 sm:gap-[1.69rem]">
            <div className="flex gap-[2.50rem] md:flex-col">
              <div className="flex w-full flex-col items-start gap-[0.50rem]">
                <Text size="textxl" as="p" className="!font-inter text-[0.75rem] font-normal">
                  Full Name
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
              <div className="flex w-full flex-col items-start gap-[0.50rem]">
                <Text size="textxl" as="p" className="!font-inter text-[0.75rem] font-normal">
                  Email
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
              <div className="flex w-full flex-col items-start gap-[0.50rem]">
                <Text size="textxl" as="p" className="!font-inter text-[0.75rem] font-normal">
                  Phone Number
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
            <div className="flex items-center gap-[2.50rem] md:flex-col">
              <div className="flex w-full gap-[1.00rem]">
                <div className="flex flex-1 flex-col items-start gap-[0.38rem]">
                  <Text size="textxl" as="p" className="!font-inter text-[0.75rem] font-normal">
                    Date of birth
                  </Text>
                  <DatePicker
                    name="Frame 235"
                    placeholder={`dd/mm/yyy`}
                    className="flex gap-[2.13rem] self-stretch rounded border border-solid border-gray-400 bg-transparent p-[0.50rem] font-inter text-[0.63rem] text-gray-600_01"
                  />
                </div>
                <div className="flex w-[46%] flex-col items-start gap-[0.38rem]">
                  <Text size="textxl" as="p" className="!font-inter text-[0.75rem] font-normal">
                    Gender
                  </Text>
                  <SelectBox
                    shape="round"
                    indicator={
                      <Img
                        src="img_checkmark.svg"
                        width={14}
                        height={16}
                        alt="Left"
                        className="h-[1.00rem] w-[0.88rem]"
                      />
                    }
                    name="Frame 235"
                    placeholder={`Male`}
                    options={dropDownOptions}
                    className="gap-[1.00rem] self-stretch rounded !border font-inter !text-gray-600_01"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-[0.50rem]">
                <Text size="textxl" as="p" className="!font-inter text-[0.75rem] font-normal">
                  State
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
              <div className="flex w-full flex-col items-start gap-[0.50rem]">
                <Text size="textxl" as="p" className="!font-inter text-[0.75rem] font-normal">
                  City
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
          </div>
          <div className="flex justify-end gap-[1.31rem]">
            <Link href="/profiletwo" target="_blank">
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
    </div>
  );
}
