import React from "react";
import { motion } from "framer-motion";

function Marquee({ imagesurl, direction }) {
  return (
    <div className="flex w-full py-5 overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        transition={{ ease: "linear", duration: 23 , repeat: Infinity}}
        animate = {{x: direction === "left" ? "-100%" : "0"}}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
        {imagesurl.map((url) => (
          <img src={url} className=" w-[6vw] flex flex-shrink-0" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        transition={{ ease: "linear", duration: 23 , repeat: Infinity}}
        animate = {{x: direction === "left" ? "-100%" : "0"}}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
        {imagesurl.map((url) => (
          <img src={url} className=" w-[6vw] flex flex-shrink-0" />
        ))}
      </motion.div>

    </div>
  );
}

export default Marquee;
