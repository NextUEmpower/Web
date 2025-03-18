"use client";

import { Heading, CheckBox, Input, Img, ChipView, Button, Text } from "../../components";
import Header from "../../components/Header";
import { CloseSVG } from "../../components/Input/close";
import UserProfile3 from "../../components/UserProfile3";
import React, { Suspense } from "react";

const data = [
  {
    headingText: "Heading Here",
    descriptionText: "It is a long established fact that a reader will be distracted by the readable",
    buttonText: "Click Here",
  },
  {
    headingText: "Heading Here",
    descriptionText: "It is a long established fact that a reader will be distracted by the readable",
    buttonText: "Click Here",
  },
  {
    headingText: "Heading Here",
    descriptionText: "It is a long established fact that a reader will be distracted by the readable",
    buttonText: "Click Here",
  },
  {
    headingText: "Heading Here",
    descriptionText: "It is a long established fact that a reader will be distracted by the readable",
    buttonText: "Click Here",
  },
  {
    headingText: "Heading Here",
    descriptionText: "It is a long established fact that a reader will be distracted by the readable",
    buttonText: "Click Here",
  },
  {
    headingText: "Heading Here",
    descriptionText: "It is a long established fact that a reader will be distracted by the readable",
    buttonText: "Click Here",
  },
  {
    headingText: "Heading Here",
    descriptionText: "It is a long established fact that a reader will be distracted by the readable",
    buttonText: "Click Here",
  },
  {
    headingText: "Heading Here",
    descriptionText: "It is a long established fact that a reader will be distracted by the readable",
    buttonText: "Click Here",
  },
  {
    headingText: "Heading Here",
    descriptionText: "It is a long established fact that a reader will be distracted by the readable",
    buttonText: "Click Here",
  },
  {
    headingText: "Heading Here",
    descriptionText: "It is a long established fact that a reader will be distracted by the readable",
    buttonText: "Click Here",
  },
  {
    headingText: "Heading Here",
    descriptionText: "It is a long established fact that a reader will be distracted by the readable",
    buttonText: "Click Here",
  },
  {
    headingText: "Heading Here",
    descriptionText: "It is a long established fact that a reader will be distracted by the readable",
    buttonText: "Click Here",
  },
];

export default function CollegePage() {
  const [searchBarValue15, setSearchBarValue15] = React.useState("");
  const [chipOptions, setChipOptions] = React.useState(() => [
    { value: 1, label: `Software engineer` },
    { value: 2, label: `Computer Science Engineering` },
  ]);
  const [selectedChipOptions, setSelectedChipOptions] = React.useState([]);
  const [searchBarValue16, setSearchBarValue16] = React.useState("");

  return (
    <div className="relative h-[93.50rem] w-full bg-gray-200_01">
      <div className="absolute left-0 right-0 top-[0.00rem] mx-auto flex flex-1 flex-col items-center">
        <div className="flex flex-col items-center self-stretch">
          <div className="flex flex-col items-center self-stretch bg-gradient2 py-[2.63rem] md:py-[1.25rem]">
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
                <div className="flex flex-col gap-[1.25rem]">
                  <div className="mr-[0.50rem] flex items-center justify-center gap-[2.88rem] md:mr-0 md:flex-col">
                    <Input
                      color="black_900_02"
                      size="md"
                      name="Frame 119"
                      placeholder={`Search Industry`}
                      value={searchBarValue16}
                      onChange={(e) => setSearchBarValue16(e.target.value)}
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
                        searchBarValue16?.length > 0 ? (
                          <CloseSVG
                            onClick={() => setSearchBarValue16("")}
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
                  <ChipView
                    options={chipOptions}
                    setOptions={setChipOptions}
                    values={selectedChipOptions}
                    setValues={setSelectedChipOptions}
                    className="flex flex-wrap gap-[1.13rem]"
                  >
                    {(option) => (
                      <React.Fragment key={option.index}>
                        {option.isSelected ? (
                          <div
                            onClick={option.toggle}
                            className="flex h-[2.50rem] cursor-pointer flex-row items-center gap-[0.63rem] whitespace-pre-wrap rounded-[20px] border border-solid border-black-900_02 bg-black-900_33 px-[1.25rem] text-[0.75rem] font-light text-black-900_02"
                          >
                            <span>{option.label}</span>
                            <Img
                              src="img_phofficechairfill.svg"
                              width={20}
                              height={20}
                              alt="Ph:office-chair-fill"
                              className="h-[1.25rem] w-[1.25rem]"
                            />
                          </div>
                        ) : (
                          <div
                            onClick={option.toggle}
                            className="flex h-[2.50rem] cursor-pointer flex-row items-center gap-[0.63rem] rounded-[20px] border border-solid border-black-900_02 px-[1.25rem] text-[0.75rem] font-light text-black-900_02"
                          >
                            <span>{option.label}</span>
                            <Img
                              src="img_phofficechairfill.svg"
                              width={20}
                              height={20}
                              alt="Ph:office-chair-fill"
                              className="h-[1.25rem] w-[1.25rem]"
                            />
                          </div>
                        )}
                      </React.Fragment>
                    )}
                  </ChipView>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xs relative mt-[-9.38rem] flex flex-col items-end md:px-[1.25rem]">
          <div className="flex w-[22%] flex-col gap-[1.13rem] rounded-[14px] bg-black_amp_white-white px-[1.88rem] py-[3.13rem] md:w-full md:py-[1.25rem] sm:p-[1.25rem]">
            <div className="flex flex-col items-start gap-[0.38rem]">
              <Heading size="heading2xl" as="h2" className="text-[1.19rem] font-semibold">
                All Filters
              </Heading>
              <div className="h-[0.06rem] w-full self-stretch bg-black-900_02" />
            </div>
            <div>
              <div className="flex flex-col gap-[1.25rem]">
                <div className="flex flex-col items-start">
                  <div className="mr-[0.63rem] flex items-center justify-between gap-[1.25rem] self-stretch md:mr-0">
                    <Heading size="text6xl" as="h3" className="text-[1.13rem] font-medium">
                      Sector
                    </Heading>
                    <Img
                      src="img_arrow_up_black_900_02.svg"
                      width={18}
                      height={18}
                      alt="Arrow Up"
                      className="h-[1.13rem]"
                    />
                  </div>
                  <div className="mt-[0.75rem] flex flex-col items-start gap-[1.50rem] self-stretch">
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
                  <Heading as="h4" className="mt-[1.38rem] text-[1.00rem] font-medium !text-indigo-a200">
                    More
                  </Heading>
                  <div className="mt-[1.00rem] h-[0.06rem] w-full self-stretch bg-black-900_02" />
                </div>
                <div className="flex flex-col gap-[3.25rem] sm:gap-[1.63rem]">
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
                      value={searchBarValue15}
                      onChange={(e) => setSearchBarValue15(e.target.value)}
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
                        searchBarValue15?.length > 0 ? (
                          <CloseSVG
                            onClick={() => setSearchBarValue15("")}
                            height={26}
                            width={26}
                            fillColor="#000000ff"
                          />
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
        </div>
      </div>
      <div className="absolute bottom-[2%] left-0 right-0 mx-[4.50rem] flex flex-1 flex-col items-start gap-[1.75rem] md:mx-0">
        <Heading size="text6xl" as="h2" className="text-[1.13rem] font-medium">
          Recommented Colleges as per test result
        </Heading>
        <div className="mr-[20.00rem] grid grid-cols-4 gap-[1.63rem] self-stretch md:mr-0 md:grid-cols-2 sm:grid-cols-1">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data.map((d, index) => (
              <UserProfile3 {...d} key={"frame472" + index} />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
