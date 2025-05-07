"use client";

import { Heading, Text, Img, BreadcrumbLink, Breadcrumb, BreadcrumbItem } from "@/components";
import EventDetails from "@/components/EventDetails";
import Header from "@/components/Header";
import IntermediateProfile from "@/components/IntermediateProfile";
import UserProfile2 from "@/components/UserProfile2";
import Link from "next/link";
import React, { Suspense } from "react";

const data = [
  { userName: "Name", userId: "ID 8956474", userPoints: "261 Points" },
  { userName: "Name", userId: "ID 8956474", userPoints: "105 Points" },
  { userName: "Name", userId: "ID 8956474", userPoints: "90 Points" },
];
const data1 = [
  {
    eventTitle: "Title of Event",
    eventDescription: "About the eventAbout the eventAbout the eventAbout the event",
    viewMoreButtonText: "View More",
  },
  {
    eventTitle: "Title of Event",
    eventDescription: "About the eventAbout the eventAbout the eventAbout the event",
    viewMoreButtonText: "View More",
  },
  {
    eventTitle: "Title of Event",
    eventDescription: "About the eventAbout the eventAbout the eventAbout the event",
    viewMoreButtonText: "View More",
  },
  {
    eventTitle: "Title of Event",
    eventDescription: "About the eventAbout the eventAbout the eventAbout the event",
    viewMoreButtonText: "View More",
  },
];

export default function CommunityPage() {
  return (
    <div className="relative h-[119.13rem] w-full content-center bg-gray-200_01 md:h-auto">
      <div className="flex flex-1 flex-col items-center">
        <div className="flex flex-col items-center self-stretch">
          <div className="flex flex-col items-center self-stretch bg-gradient1 py-[2.63rem] md:py-[1.25rem]">
            <div className="container-xs mb-[3.38rem] md:px-[1.25rem]">
              <Header />
              <div className="mt-[4.88rem] flex flex-col items-start justify-center gap-[0.25rem]">
                <div className="flex flex-wrap gap-[0.56rem] self-stretch">
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
                    Ann Mary
                  </Heading>
                </div>
                <Text size="h1_sub" as="p" className="text-[1.13rem] font-normal !text-gray-200">
                  Here we share, learn, and grow together. Here you’ll find support, advice, and inspiration.
                </Text>
              </div>
              <Breadcrumb
                separator={
                  <Img
                    src="img_frame_182.svg"
                    width={20}
                    height={20}
                    alt="Arrow Right"
                    className="h-[1.25rem] w-[1.25rem]"
                  />
                }
                className="mt-[2.00rem] flex flex-wrap items-center gap-[1.44rem]"
              >
                <BreadcrumbItem>
                  <BreadcrumbLink href="#" as={Link}>
                    <Text as="p" className="text-[0.88rem] font-normal !text-black_amp_white-white">
                      Dashboard
                    </Text>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="#" as={Link}>
                    <Text as="p" className="text-[0.88rem] font-normal !text-black_amp_white-white">
                      Resuls
                    </Text>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </div>
          </div>
          <div className="container-xs relative mt-[-3.88rem] flex flex-col items-end md:px-[1.25rem]">
            <div className="flex w-[22%] flex-col items-start justify-center gap-[1.13rem] rounded-[14px] bg-black_amp_white-white px-[1.00rem] py-[1.25rem] md:w-full">
              <Text size="h1_sub" as="p" className="text-[1.13rem] font-normal">
                Events or Webinars
              </Text>
              <div className="flex flex-col gap-[1.25rem] self-stretch">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {data1.map((d, index) => (
                    <EventDetails {...d} key={"group585" + index} />
                  ))}
                </Suspense>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xs relative mt-[-35.38rem] flex flex-col items-center px-[3.50rem] md:px-[1.25rem]">
          <IntermediateProfile className="ml-[0.38rem] w-[56%] md:ml-0 md:w-full" />
        </div>
      </div>
      <div className="absolute left-[5%] top-[17%] m-auto flex w-[22%] flex-col items-start gap-[1.88rem] rounded-[14px] bg-black_amp_white-white px-[1.13rem] py-[1.25rem]">
        <Heading size="text8xl" as="h2" className="ml-[3.63rem] text-[1.25rem] font-normal md:ml-0">
          LeadBoard
        </Heading>
        <div className="mb-[0.75rem] flex flex-col gap-[1.13rem] self-stretch">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data.map((d, index) => (
              <UserProfile2 {...d} key={"group580" + index} />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
