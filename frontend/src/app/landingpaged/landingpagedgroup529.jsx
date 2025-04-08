import { Img, Button, Text, Heading } from "../../components";
import React from "react";
import Link from "next/link";

export default function LandingpagedGroup529() {
  return (
    <div className="flex justify-center self-stretch">
      <div className="container-xs flex items-center justify-center px-[3.50rem] md:flex-col md:px-[1.25rem]">
        <div className="flex flex-1 flex-col items-start gap-[1.13rem] md:self-stretch">
          <Heading
            size="heading4xl"
            as="h1"
            className="!font-mulish text-[4.25rem] font-extrabold leading-[4.63rem] !text-black_amp_white-white md:text-[3.00rem]"
          >
            <>
              We help you
              <br />
              to find your <br />
              Career
            </>
          </Heading>
          <Text
            as="p"
            className="w-[72%] !font-mulish text-[0.88rem] font-normal leading-[1.25rem] !text-black_amp_white-white md:w-full"
          >
            Lorem ipsum odor amet, consectetuer adipiscing elit. Non facilisis lectus habitant tortor eu vel. Donec
            facilisi magna senectus lectus.
          </Text>
          <Link href="/signupd">
            <Button color="amber_A400" size="3xl" shape="round" className="min-w-[6.75rem] rounded px-[1.25rem]">
              Register
            </Button>
          </Link>
        </div>
        <Img
          src="img_satisfied_lovel.png"
          width={496}
          height={662}
          alt="Satisfied Lovel"
          className="h-[41.38rem] w-[42%] object-contain md:w-full"
        />
      </div>
    </div>
  );
}
