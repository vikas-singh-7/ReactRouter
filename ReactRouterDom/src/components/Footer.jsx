import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="font-semibold text-xl grid grid-cols-12 gap-4 p-4 fixed bottom-0 right-0 left-0">
        <div className="flex items-center justify-center col-span-4 bg-blue-600 rounded-md h-[70px]">
          copyrights by vikas
        </div>
        <div className="flex items-center justify-center col-span-4 bg-blue-600 rounded-md h-[70px]">
          github@vikas-7
        </div>
        <div className="flex items-center justify-center col-span-4 bg-blue-600 rounded-md h-[70px]">
          street-124
        </div>
      </div>
    </footer>
  );
};

export default Footer;
