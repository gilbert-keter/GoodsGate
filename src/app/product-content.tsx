"use client";

import { Tab, Tabs, TabsHeader } from "@material-tailwind/react";
import ProductContentCard from "@/components/products-content-card";

const PRODUCT_CONTENT = [
  {
    title: "Smartphone X10",
    des: "Experience cutting-edge technology with the new Smartphone X10. Featuring an advanced camera, high-speed processor, and sleek design.",
    name: "ElectroMart",
    position: "Top Seller",
    panel: "Electronics",
    img: "/image/smartphone.png",
  },
  {
    title: "Classic Leather Jacket",
    des: "Upgrade your wardrobe with this premium leather jacket. Perfect for any occasion, combining style and comfort effortlessly.",
    name: "FashionHub",
    position: "Top Seller",
    panel: "Fashion",
    img: "/image/leather-jacket.webp",
  },
  {
    title: "Stainless Steel Blender",
    des: "Blend your favorite smoothies and more with this high-power, durable blender. A must-have for every kitchen.",
    name: "HomePlus",
    position: "Top Seller",
    panel: "Home Goods",
    img: "/image/blender.webp",
  },
];

export function ProductContent() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <Tabs value="Electronics" className="mb-8">
        <div className="w-full flex mb-8 flex-col items-center">
          <TabsHeader
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            className="h-12 w-72 md:w-96"
          >
            <Tab
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              style={{ color: "orange" }}
              value="Electronics"
              className="font-medium"
            >
              Electronics
            </Tab>
            <Tab
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              style={{ color: "orange" }}
              value="Fashion"
              className="font-medium"
            >
              Fashion
            </Tab>
            <Tab
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              style={{ color: "orange" }}
              value="Home Goods"
              className=" font-medium"
            >
              Home Goods
            </Tab>
          </TabsHeader>
        </div>
      </Tabs>
      <div className="mx-auto container">
        {PRODUCT_CONTENT.map((props, idx) => (
          <ProductContentCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default ProductContent;
