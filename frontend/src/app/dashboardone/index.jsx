import { Heading, Img, Text } from "../../components";
import Header from "../../components/Header";
import UserProfileCompletion from "../../components/UserProfileCompletion";
import React from "react";

export default function DashboardOnePage() {
  return (
    <div className="relative h-[77.13rem] w-full bg-gray-200_01 md:h-auto">
      <div className="flex flex-1 flex-col items-center">
        <div className="flex flex-col items-center self-stretch bg-gradient1 py-[2.75rem] md:py-[1.25rem]">
          <div className="container-xs mb-[2.63rem] flex flex-col items-start md:px-[1.25rem]">
            <Header className="self-stretch" />
            <div className="mt-[4.25rem] flex flex-col gap-[0.25rem] self-stretch">
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
                  Ann Mary{" "}
                </Heading>
              </div>
              <div className="mb-[1.50rem] flex">
                <Text size="h1_sub" as="p" className="text-[1.13rem] font-normal !text-gray-200">
                  Let&#39;s Start Your Career Journey!
                </Text>
              </div>
            </div>
            <Text as="p" className="mt-[1.50rem] text-[0.88rem] font-normal !text-black_amp_white-white">
              Dashboard
            </Text>
          </div>
        </div>
        <div className="container-xs relative mt-[-3.88rem] flex flex-col items-end md:px-[1.25rem]">
          <div className="h-[37.50rem] w-[22%] rounded-[14px] bg-black_amp_white-white" />
        </div>
      </div>
      <Img
        src="img_rectangle_750.png"
        width={974}
        height={140}
        alt="Rectangle 750"
        className="absolute left-[5%] top-[26%] m-auto h-[8.75rem] w-[70%] rounded-[14px] object-contain"
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 mx-[4.50rem] my-auto flex h-max flex-1 flex-col items-start gap-[1.00rem] md:mx-0">
        <div className="mr-[20.25rem] flex gap-[1.75rem] self-stretch md:mr-0 md:flex-col">
          <UserProfileCompletion
            profileCompletionTitle="Profile Completion"
            profileCompletionDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
            completeProfileButtonText="Complete Profile"
            completionPercentage="59"
            prop="%"
            completionStatusText="Completed"
          />
          <UserProfileCompletion
            profileCompletionTitle="Profile Completion"
            profileCompletionDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
            completeProfileButtonText="Complete Profile"
            completionPercentage="59"
            prop="%"
            completionStatusText="Completed"
          />
        </div>
        <Heading as="h2" className="text-[1.00rem] font-normal">
          Suggested Career Options
        </Heading>
      </div>
    </div>
  );
}
