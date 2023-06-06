import React, { useState } from "react";
import "./Sidebar.css";
import DiamondIcon from "@mui/icons-material/Diamond";

import { BiLogOutCircle } from "react-icons/bi";
import {
  MdOutlineInventory2,
  MdCopyAll,
  MdContactSupport,
  MdCreateNewFolder,
} from "react-icons/md";
import { TbDiscount2 } from "react-icons/tb";

import { AiOutlineBorderOuter, AiOutlineClose } from "react-icons/ai";

import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import UpperSidebar from "./UpperSidebar";
import SideNavLinks from "./SideNavLinks";

//mayerial Ui modal style
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "620.72px",
  background: "#FFFFFF",
  border: "1px solid #CECECE",
  borderRadius: "15px",
  p: 0,
  margin:0
};

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  //material Ui Modal states
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="Container">
      <div style={{ width: isOpen ? "275px" : "130.9px" }} className="sidebar">
        <div className="upperSidebar">
          <UpperSidebar isOpen={isOpen} toggle={toggle} />
        </div>
        <div className="lowerSidebar">
          <div className="linkdiv">
            <SideNavLinks isOpen={isOpen} />
          </div>
          <div
            className="Creatediv"
            style={{ display: isOpen ? "block" : "none" }}
          >
            <button onClick={handleOpen}>
              <MdCreateNewFolder /> Create new Order
            </button>

            {/* material ui modal */}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="modalnav">
                  <div className="modalnavtitle">Create New Order</div>
                  <AiOutlineClose style={{color:"white",cursor:"pointer"}} onClick={handleClose}/>
                  
                </div>
                <div className="ContactDiv">
                    <div>Enter Customer Phone No</div>
                    <input/>
                  </div>
              </Box>
            </Modal>
          </div>
          <div className="logoutDiv">
            <BiLogOutCircle className="logouticon" />
            <span>Logout</span>
          </div>
        </div>
      </div>

      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
