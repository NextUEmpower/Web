import { Button, Text, Img } from "@/components";
import LandingpagedGroup529 from "./Landingpaged";
import Link from "next/link";
import React from "react";

export default function LandingpageDPage() {
  return (
    <div className="flex w-full flex-col items-center gap-[6.88rem] bg-gradient md:gap-[5.13rem] sm:gap-[3.44rem]">
      <div className="container-xs mt-[1.63rem] md:px-[1.25rem]">
        <header className="flex items-center justify-between gap-[1.25rem] md:flex-col">
          <Img
            src="img_header_logo.png"
            width={138}
            height={46}
            alt="Header Logo"
            className="h-[2.88rem] w-[8.63rem] object-contain"
          />
          <div className="flex w-[84%] items-center justify-between gap-[1.25rem] md:w-full sm:flex-col">
            <div className="flex p-[0.25rem]">
              <ul className="flex flex-wrap gap-[2.75rem]">
                <li>
                  <Link href="#">
                    <Text size="menu_text" as="p" className="text-[0.94rem] font-normal !text-black_amp_white-white">
                      Home
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Text size="menu_text" as="p" className="text-[0.94rem] font-normal !text-black_amp_white-white">
                      About
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Text size="menu_text" as="p" className="text-[0.94rem] font-normal !text-black_amp_white-white">
                      Contact
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Text size="menu_text" as="p" className="text-[0.94rem] font-normal !text-black_amp_white-white">
                      Community
                    </Text>
                  </Link>
                </li>
              </ul>
            </div>
            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
              <Button
                color="amber_A400"
                size="xl"
                variant="outline"
                shape="round"
                className="min-w-[4.63rem] rounded-md !border-[1.3px] px-[0.75rem]"
              >
                Login
              </Button>
            </a>
          </div>
        </header>
      </div>
      <LandingpagedGroup529 />
    </div>
  );
}
