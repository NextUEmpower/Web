"use client";

import { Button, Img, Heading, Text } from "@/components";
import Header from "@/components/Header";
import Link from "next/link";
import React from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

export default function DashboardPage() {
  return (
    <div className="w-full bg-gray-200_01">
      <div className="mb-[7.13rem] flex flex-col items-center">
        <div className="flex flex-col items-center self-stretch bg-gradient1 py-[2.63rem] md:py-[1.25rem]">
          <div className="container-xs mb-[13.38rem] flex flex-col items-start gap-[2.75rem] md:px-[1.25rem]">
            <Header className="self-stretch" />
            <Text as="p" className="text-[0.88rem] font-normal !text-black_amp_white-white">
              Dashboard
            </Text>
          </div>
        </div>
        <div className="container-xs relative mt-[-14.13rem] md:px-[1.25rem]">
          <div className="rounded-[14px] bg-black_amp_white-white py-[1.50rem] sm:py-[1.25rem]">
            <Tabs
              className="mt-[0.25rem] flex w-full flex-col gap-[2.13rem] px-[1.88rem] sm:px-[1.25rem]"
              selectedTabClassName="!text-black-900_02"
              selectedTabPanelClassName="mr-[2.00rem] md:mr-0 !relative tab-panel--selected"
            >
              <div className="mr-[1.25rem] flex flex-col items-center justify-center gap-[0.63rem] px-[3.50rem] md:mr-0 md:px-[1.25rem]">
                <div className="mx-[2.00rem] flex w-[86%] justify-between gap-[1.25rem] md:mx-0 md:w-full md:flex-col">
                  <div className="flex flex-1 justify-center md:flex-col md:self-stretch">
                    <Heading as="h1" className="text-[1.00rem] font-normal">
                      Intermediate
                    </Heading>
                    <TabList className="flex flex-1 justify-between gap-[4.38rem] px-[2.13rem] md:self-stretch sm:flex-col sm:px-[1.25rem]">
                      <Tab className="ml-[2.13rem] flex items-center gap-[0.38rem] md:ml-0">
                        <Heading as="h2" className="text-[1.00rem] font-normal">
                          Intermediate
                        </Heading>
                        <Img
                          src="img_mingcute_lock_fill.svg"
                          width={16}
                          height={16}
                          alt="Mingcute Lock Fill"
                          className="h-[1.00rem]"
                        />
                      </Tab>
                      <Tab className="flex items-center gap-[0.38rem]">
                        <Heading as="h3" className="text-[1.00rem] font-normal">
                          Intermediate
                        </Heading>
                        <Img
                          src="img_iconoir_heart_solid.svg"
                          width={16}
                          height={16}
                          alt="Iconoir Heart Solid"
                          className="h-[1.00rem]"
                        />
                      </Tab>
                      <Tab className="flex items-center gap-[0.38rem]">
                        <Heading as="h4" className="text-[1.00rem] font-normal">
                          Intermediate
                        </Heading>
                        <Img
                          src="img_iconoir_heart_solid_black_900_02_16x16.svg"
                          width={16}
                          height={16}
                          alt="Iconoir Heart Solid"
                          className="h-[1.00rem] object-cover"
                        />
                      </Tab>
                    </TabList>
                  </div>
                  <div className="flex items-center gap-[0.38rem]">
                    <Heading as="h5" className="text-[1.00rem] font-normal">
                      Intermediate
                    </Heading>
                    <Img
                      src="img_iconoir_heart_solid.svg"
                      width={16}
                      height={16}
                      alt="Iconoir Heart Solid"
                      className="h-[1.00rem]"
                    />
                  </div>
                </div>
                <Img
                  src="img_group_5842.svg"
                  width={960}
                  height={1}
                  alt="Group 5842"
                  className="h-[0.06rem] w-[86%] object-contain"
                />
              </div>
              {[...Array(3)].map((_, index) => (
                <TabPanel key={`tab-panel${index}`} className="absolute mr-[2.00rem] items-center md:mr-0">
                  <div className="w-full">
                    <div className="flex flex-col items-start gap-[4.13rem] sm:gap-[2.06rem]">
                      <div className="flex flex-col gap-[1.00rem] self-stretch">
                        <div className="flex">
                          <Heading
                            size="b_h1"
                            as="h6"
                            className="!font-inter text-[1.13rem] font-semibold tracking-[0.00rem]"
                          >
                            Test Number01
                          </Heading>
                        </div>
                        <Heading as="p" className="text-justify text-[1.00rem] font-normal leading-[1.25rem]">
                          Lorem ipsum odor amet, consectetuer adipiscing elit. Magna varius vivamus molestie orci
                          ridiculus consequat. Suspendisse est pharetra adipiscing netus libero himenaeos.
                        </Heading>
                      </div>
                      <div className="flex flex-col items-start gap-[1.00rem] self-stretch">
                        <Heading size="text8xl" as="p" className="text-[1.25rem] font-medium">
                          Instructions
                        </Heading>
                        <Heading as="p" className="w-[90%] text-[1.00rem] font-normal leading-[1.25rem] md:w-full">
                          Lorem ipsum odor amet, consectetuer adipiscing elit.
                        </Heading>
                      </div>
                      <Link href="/testpagew">
                        <Button
                          color="light_green_800"
                          size="3xl"
                          shape="round"
                          rightIcon={
                            <Img
                              src="img_left.svg"
                              width={20}
                              height={20}
                              alt="Left"
                              className="h-[1.25rem] w-[1.25rem] object-contain"
                            />
                          }
                          className="min-w-[11.25rem] gap-[0.88rem] rounded px-[1.25rem]"
                        >
                          Start the test
                        </Button>
                      </Link>
                    </div>
                  </div>
                </TabPanel>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
