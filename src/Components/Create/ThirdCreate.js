import React from "react";
import { SlCalender } from "react-icons/sl";
import {BsFillPersonFill, BsFillTelephoneFill} from "react-icons/bs";
import {FiTruck} from "react-icons/fi"

const ThirdCreate = ({ state }) => {
  return (
    <>
      <div className="boxdiv">
        <p className="parafirst">ORD-0123(New Order)</p>
        <p className="parasecond">
          <SlCalender style={{marginRight:'4px'}}/>
            07 june 2023 14:40
        </p>
      </div>
      <div className="boxdivsecond">
        <div className="boxdiv">
          <p className="parafirst">payment Mode</p>
          <p className="parasecond">COD</p>
        </div>
        <div className="paymentsecond"></div>
        <div className="boxdiv">
          <p className="parafirst">Delivery Type </p>
          <p className="parasecond"><FiTruck style={{marginRight:"4px"}}/>{state}</p>
        </div>
      </div>
      <div className="boxdivsecond">
        <div className="boxdiv">
          <p className="parafirst">Consumer No</p>
          <p className="parasecond"><BsFillTelephoneFill style={{marginRight:"4px"}}/>55555555</p>
        </div>
        <div className="paymentsecond"></div>
        <div className="boxdiv">
          <p className="parafirst">Consumer Name </p>
          <p className="parasecond"><BsFillPersonFill style={{marginRight:"4px"}}/>Ayushi Rhutwik</p>
        </div>
      </div>
    </>
  );
};

export default ThirdCreate;
