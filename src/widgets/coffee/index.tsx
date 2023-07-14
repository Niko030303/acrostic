import React from "react";

const BuyMeACoffee = () => {
  return (
    <a
      href="https://www.buymeacoffee.com/niko030303"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 px-2 py-1 text-lg font-medium text-white bg-orange-500 rounded-md shadow-sm transition duration-300 ease-in-out hover:bg-orange-600 hover:text-gray-100 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
    >
      <img
        src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
        alt="Buy me a coffee"
        className="w-6 h-6"
      />
      <span className="font-cursive text-base">Buy me a coffee</span>
    </a>
  );
};

export default BuyMeACoffee;
