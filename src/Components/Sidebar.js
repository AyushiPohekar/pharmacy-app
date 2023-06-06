import React, { useState } from "react";
import "./Sidebar.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import {BiLogOutCircle} from "react-icons/bi";
import {MdOutlineInventory2,MdCopyAll,MdContactSupport,MdCreateNewFolder} from "react-icons/md"
import {TbDiscount2} from "react-icons/tb";

import {AiOutlineBorderOuter} from "react-icons/ai"
import {GrDiamond} from "react-icons/gr"
import { NavLink } from "react-router-dom";


const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem=[
      {
          path:"/",
          name:"Orders",
          icon:<AiOutlineBorderOuter/>
      },
      {
          path:"/inventory",
          name:"Inventory",
          icon:<MdOutlineInventory2/>
      },
      {
          path:"/transactions",
          name:"Transactions",
          icon:<MdCopyAll/>
      },
      {
          path:"/offers",
          name:"Offers&Discounts",
          icon:<TbDiscount2/>
      },
      {
          path:"/premium",
          name:"Premium",
          icon:<GrDiamond/>
      },
      {
          path:"/support",
          name:"Support",
          icon:<MdContactSupport/>
      }
  ]
  return (
    <div className="Container">
      <div style={{ width: isOpen ? "275px" : "130.9px" }} className="sidebar">
        <div className="upperSidebar">
          <BsThreeDotsVertical className="threedotsicon" onClick={toggle}/>
         <div className="Avatar"></div>
         <div className="Welcome">Welcome,UserName</div>
         <div className="ShopName">Aardhana Medical</div>
        </div>
        <div className="lowerSidebar">
            <div className="linkdiv">
            {
                   menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="link" activeClassName="active">
                    {isActive => (
                      <>
                        {/* {isActive && <div className="grrendiv"></div>} */}
                        <div className="itemicon">{item.icon}</div>
                        <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
                          {item.name}
                        </div>
                      </>
                    )}
                  </NavLink>
                   ))
               }
               {
                isOpen?(<>
                {
                    
                }
                </>):(<>
                </>)
               }
            </div>
            <div className="Creatediv" style={{ display: isOpen ? "block" : "none" }}>
          
                <button> <MdCreateNewFolder/> Create new Order</button>
            </div>
            <div className="logoutDiv">
                <BiLogOutCircle className="logouticon"/>
                <span>Logout</span>
            </div>
        </div>
      </div>

      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
