import React from "react";
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

import { AiOutlineBorderOuter } from "react-icons/ai";

import { NavLink } from "react-router-dom";

const SideNavLinks = ({ isOpen }) => {
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
      icon: <DiamondIcon fontSize="small" />,
    },
    {
      path: "/support",
      name: "Support",
      icon: <MdContactSupport />,
    },
  ];
  return (
    <>
      {isOpen ? (
        <>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeClassName="active"
            >
              {(isActive) => (
                <>
                  {/* {isActive && <div className="grrendiv"></div>} */}
                  <div className="itemicon">{item.icon}</div>
                  <div className="link_text">{item.name}</div>
                </>
              )}
            </NavLink>
          ))}
        </>
      ) : (
        <>
          {
            menuItem.map((item,index)=>(
                <NavLink to={item.path} key={index} className="closelink" activeClassName="close-active">
                        <div className="closeitemicon">{item.icon}</div>
                        <div className="closelink_text">{item.name}</div>
                </NavLink>
            ))
          }
        </>
      )}
    </>
  );
};

export default SideNavLinks;
