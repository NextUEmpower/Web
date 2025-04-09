"use client";

import { Heading, CheckBox, Input, Img, Button, Text } from "../../components";
import CourseCourse from "../../components/CourseCourse";
import Header from "../../components/Header";
import { CloseSVG } from "../../components/Input/close";
import CourseGroup684 from "./CourseGroup684";
import React, { Suspense } from "react";

export default function CoursePage() {
  const [searchBarValue2, setSearchBarValue2] = React.useState("");
  const [searchBarValue3, setSearchBarValue3] = React.useState("");

  return (
    <div className="relative h-[84.13rem] w-full bg-gray-200_01">
      <div className="absolute left-0 right-0 top-[0.00rem] mx-auto flex flex-1 flex-col items-center">
        <div className="flex flex-col items-center self-stretch">
          <div className="flex flex-col items-center self-stretch bg-gradient3 py-[2.63rem] md:py-[1.25rem]">
            <div className="container-xs mb-[3.50rem] flex flex-col items-start md:px-[1.25rem]">
              <Header className="self-stretch" />
              <div className="mt-[4.88rem] flex flex-col gap-[0.25rem] self-stretch">
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
              <Text as="p" className="mt-[2.00rem] text-[0.88rem] font-normal !text-black_amp_white-white">
                Explore
              </Text>
            </div>
          </div>
          <div className="container-xs relative mt-[-3.88rem] flex flex-col items-start md:px-[1.25rem]">
            <div className="flex w-[74%] rounded-[14px] bg-black_amp_white-white py-[1.13rem] md:w-full">
              <div className="w-full px-[1.75rem] sm:px-[1.25rem]">
                <div className="flex flex-col items-start gap-[1.25rem]">
                  <div className="mr-[0.50rem] flex items-center gap-[2.88rem] self-stretch md:mr-0 md:flex-col">
                    <Input
                      color="black_900_02"
                      size="md"
                      name="Frame 119"
                      placeholder={`Search Industry`}
                      value={searchBarValue3}
                      onChange={(e) => setSearchBarValue3(e.target.value)}
                      prefix={
                        <Img
                          src="img_lucidesearch.svg"
                          width={26}
                          height={26}
                          alt="Lucide:search"
                          className="h-[1.63rem] w-[1.63rem] object-contain"
                        />
                      }
                      suffix={
                        searchBarValue3?.length > 0 ? (
                          <CloseSVG
                            onClick={() => setSearchBarValue3("")}
                            height={26}
                            width={26}
                            fillColor="#000000ff"
                          />
                        ) : null
                      }
                      className="flex-grow gap-[0.75rem] self-end rounded-[20px] !border text-black-900_02"
                    />
                    <Button color="deep_purple_A700" size="6xl" className="w-[3.13rem] rounded-[24px] px-[0.63rem]">
                      <Img src="img_stash_arrow_right_solid.svg" width={26} height={26} />
                    </Button>
                  </div>
                  <Button
                    color="black_900_02"
                    size="2xl"
                    variant="outline"
                    rightIcon={
                      <Img
                        src="img_phofficechairfill.svg"
                        width={20}
                        height={20}
                        alt="Ph:office-chair-fill"
                        className="h-[1.25rem] w-[1.25rem] object-contain"
                      />
                    }
                    className="min-w-[10.88rem] gap-[0.63rem] rounded-[20px] !border px-[1.19rem] font-light"
                  >
                    Software engineer
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xs relative mt-[-9.38rem] flex flex-col items-end md:px-[1.25rem]">
          <div className="flex w-[22%] flex-col gap-[1.25rem] rounded-[14px] bg-black_amp_white-white py-[3.13rem] md:w-full md:py-[1.25rem]">
            <div className="ml-[1.75rem] flex flex-col gap-[1.00rem] md:ml-0">
              <div className="flex flex-col gap-[1.13rem]">
                <div className="flex flex-col items-start gap-[0.38rem]">
                  <Heading size="heading2xl" as="h2" className="text-[1.19rem] font-semibold">
                    All Filters
                  </Heading>
                  <div className="mr-[1.75rem] h-[0.06rem] self-stretch bg-black-900_02 md:mr-0" />
                </div>
                <div className="flex flex-col items-start gap-[1.38rem]">
                  <div className="flex flex-col gap-[0.75rem] self-stretch">
                    <div className="flex items-center justify-between gap-[1.25rem]">
                      <Heading size="text6xl" as="h3" className="text-[1.13rem] font-medium">
                        Sector
                      </Heading>
                      <Img
                        src="img_arrow_up_black_900_02.svg"
                        width={18}
                        height={18}
                        alt="Arrow Up"
                        className="mr-[2.50rem] h-[1.13rem]"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-[1.50rem]">
                      <CheckBox
                        name="Filtering Item"
                        label="Filtering Item"
                        id="FilteringItem7"
                        className="gap-[0.63rem] text-[1.00rem] text-black-900_02"
                      />
                      <CheckBox
                        name="Filtering Item"
                        label="Filtering Item"
                        id="FilteringItem6"
                        className="gap-[0.63rem] text-[1.00rem] text-black-900_02"
                      />
                      <CheckBox
                        name="Filtering Item"
                        label="Filtering Item"
                        id="FilteringItem5"
                        className="gap-[0.63rem] text-[1.00rem] text-black-900_02"
                      />
                      <CheckBox
                        name="Filtering Item"
                        label="Filtering Item"
                        id="FilteringItem4"
                        className="gap-[0.63rem] text-[1.00rem] text-black-900_02"
                      />
                    </div>
                  </div>
                  <Heading as="h4" className="text-[1.00rem] font-medium !text-indigo-a200">
                    More
                  </Heading>
                </div>
              </div>
              <div className="mr-[1.75rem] h-[0.06rem] bg-black-900_02 md:mr-0" />
            </div>
            <div className="mx-[1.75rem] flex flex-col gap-[3.25rem] md:mx-0 sm:gap-[1.63rem]">
              <div className="flex flex-col gap-[2.25rem]">
                <div className="flex items-center justify-between gap-[1.25rem]">
                  <Heading size="text6xl" as="h5" className="text-[1.13rem] font-medium">
                    Industry
                  </Heading>
                  <Img
                    src="img_arrow_up_black_900_02.svg"
                    width={18}
                    height={18}
                    alt="Arrow Up"
                    className="h-[1.13rem]"
                  />
                </div>
                <Input
                  color="black_900_02"
                  size="lg"
                  name="Frame 119"
                  placeholder={`Search Industry`}
                  value={searchBarValue2}
                  onChange={(e) => setSearchBarValue2(e.target.value)}
                  prefix={
                    <Img
                      src="img_lucidesearch.svg"
                      width={26}
                      height={26}
                      alt="Lucide:search"
                      className="h-[1.63rem] w-[1.63rem] object-contain"
                    />
                  }
                  suffix={
                    searchBarValue2?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue2("")} height={26} width={26} fillColor="#000000ff" />
                    ) : null
                  }
                  className="gap-[0.75rem] rounded-[28px] !border text-black-900_02"
                />
              </div>
              <div className="flex flex-col items-start gap-[1.50rem]">
                <CheckBox
                  name="Filtering Item"
                  label="Filtering Item"
                  id="FilteringItem3"
                  className="gap-[0.63rem] text-[1.00rem] text-black-900_02"
                />
                <CheckBox
                  name="Filtering Item"
                  label="Filtering Item"
                  id="FilteringItem2"
                  className="gap-[0.63rem] text-[1.00rem] text-black-900_02"
                />
                <CheckBox
                  name="Filtering Item"
                  label="Filtering Item"
                  id="FilteringItem1"
                  className="gap-[0.63rem] text-[1.00rem] text-black-900_02"
                />
                <CheckBox
                  name="Filtering Item"
                  label="Filtering Item"
                  id="FilteringItem"
                  className="gap-[0.63rem] text-[1.00rem] text-black-900_02"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[-7.44rem] left-0 right-0 mx-[4.50rem] flex flex-1 flex-col items-start gap-[1.00rem] md:mx-0">
        <Heading size="text6xl" as="h2" className="text-[1.13rem] font-medium">
          Recommented Colleges as per test result
        </Heading>
        <div className="flex flex-col gap-[2.00rem] self-stretch">
          <CourseGroup684 />
          <div className="mr-[20.75rem] flex gap-[1.50rem] md:mr-0 md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {[...Array(4)].map((d, index) => (
                <CourseCourse key={"group834" + index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
