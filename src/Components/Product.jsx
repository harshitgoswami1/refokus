import React from "react";
import Button from "./Button";

function Product({val, mover, count,hover}) {


  return (
    <div className="w-full h-15[rem] text-white">
      <div onMouseEnter={()=>{mover(count)}} className={`max-w-screen-lg mx-auto py-20 flex items-center justify-between`}>
        <h1 className="text-6xl capitalize font-medium">{val.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-10">{val.description}</p>
          <div className="flex gap-5">
          {val.live && <Button />}
          {val.case && <Button title={val.title} />}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Product;

