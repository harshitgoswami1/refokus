import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

// Import your videos
import vid1 from "../assets/videos/vid1.mp4";
import vid2 from "../assets/videos/vid2.mp4"; 
import vid3 from "../assets/videos/vid3.webm";
import vid4 from "../assets/videos/vid4.mp4"; 
import vid5 from "../assets/videos/vid5.mp4"; 

import { div } from "motion/react-client";


function Products() {
  const products = [
    {
      title: "Rainfall",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et nisi ipsam labore in beatae nemo!",
      live: true,
      case: false,
      video: vid1,
    },
    {
      title: "TTR",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et nisi ipsam labore in beatae nemo",
      live: true,
      case: false,
      video: vid2,
    },
    {
      title: "Layout",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et nisi ipsam labore in beatae nemo!",
      live: true,
      case: true,
      video: vid3,
    },
    {
      title: "Yahoo!",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et nisi ipsam labore in beatae nemo!",
      live: true,
      case: false,
      video: vid4,
    },
    {
      title: "Cula",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et nisi ipsam labore in beatae nemo",
      live: true,
      case: true,
      video: vid5,
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 19);
  };
  return (
    <div className="bg-zinc-900 min-h-screen text-white mt-32 relative">
      {products.map((val, index) => (
        <Product key={index} hover={"bg-violet-900"} val={val} mover={mover} count={index} />
      ))}

      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute w-[23rem] h-[19rem] left-1/2 -translate-x-[60%] rounded-md overflow-hidden"
        >
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
              className={`w-full h-full rounded-xl bg-zinc-900`}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-3xl"
              >
                <source src={product.video} type="video/mp4" />
              </video>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
