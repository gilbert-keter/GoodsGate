"use client";

import { Typography } from "@material-tailwind/react";
import AboutCard from "@/components/about-card";

const PRODUCT_INFO = [
  {
    title: "Exclusive Products!",
    description:
      "Explore a curated selection of high-quality products sourced directly from trusted suppliers around the globe.",
    subTitle: "Product Showcase",
  },
  {
    title: "Exceptional Deals!",
    description:
      "Take advantage of exclusive deals and discounts available only through GoodsGate's marketplace.",
    subTitle: "Offers & Discounts",
  },
];

export function AboutGoodsGate() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
      <Typography
        variant="h6"
        className="text-center mb-2"
        color="orange"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        About GoodsGate
      </Typography>

      <Typography
        variant="h3"
        className="text-center"
        color="blue-gray"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        Why Shop with Us?
      </Typography>

      <Typography
        variant="lead"
        className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-500"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        Welcome to GoodsGate, your gateway to a world of quality products and
        unbeatable prices. Whether you are a consumer looking for exclusive
        finds or a business seeking reliable suppliers, GoodsGate offers a
        unique shopping experience tailored to your needs.
      </Typography>

      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {PRODUCT_INFO.map((props, idx) => (
          <AboutCard key={idx} {...props} />
        ))}
        <div className="md:col-span-2">
          <AboutCard
            title="Trusted Network!"
            subTitle="Community"
            description="Join our community of shoppers and sellers, and connect with industry-leading suppliers to build lasting relationships."
          />
        </div>
      </div>
    </section>
  );
}

export default AboutGoodsGate;
