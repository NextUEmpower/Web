"use client";

import { Img, Text, BreadcrumbLink, Breadcrumb, BreadcrumbItem, Heading } from "../../components";
import Header from "../../components/Header";
import IntermediateProfile from "../../components/IntermediateProfile";
import Link from "next/link";
import React from "react";

export default function ElevatePage() {
  return (
    <div className="relative h-[93.50rem] w-full bg-gray-200_01 md:h-auto">
      <div className="flex flex-1 flex-col items-center">
        <div className="flex flex-col items-center self-stretch bg-gradient1 py-[2.63rem] md:py-[1.25rem]">
          <div className="container-xs mb-[3.38rem] md:px-[1.25rem]">
            <Header />
            <div className="mt-[4.88rem] flex flex-col gap-[0.25rem]">
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
                  Ann Mary
                </Heading>
              </div>
              <div className="flex">
                <Text size="h1_sub" as="p" className="text-[1.13rem] font-normal !text-gray-200">
                  Let&#39;s Start Your Career Journey!
                </Text>
              </div>
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
          <div className="h-[40.38rem] w-[22%] rounded-[14px] bg-black_amp_white-white" />
        </div>
      </div>
      <IntermediateProfile className="absolute left-[5%] top-[21%] m-auto w-[70%] gap-[1.50rem]" />
      <div className="absolute bottom-[15%] left-0 right-0 mx-[4.38rem] flex flex-1 flex-col items-start gap-[1.25rem] md:mx-0">
        <IntermediateProfile className="w-[74%] md:w-full md:px-[1.25rem]" />
        <IntermediateProfile className="w-[74%] gap-[1.13rem] md:w-full md:px-[1.25rem]" />
      </div>
    </div>
  );
}
