import React, { useState } from "react";
import "./Sidebar.css";
import { BiLogOutCircle } from "react-icons/bi";
import { MdCreateNewFolder } from "react-icons/md";
import Modal from "@mui/material/Modal";
import UpperSidebar from "./UpperSidebar";
import SideNavLinks from "./SideNavLinks";
import PopUp from "./PopUp";

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
              <PopUp handleClose={handleClose} />
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
