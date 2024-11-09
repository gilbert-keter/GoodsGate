"use client";

import React from "react";
import {
  Typography,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const FAQS = [
  {
    title: "1. How do I place an order on GoodsGate?",
    desc: "To place an order, simply browse our selection of products, add items to your cart, and proceed to checkout. You'll be guided through the payment process to complete your order.",
  },
  {
    title: "2. What payment methods are accepted?",
    desc: "GoodsGate accepts a variety of payment methods, including credit and debit cards, PayPal, and other secure online payment options. You can choose the payment method that best suits you at checkout.",
  },
  {
    title: "3. How long does shipping take?",
    desc: "Shipping times vary depending on your location and the shipping option you select at checkout. We strive to deliver all orders within 5-7 business days, with express shipping available for faster delivery.",
  },
  {
    title: "4. Can I return a product if I'm not satisfied?",
    desc: "Yes, GoodsGate offers a hassle-free return policy. If you're not satisfied with your purchase, you can return it within 30 days for a full refund or exchange, as long as it’s in its original condition.",
  },
  {
    title: "5. How can I track my order?",
    desc: "Once your order has been shipped, you'll receive a tracking number via email. You can use this number on our website to track the status and expected delivery of your order.",
  },
];

export function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            variant="h1"
            color="orange"
            className="mb-4"
          >
            Frequently Asked Questions
          </Typography>
          <Typography
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            variant="lead"
            className="mx-auto mb-24 lg:w-3/5 !text-gray-500"
          >
            Welcome to GoodsGate’s FAQ section. Here you will find answers to
            the most common questions to help improve your shopping experience
            with us.
          </Typography>
        </div>

        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {FAQS.map(({ title, desc }, key) => (
            <Accordion
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              key={key}
              open={open === key + 1}
              onClick={() => handleOpen(key + 1)}
            >
              <AccordionHeader
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                className="text-left text-blue-200 hover:text-blue-500"
              >
                {title}
              </AccordionHeader>
              <AccordionBody>
                <Typography
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                  color="blue-gray"
                  className="font-normal text-gray-500"
                >
                  {desc}
                </Typography>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
