import { Button, Text, Img, CheckBox, RatingBar, Heading } from "./..";
import React from "react";

export default function UserProfile5({
  headingText = "Heading Here",
  rating,
  mentorIcon,
  mentorName,
  timeToComplete,
  seatIcon,
  availableSeat,
  buttonText,
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col justify-center w-full gap-[0.63rem] bg-black_amp_white-white rounded-[14px]`}
    >
      <div className="flex items-start justify-between gap-[1.25rem] self-stretch rounded-tl-[14px] rounded-tr-[14px] bg-blue_gray-100_02 p-[0.75rem]">
        <div className="mb-[2.63rem] h-[3.13rem] w-[3.13rem] rounded-[14px] border border-solid border-black-900_02 bg-black_amp_white-white" />
        <Img src="img_favorite.svg" width={20} height={18} alt="Favorite" className="h-[1.13rem]" />
      </div>
      <div className="mx-[0.50rem] flex flex-col items-center gap-[0.75rem] self-stretch">
        <div className="self-stretch px-[2.63rem] md:px-[1.25rem]">
          <div className="flex justify-center">
            <Heading as="p" className="!font-inter text-[1.00rem] font-medium">
              {headingText}
            </Heading>
          </div>
        </div>
        {!!rating ? <RatingBar value={1} isEditable={true} size={12} className="flex gap-[0.63rem]" /> : null}
        <div className="flex flex-col items-center gap-[0.25rem] self-stretch">
          <div className="flex items-center self-stretch">
            {!!mentorIcon ? (
              <Img src={mentorIcon} width={12} height={12} alt="Ph Office Chair Fill" className="h-[0.75rem]" />
            ) : null}
            {!!mentorName ? (
              <Text size="textxs" as="p" className="ml-[0.25rem] !font-inter text-[0.50rem] font-normal">
                {mentorName}
              </Text>
            ) : null}
          </div>
          {!!timeToComplete ? (
            <CheckBox
              size="xs"
              name="Time to complete"
              label="Time to complete"
              id="Timetocomplete"
              className="gap-[0.25rem] pr-[2.13rem] font-inter text-[0.50rem] text-black-900_02 sm:pr-[1.25rem]"
            />
          ) : null}
          <div className="flex items-center self-stretch">
            {!!seatIcon ? (
              <Img src={seatIcon} width={12} height={12} alt="Ph Office Chair Fill" className="h-[0.75rem]" />
            ) : null}
            {!!availableSeat ? (
              <Text size="textxs" as="p" className="ml-[0.25rem] !font-inter text-[0.50rem] font-normal">
                {availableSeat}
              </Text>
            ) : null}
          </div>
        </div>
        {!!buttonText ? (
          <Button shape="round" className="self-stretch rounded-[5px] px-[2.13rem] font-inter sm:px-[1.25rem]">
            {buttonText}
          </Button>
        ) : null}
      </div>
    </div>
  );
}
