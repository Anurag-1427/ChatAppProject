import { Menu } from "@mui/material";
import React from "react";

const FileMenu = ({ anchorE1 }) => {
  return (
    <Menu open anchorEl={anchorE1}>
      <div
        style={{
          width: "10rem",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, soluta
        atque! Maiores rerum, libero commodi temporibus soluta iste eum dicta
        enim cupiditate odit eveniet modi ut ullam
      </div>
    </Menu>
  );
};

export default FileMenu;
