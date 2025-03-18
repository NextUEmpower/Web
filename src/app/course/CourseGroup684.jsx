import UserProfile5 from "../../components/UserProfile5";
import React, { Suspense } from "react";

const data = [
  { headingText: "Heading Here" },
  { headingText: "Heading Here" },
  { headingText: "Heading Here" },
  { headingText: "Heading Here" },
  { headingText: "Heading Here" },
  { headingText: "Heading Here" },
  { headingText: "Heading Here" },
  { headingText: "Heading Here" },
];

export default function CourseGroup684() {
  return (
    <div>
      <div className="mr-[20.75rem] grid grid-cols-4 gap-[1.50rem] gap-y-[2.00rem] md:mr-0 md:grid-cols-2 sm:grid-cols-1">
        <Suspense fallback={<div>Loading feed...</div>}>
          {data.map((d, index) => (
            <UserProfile5 {...d} key={"group839" + index} />
          ))}
        </Suspense>
      </div>
    </div>
  );
}
