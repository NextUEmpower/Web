"use client";

import { Button, ChipView, Text, Heading, Img } from "./..";
import React from "react";

export default function UserProfile1({
  headingText = "Heading Here",
  descriptionText = "It is a long established fact that a reader will be distracted by the readable",
  buttonText = "Click Here",
  ...props
}) {
  const [chipOptions, setChipOptions] = React.useState(() => [
    { value: 1, label: `Feature 1` },
    { value: 2, label: `asaasasasasaa` },
    { value: 3, label: `Feature 1` },
    { value: 4, label: `Feature 1` },
  ]);
  const [selectedChipOptions, setSelectedChipOptions] = React.useState([]);

  return (
    <div
      {...props}
      className={`${props.className} flex flex-col justify-center w-full gap-[0.63rem] p-[0.25rem] bg-black_amp_white-white rounded-[14px]`}
    >
      <div className="flex justify-end self-stretch rounded-tl-[14px] rounded-tr-[14px] bg-blue_gray-100_02 p-[0.75rem]">
        <Img src="img_favorite.svg" width={20} height={18} alt="Favorite" className="mb-[4.63rem] h-[1.13rem]" />
      </div>
      <div className="mx-[0.50rem] flex flex-col gap-[0.88rem] self-stretch">
        <div className="flex flex-col gap-[0.50rem]">
          <div className="mx-[2.63rem] flex justify-center">
            <Heading as="p" className="!font-inter text-[1.00rem] font-medium">
              {headingText}
            </Heading>
          </div>
          <Text
            size="textxs"
            as="p"
            className="text-center !font-inter text-[0.50rem] font-normal leading-[0.56rem] !text-gray-700_04"
          >
            {descriptionText}
          </Text>
          <ChipView
            options={chipOptions}
            setOptions={setChipOptions}
            values={selectedChipOptions}
            setValues={setSelectedChipOptions}
            className="mx-[1.38rem] flex flex-wrap gap-x-[0.38rem] gap-y-[0.50rem]"
          >
            {(option) => (
              <React.Fragment key={option.index}>
                {option.isSelected ? (
                  <div
                    onClick={option.toggle}
                    className="flex h-[1.13rem] cursor-pointer flex-row items-center whitespace-pre-wrap rounded-lg border border-solid border-gray-400_06 bg-gray-400_33 px-[0.38rem] font-inter text-[0.63rem] text-gray-400_06"
                  >
                    <span>{option.label}</span>
                  </div>
                ) : (
                  <div
                    onClick={option.toggle}
                    className="flex h-[1.13rem] cursor-pointer flex-row items-center rounded-lg border border-solid border-gray-400_06 px-[0.38rem] font-inter text-[0.63rem] text-gray-400_06"
                  >
                    <span>{option.label}</span>
                  </div>
                )}
              </React.Fragment>
            )}
          </ChipView>
        </div>
        <Button shape="round" className="self-stretch rounded-[5px] px-[2.13rem] font-inter sm:px-[1.25rem]">
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
