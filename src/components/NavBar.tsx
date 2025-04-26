import { useEffect, useState } from "react";
import { navbarType } from "../types/GeneralTypes";
import EditableInput from "./EditableInput";

function NavBar({
  title,
  options,
  textColor,
  titleColor,
  dropDownTextColor,
}: navbarType) {
  const { 0: isOpen, 1: setIsOpen } = useState<boolean>(false);
  const { 0: screenWidth, 1: setScreenWidth } = useState<number>(
    window.innerWidth
  );

  useEffect(() => {
    function resizeScreen() {
      setScreenWidth(window.innerWidth);
    }

    document.addEventListener("resize", resizeScreen);

    return () => document.removeEventListener("resize", resizeScreen);
  }, [setScreenWidth]);

  return (
    <nav className="bg-transparent max-md:relative max-w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <h2 className="flex items-center space-x-3 rtl:space-x-reverse">
          <span
            className="self-center text-3xl font-semibold whitespace-nowrap"
            style={{ color: titleColor || textColor }}
          >
            {title}
          </span>
        </h2>

        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex cursor-pointer items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-expanded={isOpen}
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`w-full md:block max-md:absolute max-md:top-full max-md:px-4 max-md:right-0 max-md:left-0 z-10 md:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul
            className={`font-medium flex flex-col p-4 mt-4  border rounded-lg max-md:bg-[#f9f9f9] md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0`}
          >
            {options.map((option: string) => (
              <li
                key={option}
                className={`py-2 px-3 rounded-sm`}
                style={{
                  color:
                    dropDownTextColor && screenWidth < 768
                      ? dropDownTextColor
                      : textColor,
                }}
              >
                <EditableInput defaultValue={option} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
