import { Button, Text, Img } from "./..";
import React from "react";

export default function EventDetails({
  eventTitle = "Title of Event",
  eventDescription = "About the eventAbout the eventAbout the eventAbout the event",
  viewMoreButtonText = "View More",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex items-center self-stretch gap-[0.63rem] flex-1`}>
      <Img
        src="img_rectangle_110434.png"
        width={128}
        height={104}
        alt="Rectangle 110434"
        className="h-[6.50rem] w-[50%] rounded object-contain"
      />
      <div className="flex flex-1 flex-col gap-[0.50rem]">
        <div className="flex flex-col items-start gap-[0.38rem]">
          <Text size="text5xl" as="p" className="text-[1.06rem] font-normal">
            {eventTitle}
          </Text>
          <Text size="texts" as="p" className="w-full text-[0.56rem] font-normal leading-[0.69rem] !text-gray-800_02">
            {eventDescription}
          </Text>
        </div>
        <Button
          color="deep_purple_500"
          size="xs"
          shape="round"
          className="self-stretch rounded-[5px] px-[2.13rem] sm:px-[1.25rem]"
        >
          {viewMoreButtonText}
        </Button>
      </div>
    </div>
  );
}
