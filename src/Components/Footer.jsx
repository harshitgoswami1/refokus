import React from "react";

function Footer() {
  return (
    <div className="max-w-screen-lg mx-auto text-zinc-50 flex">
      <div className="left">
        <h1 className="text-9xl font-medium">refokus.</h1>
        <div className="text-xs text-zinc-600 flex gap-x-3.5 py-4">
          <h4>Privacy Policy</h4>
          <h4>Cookie Policy</h4>
          <h4>Impressum</h4>
          <h4>Terms</h4>
        </div>
      </div>
      <div className="text-xs text-zinc-600 mx-[80px]">
        <h4 className="mb-10">Socials</h4>
        <h4>Instagram</h4>
        <h4>Linkedin</h4>
        <h4>Twitter(X)</h4>
      </div>
      <div className="text-xs text-zinc-50 ">
        <h4 className="mb-10 text-zinc-600">Sitemap</h4>
        <div className="font-light">
          <h4 className="py-0.5">Home</h4>
          <h4 className="py-0.5">Work</h4>
          <h4 className="py-0.5">Careers</h4>
          <h4 className="py-0.5">Contact</h4>
        </div>
      </div>
      <div className="text-xs px-9 font-light">
        <p>Refokus is a pioneering digital agency driven by design and empowered by technology</p>
        <button className="">Enterprise Partner</button>
      </div>
      <div className="left"></div>
    </div>
  );
}

export default Footer;
