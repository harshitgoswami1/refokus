import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";


function Work() {
  
  const { scrollYProgress } = useScroll()


  const [images,setImages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "40%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "45%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "60%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "55%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "60%",
      left: "50%",
      isActive: false,
    },
  ]);


  scrollYProgress.on("change",(data)=>{
    function imagesShow(arr){
      // previous state jo initially array thi wo aaegi jisme arr.indexOf index -1 hojaega fir state change hoti rahegi jaise jaise ham aage badhenge
      setImages(prev => (
        prev.map((item,index) => (
          arr.indexOf(index) === -1 ? (
            {...item, isActive: false}
          )
          : {...item,isActive:true}
        ))
      ))
    }



    switch(Math.floor(data*100)){
      case 0:
        imagesShow([])
        break
      case 1:
        imagesShow([0])
        break
      case 2:
        imagesShow([0,1])
        break
      case 3:
        imagesShow([0,1,2])
        break
      case 4:
        imagesShow([0,1,2,3])
        break
      case 5:
        imagesShow([0,1,2,3,4])
        break


    }
  })








  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="relative  bg-zinc-900 text-white text-center">
        <h1 className=" text-[25vw] font-medium select-none">Work</h1>
        <div className="absolute top-0 w-full h-full">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  key={index}
                  className=" absolute w-60 rounded-lg  -translate-x-[50%] -translate-y-[50%]"
                  src={elem.url}
                  style={{ top: elem.top, left: elem.left }}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
