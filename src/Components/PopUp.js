import { Box } from "@mui/material";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

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
  margin: 0,
};

const PopUp = ({ handleClose }) => {
    const navigate=useNavigate()
  const mockDatabase = ["1234567890", "9876543210", "5555555555"];
  const [phoneNo, setPhoneNo] = useState("");
  const [showerror, setShowerror] = useState(false);
  const [showDeliveryDiv, setShowDeliveryDiv] = useState(false);
  const [deliveryType, setDeliveryType] = useState("");
  const [address, setAddress] = useState("");

  const handlePhoneNoChange = (event) => {
   
    const enteredPhoneNo = event.target.value;
    setPhoneNo(enteredPhoneNo);
  
    if (!mockDatabase.includes(enteredPhoneNo)) {
      setShowerror(true);
      setShowDeliveryDiv(false);
    } else {
      setShowerror(false);
      setShowDeliveryDiv(true);
    }
  };

  const handleDeliveryTypeChange = (event) => {
    setDeliveryType(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleCreateOrder = () => {
    handleClose()
   navigate("/create")
  };



  return (
    <>
      <Box sx={style}>
        <div className="modalnav">
          <div className="modalnavtitle">Create New Order</div>
          <AiOutlineClose
            style={{ color: "white", cursor: "pointer" }}
            onClick={handleClose}
          />
        </div>
        <div className="ContactDiv">
          <div className="ContactDivTitle">Enter Customer Phone No</div>
          <input type="text" value={phoneNo} onChange={handlePhoneNoChange} />
          <div style={{ display: showerror ? "block" : "none" }}>
            <div>Customer Information not found in database</div>
            <button>Send Invite Link</button>
          </div>
          {showDeliveryDiv && <div>
            <div>
            <input
              type="radio"
              name="deliveryType"
              value="standard"
              checked={deliveryType === "standard"}
              onChange={handleDeliveryTypeChange}
            />
            <label htmlFor="standard">Standard</label>
          </div>
          <div>
            <input
              type="radio"
              name="deliveryType"
              value="express"
              checked={deliveryType === "express"}
              onChange={handleDeliveryTypeChange}
            />
            <label htmlFor="express">Express</label>
          </div>
            
          {deliveryType && (
                <>
                  <input type="text" value={address} onChange={handleAddressChange} />
                  <button onClick={handleCreateOrder}>Create New Order</button>
                </>
              )}
            </div>
             
            
            }
        </div>
      </Box>
    </>
  );
};

export default PopUp;
