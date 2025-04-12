"use client";

import { Text, Img, BreadcrumbLink, Breadcrumb, BreadcrumbItem } from "../../components";
import TestpagewtwoGroup577 from "./TestpagewtwoGroup577";
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
  { careerApproach2: "Career Approach" },
  { careerApproach2: "Interest Mapping" },
  { careerApproach2: "Workplace Personality" },
  { careerApproach2: "Cognitive Skills" },
  { careerApproach2: "Emotional Intelligence" },
];

export default function TestPageWTwoPage() {
  return (
    <div className="relative h-[60.25rem] w-full bg-gray-200_01">
      <div className="absolute left-0 right-0 top-[0.00rem] mx-auto flex flex-1 flex-col items-center">
        <header className="flex flex-col items-center self-stretch bg-gradient1 py-[2.63rem] md:py-[1.25rem]">
          <div className="container-xs mb-[13.25rem] flex flex-col gap-[2.75rem] md:px-[1.25rem]">
            <div className="flex">
              <Img
                src="img_header_logo.svg"
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
          <div className="w-[22%] rounded-[14px] bg-black_amp_white-white px-[1.63rem] py-[2.00rem] md:w-full sm:p-[1.25rem]">
            <Accordion preExpanded={[0]} className="mt-[1.00rem] flex flex-col gap-[1.00rem]">
              {accordionData.map((d, i) => (
                <AccordionItem uuid={i} key={`Instructions and${i}`}>
                  <div className="flex flex-1 flex-col gap-[1.13rem] rounded-[5px] border border-solid border-gray-400_03 p-[0.63rem]">
                    <AccordionItemHeading className="w-full">
                      <AccordionItemButton>
                        <AccordionItemState>
                          {(props) => (
                            <>
                              <div className="flex flex-wrap items-center justify-between gap-[1.25rem]">
                                <Text size="text3xl" as="p" className="!font-mulish text-[0.94rem] font-normal">
                                  {d.careerApproach2}
                                </Text>
                                {props?.expanded ? (
                                  <Img
                                    src="img_checkmark_black_900_02.svg"
                                    width={20}
                                    height={20}
                                    alt="Checkmark"
                                    className="h-[1.25rem]"
                                  />
                                ) : (
                                  <Img
                                    src="img_mingcute_lock_fill_red_a700.svg"
                                    width={14}
                                    height={14}
                                    alt="Mingcute Lock Fill"
                                    className="ml-[0.75rem] h-[0.88rem]"
                                  />
                                )}
                              </div>
                            </>
                          )}
                        </AccordionItemState>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="mb-[1.25rem]">
                        <Text
                          size="textmd"
                          as="p"
                          className="text-justify !font-mulish text-[0.63rem] font-normal leading-[0.75rem] !text-gray-800_01"
                        >
                          <>
                            Understanding your Orientation Style will help you evaluate your natural work style and
                            approach to career-related situations. This test identifies how you process information,
                            make decisions, and interact in a work environment.
                            <br />
                            Test Instructions:
                            <br />
                            The test consists of real-life scenarios related to work and learning.
                            <br />
                            Read carefully and choose the option that best fits your personality.
                            <br />
                            Be honest to get the most accurate insights about your strengths.
                            <br />
                            Ensure a quiet environment and a stable internet connection.
                            <br />
                            Recommended Time: 10 minutes
                          </>
                        </Text>
                      </div>
                    </AccordionItemPanel>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[8%] left-[5%] m-auto flex w-[70%] rounded-[14px] bg-black_amp_white-white py-[2.63rem] md:py-[1.25rem]">
        <TestpagewtwoGroup577 />
      </div>
    </div>
  );
}
