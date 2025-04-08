"use client";

import { ChipView, Heading, Img } from "./..";
import React from "react";

export default function UserProfile({
  userName = "Game Devoluper",
  userRating = "4.1",
  userReviews = "2K+ Reviews",
  ...props
}) {
  const [chipOptions, setChipOptions] = React.useState(() => [
    { value: 1, label: `Software Product` },
    { value: 2, label: `Private` },
    { value: 3, label: `Bussiness` },
  ]);
  const [selectedChipOptions, setSelectedChipOptions] = React.useState([]);

  return (
    <div {...props} className={`${props.className} flex flex-col w-full`}>
      <div className="flex flex-col gap-[1.63rem] self-stretch rounded-[16px] bg-black_amp_white-white p-[1.25rem]">
        <div className="flex flex-col gap-[0.13rem]">
          <div className="flex flex-col items-start gap-[1.13rem]">
            <Img
              src="img_rectangle_755.png"
              width={82}
              height={82}
              alt="Rectangle 755"
              className="h-[5.13rem] w-[48%] rounded-[16px] object-contain"
            />
            <Heading size="heading3xl" as="h5" className="text-[1.25rem] font-semibold">
              {userName}
            </Heading>
          </div>
          <div className="flex justify-center gap-[0.50rem]">
            <Img
              src="img_fluent_star_20_filled_black_900_02.svg"
              width={20}
              height={20}
              alt="Fluent Star 20 Filled"
              className="h-[1.25rem]"
            />
            <Heading as="p" className="text-[1.00rem] font-normal">
              {userRating}
            </Heading>
            <div className="h-[1.25rem] w-[0.06rem] bg-black-900_02" />
            <Heading as="p" className="text-[1.00rem] font-normal">
              {userReviews}
            </Heading>
          </div>
        </div>
        <ChipView
          options={chipOptions}
          setOptions={setChipOptions}
          values={selectedChipOptions}
          setValues={setSelectedChipOptions}
          className="mx-[0.88rem] flex flex-wrap gap-x-[0.50rem] gap-y-[0.75rem]"
        >
          {(option) => (
            <React.Fragment key={option.index}>
              {option.isSelected ? (
                <div
                  onClick={option.toggle}
                  className="flex h-[1.38rem] cursor-pointer flex-row items-center whitespace-pre-wrap rounded-[10px] border border-solid border-gray-700 bg-gray-800_33 px-[0.38rem] text-[0.81rem] text-gray-800"
                >
                  <span>{option.label}</span>
                </div>
              ) : (
                <div
                  onClick={option.toggle}
                  className="flex h-[1.38rem] cursor-pointer flex-row items-center rounded-[10px] border-[1.1px] border-solid border-gray-700 px-[0.38rem] text-[0.81rem] text-gray-800"
                >
                  <span>{option.label}</span>
                </div>
              )}
            </React.Fragment>
          )}
        </ChipView>
      </div>
    </div>
  );
}
