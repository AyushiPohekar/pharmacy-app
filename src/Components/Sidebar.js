import React, { useState } from "react";
import "./Sidebar.css";
import DiamondIcon from '@mui/icons-material/Diamond';

import { BiLogOutCircle } from "react-icons/bi";
import {
  MdOutlineInventory2,
  MdCopyAll,
  MdContactSupport,
  MdCreateNewFolder,

} from "react-icons/md";
import { TbDiscount2 } from "react-icons/tb";

import { AiOutlineBorderOuter } from "react-icons/ai";


import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import UpperSidebar from "./UpperSidebar";

//mayerial Ui modal style
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
 

  //material Ui Modal states
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const menuItem = [
    {
      path: "/",
      name: "Orders",
      icon: <AiOutlineBorderOuter />,
    },
    {
      path: "/inventory",
      name: "Inventory",
      icon: <MdOutlineInventory2 />,
    },
    {
      path: "/transactions",
      name: "Transactions",
      icon: <MdCopyAll />,
    },
    {
      path: "/offers",
      name: "Offers&Discounts",
      icon: <TbDiscount2 />,
    },
    {
      path: "/premium",
      name: "Premium",
      icon:   <DiamondIcon fontSize="small"/>,
    },
    {
      path: "/support",
      name: "Support",
      icon: <MdContactSupport />,
    },
  ];
  return (
    <div className="Container">
      <div style={{ width: isOpen ? "275px" : "130.9px" }} className="sidebar">
        <div className="upperSidebar">
        <UpperSidebar isOpen={isOpen} toggle={toggle}/>
          
        </div>
        <div className="lowerSidebar">
          <div className="linkdiv">
            
            {menuItem.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className={isOpen ? "link" : "closelink"}
                activeClassName={isOpen?"active":"closeactive"}
              >
                {(isActive) => (
                  <>
                    {/* {isActive && <div className="grrendiv"></div>} */}
                    <div className={isOpen?"itemicon":"closeitemicon"}>{item.icon}</div>
                    <div
                      style={{ display: isOpen ? "block" : "none" }}
                      className="link_text"
                    >
                      {item.name}
                    </div>
                  </>
                )}
              </NavLink>
            ))}
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
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </Typography>
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
