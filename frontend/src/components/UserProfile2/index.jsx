import { Text, Img } from "./..";
import React from "react";

export default function UserProfile2({
  userName = "Name",
  userId = "ID 8956474",
  userPoints = "261 Points",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex justify-center items-center self-stretch gap-[1.75rem] flex-1`}>
      <div className="flex flex-1 items-center justify-center gap-[1.25rem]">
        <Img
          src="img_twemoji_1st_place_medal.svg"
          width={30}
          height={30}
          alt="Twemoji 1st Place Medal"
          className="h-[1.88rem]"
        />
        <div className="flex flex-1 items-center gap-[1.25rem]">
          <div className="h-[2.38rem] w-[2.38rem] rounded-[18px] bg-blue_gray-100_02" />
          <div className="flex flex-1 flex-col items-start justify-center">
            <Text size="textxl" as="p" className="text-[0.75rem] font-normal">
              {userName}
            </Text>
            <Text size="textxl" as="p" className="text-[0.75rem] font-normal">
              {userId}
            </Text>
          </div>
        </div>
      </div>
      <Text size="textxl" as="p" className="text-[0.75rem] font-normal">
        {userPoints}
      </Text>
    </div>
  );
}
