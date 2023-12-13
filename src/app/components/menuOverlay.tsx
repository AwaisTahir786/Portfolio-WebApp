import React from "react";
import Navlink from "./navLink";

function MenuOverlay({links}:any) {
  console.log(links);

  return (
    <ul className="flex flex-col py-3 items-center">
      {links.map((link: any, index: any) => (
        <li key={index}>
          <Navlink title={link.title} path={link.path} />
        </li>
    
      ))}
    </ul>
  );
}

export default MenuOverlay;
