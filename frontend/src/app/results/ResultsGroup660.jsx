import { Heading } from "../../components";
import UserProfile from "../../components/UserProfile";
import React, { Suspense } from "react";

const data = [
  { userName: "Game Devoluper", userRating: "4.1", userReviews: "2K+ Reviews" },
  { userName: "Graphics Design", userRating: "4.1", userReviews: "2K+ Reviews" },
  { userName: "Medicine", userRating: "4.1", userReviews: "2K+ Reviews" },
  { userName: "Graphics Design", userRating: "4.1", userReviews: "2K+ Reviews" },
  { userName: "Game Devoluper", userRating: "4.1", userReviews: "2K+ Reviews" },
  { userName: "Graphics Design", userRating: "4.1", userReviews: "2K+ Reviews" },
  { userName: "Medicine", userRating: "4.1", userReviews: "2K+ Reviews" },
  { userName: "Graphics Design", userRating: "4.1", userReviews: "2K+ Reviews" },
];

export default function ResultsGroup660() {
  return (
    <div className="flex flex-col items-center">
      <div className="container-xs flex flex-col items-start gap-[3.00rem] md:px-[1.25rem]">
        <Heading size="text6xl" as="h2" className="text-[1.13rem] font-medium">
          Recommented Colleges as per test result
        </Heading>
        <div className="mr-[20.88rem] grid grid-cols-4 gap-[1.50rem] self-stretch md:mr-0 md:grid-cols-2 sm:grid-cols-1">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data.map((d, index) => (
              <UserProfile {...d} key={"frame191" + index} />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
