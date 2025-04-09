"use client";

import { Img, Text, BreadcrumbLink, Breadcrumb, BreadcrumbItem } from "../../components";
import TestpagewoneGroup573 from "./TestpagewoneGroup573";
import Link from "next/link";
import React from "react";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";

const accordionData = [
  { careerApproach1: "Career Approach" },
  { careerApproach1: "Interest Mapping" },
  { careerApproach1: "Workplace Personality" },
  { careerApproach1: "Cognitive Skills" },
  { careerApproach1: "Emotional Intelligence" },
];

export default function TestPageWOnePage() {
  return (
    <div className="relative h-[60.25rem] w-full bg-gray-200_01">
      <div className="absolute left-0 right-0 top-[0.00rem] mx-auto flex flex-1 flex-col items-center">
        <header className="flex flex-col items-center self-stretch bg-gradient1 py-[2.63rem] md:py-[1.25rem]">
          <div className="container-xs mb-[13.25rem] flex flex-col gap-[2.75rem] md:px-[1.25rem]">
            <div className="flex">
              <Img
                src="img_images_2.png"
                width={138}
                height={46}
                alt="Images 2"
                className="h-[2.88rem] w-[10%] object-contain"
              />
            </div>
            <Breadcrumb
              separator={
                <Img
                  src="img_frame_363.svg"
                  width={20}
                  height={20}
                  alt="Arrow Left"
                  className="h-[1.25rem] w-[1.25rem]"
                />
              }
              className="flex flex-wrap items-center gap-[1.88rem]"
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
                  <Text as="p" className="text-[0.88rem] font-light !text-black_amp_white-white">
                    Personality Test
                  </Text>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
        </header>
        <div className="container-xs relative mt-[-11.63rem] flex flex-col items-end md:px-[1.25rem]">
          <div className="w-[22%] rounded-[14px] bg-black_amp_white-white px-[1.63rem] py-[1.88rem] md:w-full sm:p-[1.25rem]">
            <Accordion className="mb-[16.25rem] flex flex-col gap-[1.00rem]">
              {accordionData.map((d, i) => (
                <AccordionItem uuid={i} key={`Instructions and${i}`}>
                  <AccordionItemHeading className="w-full">
                    <AccordionItemButton>
                      <AccordionItemState>
                        {(props) => (
                          <>
                            <div className="flex flex-1 justify-between gap-[1.25rem] rounded-[5px] border border-solid border-deep_purple-a700 px-[1.25rem] py-[0.63rem]">
                              <Text
                                size="text3xl"
                                as="p"
                                className="!font-mulish text-[0.94rem] font-normal !text-gray-700_03"
                              >
                                {d.careerApproach1}
                              </Text>
                              <Img
                                src="img_arrow_up.svg"
                                width={20}
                                height={20}
                                alt="Arrow Up"
                                className="h-[1.25rem]"
                              />
                            </div>
                          </>
                        )}
                      </AccordionItemState>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div>Dummy Content</div>
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[8%] left-[5%] m-auto flex w-[70%] rounded-[14px] bg-black_amp_white-white py-[2.63rem] md:py-[1.25rem]">
        <TestpagewoneGroup573 />
      </div>
    </div>
  );
}
