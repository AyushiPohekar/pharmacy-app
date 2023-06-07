import { Box } from "@mui/material";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {BiPlus} from "react-icons/bi"
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

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
  const navigate = useNavigate();
  const mockDatabase = ["1234567890", "9876543210", "5555555555"];
  const [phoneNo, setPhoneNo] = useState("");
  const [showerror, setShowerror] = useState(false);
  const [showDeliveryDiv, setShowDeliveryDiv] = useState(false);
  const [deliveryType, setDeliveryType] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");

  //adding Address
  const [showAddAddress, setShowAddAddress] = useState(false);
  const [newAddress, setNewAddress] = useState("");

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

  const handleCreateOrder = () => {
    handleClose();
    navigate("/create");
  };

  //mock data for address

  const [addresses, setAddresses] = useState([
    "123 Street, City, Country",
    "456 Avenue, Town, Country",
    "789 Road, Village, Country",
  ]);

  const handleAddAddressClick = () => {
    setShowAddAddress(true);
  };

  const handleAddAddress = (e) => {
    e.preventDefault();
    if (newAddress.trim() !== "") {
      setAddresses([...addresses, newAddress]);
      setNewAddress("");
      setShowAddAddress(false);
    }
  };

  return (
    <>
      <Box sx={style} className="modalbox">
        <div className="modalnav">
          <div className="modalnavtitle">Create New Order</div>
          <AiOutlineClose
            style={{ color: "white", cursor: "pointer" }}
            onClick={handleClose}
          />
        </div>
        <div className="PopUpSecondDiv">
          <div className="ContactDiv">
            <div className="ContactDivTitle">Enter Customer Phone No</div>
            <input type="text" value={phoneNo} onChange={handlePhoneNoChange} />
          </div>
          <div
            style={{ display: showerror ? "block" : "none" }}
            className="ErrorDiv"
          >
            <div className="Error">
              Customer Information not found in database
            </div>
            <button className="btn">Send Invite Link</button>
          </div>
          {showDeliveryDiv && (
            <div className="ShowDeliveryDiv">
              <div className="ShowDeliveryDivTitle">Select delivery type:</div>
              <div>
                <input
                  type="radio"
                  name="deliveryType"
                  value="pickup"
                  checked={deliveryType === "pickup"}
                  onChange={handleDeliveryTypeChange}
                  className="radiobtn"
                />
                <label htmlFor="pickup" className="InputDiv">
                  pickup
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="deliveryType"
                  value="Home delivery"
                  checked={deliveryType === "Home delivery"}
                  onChange={handleDeliveryTypeChange}
                  className="radiobtn"
                />
                <label htmlFor="Home delivery" className="InputDiv">
                  Home delivery
                </label>
              </div>
            </div>
          )}
          <div className="AddressDiv">
            {deliveryType && (
              <>
                <div className="AddressTitle">Select delivery address:</div>
                {addresses.map((address, index) => {
                  return (
                    <>
                      <div className="AdressInput">
                        <input
                          type="radio"
                          id={`address-${index}`}
                          name="address"
                          value={address}
                          checked={selectedAddress === address}
                          onChange={() => setSelectedAddress(address)}
                        />
                        <label htmlFor={`address-${index}`}>{address}</label>
                      </div>
                    </>
                  );
                })}
             {
                showAddAddress&&(<form onSubmit={handleAddAddress}><input
                    type="text"
                    value={newAddress}
                    onChange={(e) => setNewAddress(e.target.value)}
                  /></form>)
             }
               <div onClick={handleAddAddressClick} className="AddAddress">
                   <BiPlus/> Add New Address
                  </div>
                <button onClick={handleCreateOrder} className="btn" style={{marginLeft:"30%"}}>Create New Order</button>
              </>
            )}
          </div>
        </div>
      </Box>
    </>
  );
};

export default PopUp;
