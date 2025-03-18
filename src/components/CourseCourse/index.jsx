import { Heading, Img } from "./..";
import React from "react";

export default function CourseCourse({ ...props }) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col w-[24%] md:w-full p-[0.25rem] md:px-[1.25rem] bg-black_amp_white-white rounded-[14px]`}
    >
      <div className="mb-[7.75rem] flex flex-col gap-[0.63rem] self-stretch">
        <div className="rounded-tl-[14px] rounded-tr-[14px] bg-blue_gray-100_02 p-[0.75rem]">
          <div className="mb-[2.63rem] flex items-start justify-between gap-[1.25rem]">
            <div className="h-[3.13rem] w-[3.13rem] self-center rounded-[14px] border border-solid border-black-900_02 bg-black_amp_white-white" />
            <Img src="img_favorite.svg" width={20} height={18} alt="Favorite" className="h-[1.13rem]" />
          </div>
        </div>
        <div className="mx-[0.50rem] px-[2.63rem] md:px-[1.25rem]">
          <div className="flex justify-center">
            <Heading as="p" className="!font-inter text-[1.00rem] font-medium">
              Heading Here
            </Heading>
          </div>
        </div>
      </div>
    </div>
  );
}
