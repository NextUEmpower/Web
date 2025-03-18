"use client";

import { Text, Heading, Img, Button } from "./..";
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function IntermediateProfile({
  intermediate = "Intermediate",
  intermediate1 = "Intermediate",
  intermediate2 = "Intermediate",
  intermediate3 = "Intermediate",
  intermediate4 = "Intermediate",
  group4 = "30%",
  group41 = "20%",
  group5 = "15%",
  group14 = "20%",
  percentageText = "15%",
  interestedText = "Intrested",
  intrested = "Intrested",
  intrested1 = "Intrested",
  intrested2 = "Intrested",
  intrested3 = "Intrested",
  intrested4 = "Intrested",
  intrested5 = "Intrested",
  intrested6 = "Intrested",
  headingText = "Your Heading is Thus",
  descriptionText = "Lorem ipsum odor amet, consectetuer adipiscing elit. Massa massa morbi tortor velit tortor curae hendrerit. Ex neque quam ultricies egestas adipiscinoncus nisl tincidunt maecenas ornare. Nibh alie.",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-start py-[1.63rem] sm:py-[1.25rem] bg-black_amp_white-white rounded-[14px]`}
    >
      <div className="mb-[3.38rem] flex w-full flex-col gap-[1.25rem] px-[1.75rem] sm:w-full sm:gap-[1.25rem] sm:px-[1.25rem]">
        <div>
          <div className="relative z-[1] mr-[1.88rem] flex items-start justify-center sm:mr-0">
            <div className="flex flex-1 items-start justify-center gap-[0.38rem]">
              <div className="flex flex-1 flex-col items-start gap-[0.63rem] self-center sm:gap-[0.63rem]">
                <Text size="text3xl" as="p" className="ml-[1.88rem] text-[0.94rem] font-normal sm:ml-0">
                  {intermediate}
                </Text>
                <Img src="img_line_7.svg" width={182} height={4} alt="Line 7" className="h-[0.25rem] w-full" />
              </div>
              <div className="flex items-center gap-[0.44rem] px-[0.38rem]">
                <Text size="text3xl" as="p" className="text-[0.94rem] font-normal">
                  {intermediate1}
                </Text>
                <Img
                  src="img_mingcute_lock_fill.svg"
                  width={14}
                  height={14}
                  alt="Mingcute Lock Fill"
                  className="h-[0.88rem]"
                />
              </div>
            </div>
            <div className="flex items-center gap-[0.38rem] px-[2.13rem] sm:px-[1.25rem]">
              <Text size="text3xl" as="p" className="text-[0.94rem] font-normal">
                {intermediate2}
              </Text>
              <Img
                src="img_iconoir_heart_solid.svg"
                width={14}
                height={14}
                alt="Iconoir Heart Solid"
                className="h-[0.88rem]"
              />
            </div>
            <div className="flex items-center gap-[0.38rem] px-[2.13rem] sm:px-[1.25rem]">
              <Text size="text3xl" as="p" className="text-[0.94rem] font-normal">
                {intermediate3}
              </Text>
              <Img
                src="img_iconoir_heart_solid.svg"
                width={14}
                height={14}
                alt="Iconoir Heart Solid"
                className="h-[0.88rem]"
              />
            </div>
            <div className="flex items-center gap-[0.44rem]">
              <Text size="text3xl" as="p" className="text-[0.94rem] font-normal">
                {intermediate4}
              </Text>
              <Img
                src="img_iconoir_heart_solid_black_900_02.png"
                width={14}
                height={14}
                alt="Iconoir Heart Solid"
                className="h-[0.88rem] object-cover"
              />
            </div>
          </div>
          <div className="relative mt-[-0.25rem] h-[0.06rem] bg-blue_gray-100" />
        </div>
        <div className="flex items-start gap-[2.63rem]">
          <div className="flex flex-1 gap-[2.25rem] self-center">
            <div className="flex w-full items-center justify-center gap-[1.75rem]">
              <div className="flex flex-1 items-center gap-[1.75rem]">
                <div className="flex flex-1 flex-col items-start">
                  <div className="relative h-[9.00rem] self-stretch">
                    <div className="absolute bottom-[0.06rem] left-0 right-0 mx-auto h-[8.63rem] flex-1">
                      <CircularProgressbar
                        strokeWidth={25}
                        value={6}
                        counterClockwise
                        styles={{ trail: { stroke: "#f68d2b" }, path: { strokeLinecap: "square", stroke: "#f68d2b" } }}
                        className="absolute bottom-0 right-[0.06rem] top-0 my-auto h-[8.63rem] flex-1"
                      />
                      <CircularProgressbar
                        strokeWidth={25}
                        value={6}
                        counterClockwise
                        styles={{ trail: { stroke: "#f4a79d" }, path: { strokeLinecap: "square", stroke: "#f68d2b" } }}
                        className="absolute bottom-0 right-[0.06rem] top-0 my-auto h-[8.63rem] flex-1"
                      />
                      <CircularProgressbar
                        strokeWidth={25}
                        value={6}
                        counterClockwise
                        styles={{ trail: { stroke: "#f4a79d" }, path: { strokeLinecap: "square", stroke: "#f68d2b" } }}
                        className="absolute bottom-0 right-[0.06rem] top-0 my-auto h-[8.63rem] flex-1"
                      />
                      <CircularProgressbar
                        strokeWidth={25}
                        value={6}
                        counterClockwise
                        styles={{ trail: { stroke: "#344bfd" }, path: { strokeLinecap: "square", stroke: "#f68d2b" } }}
                        className="absolute bottom-0 right-[0.06rem] top-0 my-auto h-[8.63rem] flex-1"
                      />
                      <CircularProgressbar
                        strokeWidth={25}
                        value={6}
                        counterClockwise
                        styles={{ trail: { stroke: "#49a677" }, path: { strokeLinecap: "square", stroke: "#f68d2b" } }}
                        className="absolute bottom-0 right-[0.06rem] top-0 my-auto h-[8.63rem] flex-1"
                      />
                      <CircularProgressbar
                        strokeWidth={25}
                        value={6}
                        counterClockwise
                        styles={{ trail: { stroke: "#fa898b" }, path: { strokeLinecap: "square", stroke: "#f68d2b" } }}
                        className="absolute bottom-0 right-[0.06rem] top-0 my-auto h-[8.63rem] flex-1"
                      />
                    </div>
                    <div className="absolute left-0 right-0 top-[0.00rem] mx-auto flex-1">
                      <div className="flex flex-col gap-[2.50rem] sm:gap-[2.50rem]">
                        <div className="flex flex-wrap items-start justify-between gap-[1.25rem]">
                          <Heading
                            size="headingxs"
                            as="p"
                            className="text-shadow-ts1 mb-[1.13rem] ml-[1.75rem] flex h-[1.50rem] w-[1.50rem] items-center justify-center rounded-[12px] bg-deep_purple-50 text-center !font-inter text-[0.50rem] font-bold sm:w-[1.50rem]"
                          >
                            {group4}
                          </Heading>
                          <Heading
                            size="headingxs"
                            as="p"
                            className="text-shadow-ts1 flex h-[1.50rem] w-[1.50rem] items-center justify-center self-end rounded-[12px] bg-deep_purple-50 text-center !font-inter text-[0.50rem] font-bold sm:w-[1.50rem]"
                          >
                            {group41}
                          </Heading>
                        </div>
                        <div className="flex flex-wrap items-start justify-between gap-[1.25rem]">
                          <Heading
                            size="headingxs"
                            as="p"
                            className="text-shadow-ts1 mb-[0.88rem] flex h-[1.50rem] w-[1.50rem] items-center justify-center rounded-[12px] bg-deep_purple-50 text-center !font-inter text-[0.50rem] font-bold sm:w-[1.50rem]"
                          >
                            {group5}
                          </Heading>
                          <Heading
                            size="headingxs"
                            as="p"
                            className="text-shadow-ts1 flex h-[1.50rem] w-[1.50rem] items-center justify-center self-end rounded-[12px] bg-deep_purple-50 text-center !font-inter text-[0.50rem] font-bold sm:w-[1.50rem]"
                          >
                            {group14}
                          </Heading>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Heading
                    size="headingxs"
                    as="p"
                    className="text-shadow-ts1 relative z-[2] ml-[3.00rem] mt-[-1.00rem] flex h-[1.50rem] w-[1.50rem] items-center justify-center rounded-[12px] bg-deep_purple-50 text-center !font-inter text-[0.50rem] font-bold sm:ml-0 sm:w-[1.50rem]"
                  >
                    {percentageText}
                  </Heading>
                </div>
                <div className="flex w-[40%] flex-col gap-[1.75rem] py-[0.50rem] sm:gap-[1.75rem]">
                  <div className="flex items-center gap-[0.94rem]">
                    <div className="h-[0.63rem] w-[0.63rem] rounded bg-pink-900" />
                    <Text size="textmd" as="p" className="!font-inter text-[0.63rem] font-normal tracking-[0.00rem]">
                      {interestedText}
                    </Text>
                  </div>
                  <div className="flex items-center gap-[0.94rem]">
                    <div className="h-[0.63rem] w-[0.63rem] rounded bg-pink-900" />
                    <Text size="textmd" as="p" className="!font-inter text-[0.63rem] font-normal tracking-[0.00rem]">
                      {intrested}
                    </Text>
                  </div>
                  <div className="flex items-center gap-[0.94rem]">
                    <div className="h-[0.63rem] w-[0.63rem] rounded bg-pink-900" />
                    <Text size="textmd" as="p" className="!font-inter text-[0.63rem] font-normal tracking-[0.00rem]">
                      {intrested1}
                    </Text>
                  </div>
                  <div className="flex items-center gap-[0.94rem]">
                    <div className="h-[0.63rem] w-[0.63rem] rounded bg-pink-900" />
                    <Text size="textmd" as="p" className="!font-inter text-[0.63rem] font-normal tracking-[0.00rem]">
                      {intrested2}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="h-[16.50rem] w-[0.06rem] bg-gray-500_01" />
            </div>
            <div className="flex w-full items-center justify-center gap-[1.00rem]">
              <div className="flex flex-1 items-center gap-[1.75rem]">
                <div className="flex flex-1 items-center justify-center">
                  <Button
                    color="deep_purple_50_e5"
                    size="sm"
                    shape="circle"
                    className="relative z-[3] mb-[2.13rem] w-[1.50rem] self-end rounded-[12px] px-[0.25rem]"
                  >
                    <Img src="img_bi_person_fill.svg" width={14} height={14} />
                  </Button>
                  <div className="relative ml-[-1.13rem] h-[9.00rem] flex-1">
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[8.63rem] flex-1">
                      <CircularProgressbar
                        strokeWidth={25}
                        value={21}
                        styles={{ trail: { stroke: "#f68d2b" }, path: { strokeLinecap: "square", stroke: "#f4a79d" } }}
                        className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[8.63rem] flex-1"
                      />
                      <CircularProgressbar
                        strokeWidth={25}
                        value={24}
                        counterClockwise
                        styles={{ trail: { stroke: "#344bfd" }, path: { strokeLinecap: "square", stroke: "#f68d2b" } }}
                        className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[8.63rem] flex-1"
                      />
                      <CircularProgressbar
                        strokeWidth={25}
                        value={19}
                        styles={{
                          trail: { stroke: "#f68d2b" },
                          path: {
                            strokeLinecap: "square",
                            stroke: "#00ff55",
                            transformOrigin: "center",
                            transform: "rotate(-213deg)",
                          },
                        }}
                        className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[8.63rem] flex-1"
                      />
                    </div>
                    <div className="absolute bottom-[0.00rem] left-0 right-0 mx-auto flex-1">
                      <div className="flex flex-col items-end gap-[4.88rem] sm:gap-[2.44rem]">
                        <div className="flex items-start justify-between gap-[1.25rem] self-stretch">
                          <Button
                            color="deep_purple_50_e5"
                            size="sm"
                            shape="circle"
                            className="mb-[0.50rem] ml-[0.50rem] w-[1.50rem] rounded-[12px] px-[0.25rem]"
                          >
                            <Img src="img_bi_person_fill_red_200.svg" width={14} height={14} />
                          </Button>
                          <Button
                            color="deep_purple_50_e5"
                            size="sm"
                            shape="circle"
                            className="w-[1.50rem] self-end rounded-[12px] px-[0.25rem]"
                          >
                            <Img src="img_fluent_star_20_filled.svg" width={14} height={14} />
                          </Button>
                        </div>
                        <div className="mr-[1.13rem] flex flex-col items-center rounded-[12px] bg-deep_purple-50_e5 p-[0.25rem] sm:mr-0">
                          <Img
                            src="img_bi_person_fill_indigo_a700.png"
                            width={14}
                            height={14}
                            alt="Bi Person Fill"
                            className="h-[0.88rem] object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-[40%] flex-col gap-[1.75rem] py-[0.50rem] sm:gap-[1.75rem]">
                  <div className="flex items-center gap-[0.94rem]">
                    <div className="h-[0.63rem] w-[0.63rem] rounded bg-pink-900" />
                    <Text size="textmd" as="p" className="!font-inter text-[0.63rem] font-normal tracking-[0.00rem]">
                      {intrested3}
                    </Text>
                  </div>
                  <div className="flex items-center gap-[0.94rem]">
                    <div className="h-[0.63rem] w-[0.63rem] rounded bg-pink-900" />
                    <Text size="textmd" as="p" className="!font-inter text-[0.63rem] font-normal tracking-[0.00rem]">
                      {intrested4}
                    </Text>
                  </div>
                  <div className="flex items-center gap-[0.94rem]">
                    <div className="h-[0.63rem] w-[0.63rem] rounded bg-pink-900" />
                    <Text size="textmd" as="p" className="!font-inter text-[0.63rem] font-normal tracking-[0.00rem]">
                      {intrested5}
                    </Text>
                  </div>
                  <div className="flex items-center gap-[0.94rem]">
                    <div className="h-[0.63rem] w-[0.63rem] rounded bg-pink-900" />
                    <Text size="textmd" as="p" className="!font-inter text-[0.63rem] font-normal tracking-[0.00rem]">
                      {intrested6}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="h-[16.50rem] w-[0.06rem] bg-gray-500_01" />
            </div>
          </div>
          <div className="flex w-[26%] flex-col items-start gap-[0.88rem] sm:gap-[0.88rem]">
            <Heading
              size="b_h1"
              as="h6"
              className="!font-inter text-[1.13rem] font-semibold tracking-[0.00rem] sm:text-[0.94rem]"
            >
              {headingText}
            </Heading>
            <Text
              size="b_p1"
              as="p"
              className="w-full text-justify !font-inter text-[0.63rem] font-normal leading-[0.75rem] tracking-[0.00rem] !text-gray-700_02 sm:w-full"
            >
              {descriptionText}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
