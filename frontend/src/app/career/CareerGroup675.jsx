import UserProfile1 from "../../components/UserProfile1";
import React, { Suspense } from "react";

const data = [
  {
    headingText: "Heading Here",
    descriptionText: "It is a long established fact that a reader will be distracted by the readable",
    buttonText: "Click Here",
  },
  {
    headingText: "Heading Here",
    descriptionText: "It is a long established fact that a reader will be distracted by the readable",
    buttonText: "Click Here",
  },
  {
    headingText: "Heading Here",
    descriptionText: "It is a long established fact that a reader will be distracted by the readable",
    buttonText: "Click Here",
  },
  {
    headingText: "Heading Here",
    descriptionText: "It is a long established fact that a reader will be distracted by the readable",
    buttonText: "Click Here",
  },
  {
    headingText: "Heading Here",
    descriptionText: "It is a long established fact that a reader will be distracted by the readable",
    buttonText: "Click Here",
  },
  {
    headingText: "Heading Here",
    descriptionText: "It is a long established fact that a reader will be distracted by the readable",
    buttonText: "Click Here",
  },
  {
    headingText: "Heading Here",
    descriptionText: "It is a long established fact that a reader will be distracted by the readable",
    buttonText: "Click Here",
  },
  {
    headingText: "Heading Here",
    descriptionText: "It is a long established fact that a reader will be distracted by the readable",
    buttonText: "Click Here",
  },
];

export default function CareerGroup675() {
  return (
    <div>
      <div className="mr-[21.25rem] grid grid-cols-4 gap-[1.50rem] gap-y-[1.75rem] md:mr-0 md:grid-cols-2 sm:grid-cols-1">
        <Suspense fallback={<div>Loading feed...</div>}>
          {data.map((d, index) => (
            <UserProfile1 {...d} key={"group799" + index} />
          ))}
        </Suspense>
      </div>
    </div>
  );
}
