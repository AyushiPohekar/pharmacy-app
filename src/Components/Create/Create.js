import React from 'react';
import "./Create.css";
import DiamondIcon from "@mui/icons-material/Diamond";
import { AiOutlineArrowRight } from 'react-icons/ai';


const Create = () => {
  return (
  <>
  <div className='symboldiv'></div>
  <div className='symboldivText'>CAPSULE BUSINESS</div>
  <div className='creatediv'>
    <div className='firstdiv'>
        <div className='showdiv'>Show open</div>
        {/* <div className='Sliderdiv'>Slider</div> */}
        <button className='gobtn'><span>Go Premium</span> <DiamondIcon fontSize="small" className='diicon'/></button>
    </div>
    <div className='seconddiv'>
        <p className='order'>Orders</p>
        <AiOutlineArrowRight/>
        <p className='secondtext'> Create new Order</p>
    </div>
    <div className='thirddiv'>
        <div>1</div>
        <div>2</div>
        <div>3</div>
       
    </div>
    <div className='thirddiv'>third</div>
  </div>
  </>
  )
}

export default Create