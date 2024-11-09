import { Typography, Button, IconButton } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = ["Home", "About Us", "Our Team", "Products", "Contact"];

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        <div className="flex !w-full py-10 mb-5 md:mb-20 flex-col justify-center !items-center bg-blue-200 max-w-6xl mx-auto rounded-2xl p-5 ">
          <Typography
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            className="text-2xl md:text-3xl text-center font-bold "
            color="orange"
          >
            Join us today and enjoy exclusive offers!
          </Typography>
          <Typography
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            color="white"
            className=" md:w-7/12 text-center my-3 !text-base"
          >
            Take advantage of our special deals to get quality products for your
            business needs.
          </Typography>
          <div className="flex w-full md:w-fit gap-3 mt-2 flex-col md:flex-row">
            <Button
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              color="white"
              size="md"
            >
              Shop Now
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <Typography
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            as="a"
            href="#"
            variant="h6"
            className="text-gray-900"
            style={{ color: "orange" }}
          >
            GoodsGate
          </Typography>
          <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {LINKS.map((link, index) => (
              <li key={index}>
                <Typography
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                  as="a"
                  href="#"
                  variant="small"
                  color="white"
                  className="font-normal !text-gray-700 hover:!text-gray-900 transition-colors"
                >
                  {link}
                </Typography>
              </li>
            ))}
          </ul>
          <div className="flex w-fit justify-center gap-2">
            <IconButton
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              size="sm"
              color="gray"
              variant="text"
            >
              <i className="fa-brands fa-twitter text-lg" />
            </IconButton>
            <IconButton
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              size="sm"
              color="gray"
              variant="text"
            >
              <i className="fa-brands fa-youtube text-lg" />
            </IconButton>
            <IconButton
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              size="sm"
              color="gray"
              variant="text"
            >
              <i className="fa-brands fa-instagram text-lg" />
            </IconButton>
            <IconButton
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              size="sm"
              color="gray"
              variant="text"
            >
              <i className="fa-brands fa-linkedin text-lg" />
            </IconButton>
          </div>
        </div>
        <Typography
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          color="blue-gray"
          className="flex items-center justify-center text-center mt-12 font-normal !text-gray-700"
        >
          &copy; {CURRENT_YEAR} Powered by{" "}
          <small
            className=" ml-2"
            style={{ fontSize: "20px", color: "orange" }}
          >
            {" "}
            GoodsGate
          </small>
          . All rights reserved.
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
