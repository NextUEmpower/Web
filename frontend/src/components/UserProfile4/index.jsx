import { Text, Heading, Img } from "./..";
import React from "react";

export default function UserProfile4({
  headingText = "Heading Here",
  descriptionText = "It is a long established fact that a reader will be distracted by the readable",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col w-[24%] md:w-full p-[0.25rem] md:px-[1.25rem] bg-black_amp_white-white rounded-[14px]`}
    >
      <div className="mb-[6.13rem] flex flex-col gap-[0.50rem] self-stretch">
        <div className="flex justify-end rounded-tl-[14px] rounded-tr-[14px] bg-blue_gray-100_02 p-[0.75rem]">
          <Img src="img_favorite.svg" width={20} height={18} alt="Favorite" className="mb-[4.63rem] h-[1.13rem]" />
        </div>
        <div className="mx-[3.13rem] flex justify-center">
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
      </div>
    </div>
  );
}
