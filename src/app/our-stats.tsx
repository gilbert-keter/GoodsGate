"use client";

import { Typography } from "@material-tailwind/react";
import StatsCard from "@/components/stats-card";

const STATS = [
  {
    count: "10,000+",
    title: "Products Available",
  },
  {
    count: "500+",
    title: "Happy Customers",
  },
  {
    count: "100+",
    title: "Brands",
  },
  {
    count: "24/7",
    title: "Customer Support",
  },
];

export function OurStats() {
  return (
    <section className="container mx-auto grid gap-10 px-8 py-44 lg:grid-cols-1 lg:gap-20 xl:grid-cols-2 xl:place-items-center">
      <div>
        <Typography
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          variant="h6"
          color="orange"
          className="mb-6 font-medium"
        >
          Our Stats
        </Typography>
        <Typography
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          className="text-5xl font-bold leading-tight lg:w-3/4 text-blue-200"
          // color="blue-200"
        >
          GoodsGate Highlights
        </Typography>
        <Typography
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          variant="lead"
          className="mt-3 w-full !text-gray-500 lg:w-9/12"
        >
          Discover a wide variety of quality products, trusted brands, and
          unparalleled customer support, all available at GoodsGate to enhance
          your shopping experience.
        </Typography>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-8 gap-x-28">
          {STATS.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurStats;
