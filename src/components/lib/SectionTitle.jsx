import React from "react";

export default function SectionTitle({
  preTitle,
  title,
  titleDescription,
  fontSize,
}) {
  return (
    <div className="w-full px-4 mt-12">
      <div className="mx-auto max-w-[640px] text-center">
        {preTitle && (
          <span className="block mb-2 text-lg font-semibold text-primary">
            {preTitle}
          </span>
        )}
        {title && (
          <h2
            className={
              "mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]"
            }
            style={{ fontSize: `${fontSize}px` }}
          >
            {title}
          </h2>
        )}
        {titleDescription && (
          <p className="text-base font-medium text-body-color">
            {titleDescription}
          </p>
        )}
      </div>
    </div>
  );
}
