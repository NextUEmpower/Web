import { Button, Text, Img, Heading } from "../../components";
import React from "react";
import Link from "next/link";


export default function TestpagewtwoGroup577() {
  return (
    <div className="mt-[1.63rem] flex w-full flex-col gap-[3.13rem] px-[2.75rem] md:px-[1.25rem]">
      <div className="ml-[0.75rem] flex flex-col items-start gap-[2.50rem] md:ml-0">
        <Link href="/testpagewone" target="_blank">
          <Button
            color="deep_purple_500"
            size="xl"
            shape="round"
            className="min-w-[5.25rem] rounded-[5px] px-[1.13rem]"
          >
            Back
          </Button>
        </Link>
        <div className="flex self-stretch rounded-md bg-blue_gray-100_02">
          <div className="h-[0.75rem] w-[10%] rounded-md bg-deep_purple-500_01" />
        </div>
        <div className="mr-[0.88rem] flex flex-col gap-[1.63rem] self-stretch md:mr-0">
          <div className="flex flex-col items-start gap-[0.75rem]">
            <Heading size="heading3xl" as="h1" className="text-[1.25rem] font-semibold">
              Question 1
            </Heading>
            <Heading
              as="h2"
              className="w-full text-justify !font-mulish text-[1.00rem] font-normal leading-[1.25rem] !text-gray-800_03"
            >
              Lorem ipsum odor amet, consectetuer adipiscing elit. Etiam pharetra integer ullamcorper mauris facilisis.
              Blandit ultrices netus integer feugiat habitasse aliquet erat. Molestie rutrum odio penatibus dui duis est
              urna habitasse.
            </Heading>
          </div>
          <div className="flex flex-col gap-[1.13rem]">
            <div className="flex items-start justify-center gap-[1.25rem] md:flex-col">
              <Img src="img_mobile.svg" width={36} height={36} alt="Mobile" className="h-[2.25rem] md:w-full" />
              <Text
                as="p"
                className="w-[96%] self-center text-[0.88rem] font-normal leading-[150%] !text-gray-800_03 md:w-full"
              >
                Lorem ipsum odor amet, consectetuer adipiscing elit. Hac mollis risus penatibus massa praesent a
                pulvinar suspendisse. Mattis nulla finibus delem.
              </Text>
            </div>
            <div className="flex items-start justify-center gap-[1.25rem] md:flex-col">
              <Img
                src="img_contrast_deep_purple_a700_02.svg"
                width={36}
                height={36}
                alt="Contrast"
                className="h-[2.25rem] md:w-full"
              />
              <Text
                size="text3xl"
                as="p"
                className="w-[96%] self-center text-[0.94rem] font-normal leading-[150%] !text-gray-800_03 md:w-full"
              >
                Lorem ipsum odor amet, consectetuer adipiscing elit. Hac mollis risus penatibus massa praesent a
                pulvinar suspendisse. Mattis nulla finibus delem.
              </Text>
            </div>
            <div className="flex items-start justify-center gap-[1.25rem] md:flex-col">
              <Img src="img_mobile.svg" width={36} height={36} alt="Mobile" className="h-[2.25rem] md:w-full" />
              <Text
                as="p"
                className="w-[96%] self-center text-[0.88rem] font-normal leading-[150%] !text-gray-800_03 md:w-full"
              >
                Lorem ipsum odor amet, consectetuer adipiscing elit. Hac mollis risus penatibus massa praesent a
                pulvinar suspendisse. Mattis nulla finibus delem.
              </Text>
            </div>
            <div className="flex items-start justify-center gap-[1.25rem] md:flex-col">
              <Img src="img_contrast.svg" width={36} height={36} alt="Contrast" className="h-[2.25rem] md:w-full" />
              <Text
                as="p"
                className="w-[96%] self-center text-[0.88rem] font-normal leading-[150%] !text-gray-800_03 md:w-full"
              >
                Lorem ipsum odor amet, consectetuer adipiscing elit. Hac mollis risus penatibus massa praesent a
                pulvinar suspendisse. Mattis nulla finibus delem.
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-[1.56rem] sm:flex-col">
        <Link href="/results" target="_blank">
          <Button color="deep_purple_500" size="3xl" shape="round" className="min-w-[10.00rem] rounded px-[1.25rem]">
            Save and Next
          </Button>
        </Link>
        <Button color="deep_purple_500" size="3xl" shape="round" className="min-w-[5.38rem] rounded px-[1.25rem]">
          Reset
        </Button>
        <Link href="/results" target="_blank">
          <Button color="red_700" size="3xl" shape="round" className="min-w-[8.25rem] rounded px-[1.25rem]">
            Submit test
          </Button>
        </Link>
      </div>
    </div>
  );
}
