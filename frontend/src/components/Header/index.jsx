import { Img, Button, Text, Heading } from "./..";
import Link from "next/link";
import React from "react";

export default function Header({ ...props }) {
  return (
    <header {...props} className={`${props.className} flex md:flex-col justify-between items-center gap-[1.25rem]`}>
      <Img
        src="img_header_logo.png"
        width={138}
        height={46}
        alt="Header Logo"
        className="h-[2.88rem] w-[8.63rem] object-contain"
      />
      <div className="mx-auto flex w-full max-w-[68.38rem] items-center justify-between gap-[1.25rem] md:px-[1.25rem] sm:flex-col">
        <div className="flex">
          <ul className="flex flex-wrap items-center gap-[1.50rem]">
            <li>
              <Link href="/dashboardone" className="text-shadow-ts flex items-center justify-center rounded-[5px] bg-yellow-600">
                <Heading
                  as="p"
                  className="px-[0.63rem] py-[0.25rem] text-[1.00rem] font-normal !text-deep_purple-a700_02"
                >
                  Dashboard
                </Heading>
              </Link>
            </li>
            <li>
              <Link href="/career" className="cursor-pointer">
                <Text
                  size="menu_text"
                  as="p"
                  className="px-[0.63rem] py-[0.25rem] text-[0.94rem] font-normal !text-black_amp_white-white hover:rounded-[5px] hover:bg-yellow-600 hover:!text-deep_purple-a700_02"
                >
                  Explore
                </Text>
              </Link>
            </li>
            <li>
              <Link href="/elevate" className="cursor-pointer">
                <Text
                  size="menu_text"
                  as="p"
                  className="px-[0.63rem] py-[0.25rem] text-[0.94rem] font-normal !text-black_amp_white-white hover:rounded-[5px] hover:bg-yellow-600 hover:!text-deep_purple-a700_02"
                >
                  Elevate
                </Text>
              </Link>
            </li>
            <li>
              <Link href="/community" className="cursor-pointer">
                <Text
                  size="menu_text"
                  as="p"
                  className="px-[0.63rem] py-[0.25rem] text-[0.94rem] font-normal !text-black_amp_white-white hover:rounded-[5px] hover:bg-yellow-600 hover:!text-deep_purple-a700_02"
                >
                  Community
                </Text>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-[1.75rem]">
          <Link href="#">
            <Button color="yellow_600" size="4xl" shape="circle" className="w-[2.50rem] rounded-[20px] px-[0.38rem]">
              <Img src="img_vector.svg" width={24} height={26} />
            </Button>
          </Link>
          <Link href="/college">
            <Img
              src="img_ellipse_990.png"
              width={40}
              height={40}
              alt="Ellipse 990"
              className="h-[2.50rem] rounded-[20px] object-cover"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
