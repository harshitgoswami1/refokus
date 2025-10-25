import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, start, para, hover }) {
  return (
    <div
      className={` bg-zinc-800 p-5 rounded-xl ${hover} text-zinc-50 ${width} min-h-52 `}
    >
      <div className="w-full">
        <div className="w-full flex text-white justify-between items-center">
          <h3>Lorem.</h3>
          <a href="">
            <IoIosArrowRoundForward />
          </a>
        </div>
        <h1 className="text-3xl font-normal mt-3">Lorem, ipsum.</h1>
      </div>
      <div className="down w-full mt-25 flex flex-row justify-between">
        {start === true ? (
          <>
            <div>
              <h1 className="text-6xl font-semibold tracking-tight leading-none">
                Start a project
              </h1>
              <button className="rounded-full border-[1px] border-zinc-50 px-5 py-2 mt-4">
                Contact Us
              </button>
            </div>
          </>
        ) : null}

        {para && (
          <p className="text-zinc-500 font-medium text-sm mt-25">
            Lorem ipsum dolor sit amet.
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
