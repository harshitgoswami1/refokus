import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="max-w-screen-lg mx-auto bg-zinc-900 text-white flex justify-between items-center border-b-[1px] border-zinc-800">
      <div className="nleft  flex items-center">
        <img
          className="w-auto h-auto p-10 object-contain"
          src=".\src\assets\refokuslogo.svg"
          alt=""
        />
        <div className="Links flex gap-14 ml-20">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) => (
            <a key={index} className="text-sm flex items-center gap-1" href="#">
              {index === 1 && (
                <span
                  style={{ boxShadow: "0 0 0.55em #00FF19" }}
                  className="inline-block w-1 h-1 rounded-full bg-green-500 mx-0.5"
                ></span>
              )}
              {elem}
              {elem.length === 0 && (
                <span className="w-0.5 h-10 bg-zinc-600"></span>
              )}
            </a>
          ))}
        </div>
      </div>

      <div >
        <Button />
      </div>
    </div>
  );
}

export default Navbar;
