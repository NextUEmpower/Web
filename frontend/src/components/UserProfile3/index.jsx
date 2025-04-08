import { Button, Text, RatingBar, Heading, Img } from "./..";
import React from "react";

export default function UserProfile3({
  headingText = "Heading Here",
  descriptionText = "It is a long established fact that a reader will be distracted by the readable",
  buttonText = "Click Here",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col w-full gap-[0.50rem] p-[0.25rem] bg-black_amp_white-white rounded-[14px]`}
    >
      <div className="flex items-start justify-between gap-[1.25rem] self-stretch rounded-tl-[14px] rounded-tr-[14px] bg-blue_gray-100_02 p-[0.75rem]">
        <div className="mb-[2.63rem] h-[3.13rem] w-[3.13rem] rounded-[14px] border border-solid border-black-900_02 bg-black_amp_white-white" />
        <Img src="img_favorite.svg" width={20} height={18} alt="Favorite" className="h-[1.13rem]" />
      </div>
      <div className="mx-[0.50rem] flex flex-col gap-[3.00rem] self-stretch">
        <div className="flex flex-col items-center gap-[0.50rem]">
          <div className="mx-[2.63rem] flex justify-center self-stretch">
            <Heading as="p" className="!font-inter text-[1.00rem] font-medium">
              {headingText}
            </Heading>
          </div>
          <RatingBar value={1} isEditable={true} size={12} className="flex gap-[0.63rem]" />
          <Text
            size="textxs"
            as="p"
            className="self-stretch text-center !font-inter text-[0.50rem] font-normal leading-[0.56rem] !text-gray-700_04"
          >
            {descriptionText}
          </Text>
        </div>
        <Button shape="round" className="self-stretch rounded-[5px] px-[2.13rem] font-inter sm:px-[1.25rem]">
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
