import React from "react";

export function PrimaryButton({
  iconFilePath,
  buttonText,
  iconAlternativeText,
  buttonURL,
}) {
  return (
    <a
      className="inline-flex items-center justify-center w-full h-12 max-w-md px-4 py-2 font-medium text-white rounded-md shadow-md outline-none hover:bg-custom_blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 whitespace-nowrap bg-custom_blue-400"
      href={buttonURL}
      rel="noreferrer"
      target="_blank"
    >
      {iconFilePath && (
        <img
          className="w-6 h-6 mr-4 text-white"
          src={iconFilePath}
          alt={iconAlternativeText}
        />
      )}
      <strong className="">{buttonText}</strong>
    </a>
  );
}

export function SecondaryButton({
  iconFilePath,
  buttonText,
  iconAlternativeText,
  buttonURL,
}) {
  return (
    <a
      className="inline-flex items-center justify-center w-full h-12 max-w-md px-4 py-2 font-medium bg-white rounded-md shadow-md outline-none focus:outline-none focus:ring-2 focus:ring-opacity-75 whitespace-nowrap "
      href={buttonURL}
      rel="noreferrer"
      target="_blank"
    >
      {iconFilePath && (
        <img
          className="w-6 h-6 mr-4 text-black"
          src={iconFilePath}
          alt={iconAlternativeText}
        />
      )}
      <strong className="text-black">{buttonText}</strong>
    </a>
  );
}
