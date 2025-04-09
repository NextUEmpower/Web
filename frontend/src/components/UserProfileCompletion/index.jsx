"use client";

import { Text, Heading, Img, Button } from "./..";
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function UserProfileCompletion({
  profileCompletionTitle = "Profile Completion",
  profileCompletionDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  completeProfileButtonText = "Complete Profile",
  completionPercentage = "59",
  prop = "%",
  completionStatusText = "Completed",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex sm:flex-col items-center w-[50%] md:w-full p-[1.50rem] md:px-[1.25rem] sm:p-[1.25rem] bg-black_amp_white-white rounded-[14px]`}
    >
      <div className="flex flex-1 flex-col items-start gap-[1.25rem] sm:self-stretch">
        <div className="flex flex-col items-start gap-[0.63rem] self-stretch">
          <Heading as="p" className="!font-inter text-[1.00rem] font-medium">
            {profileCompletionTitle}
          </Heading>
          <Text size="textmd" as="p" className="w-[88%] !font-inter text-[0.63rem] font-normal leading-[0.75rem]">
            {profileCompletionDescription}
          </Text>
        </div>
        <Button color="deep_purple_500" className="min-w-[7.88rem] rounded-[14px] px-[1.00rem] font-inter">
          {completeProfileButtonText}
        </Button>
      </div>
      <div className="relative h-[10.00rem] w-[44%] content-center">
        <CircularProgressbar
          strokeWidth={11}
          value={59}
          styles={{ trail: { stroke: "#d9d9d9" }, path: { strokeLinecap: "square", stroke: "#5f4bbf" } }}
          className="ml-auto h-[10.00rem] w-[86%]"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-[46%] flex-col items-end">
          <Img
            src="img_bi_person_fill_deep_purple_500.svg"
            width={32}
            height={32}
            alt="Bi Person Fill"
            className="mr-[0.88rem] h-[2.00rem]"
          />
          <div className="relative mt-[-0.13rem] flex flex-wrap justify-end self-stretch px-[0.63rem]">
            <Heading size="heading2xl" as="h6" className="!font-inter text-[1.19rem] font-black !text-deep_purple-500">
              {completionPercentage}
            </Heading>
            <Heading size="text7xl" as="p" className="!font-inter text-[1.19rem] font-medium !text-deep_purple-500">
              {prop}
            </Heading>
          </div>
          <Text
            size="textlg"
            as="p"
            className="relative mt-[-0.13rem] !font-inter text-[0.69rem] font-medium !text-deep_purple-500"
          >
            {completionStatusText}
          </Text>
        </div>
      </div>
    </div>
  );
}
