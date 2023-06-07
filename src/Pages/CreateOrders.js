import React from 'react'
import Create from '../Components/Create/Create'
import "./Pages.css"
import { useLocation } from 'react-router-dom';
const CreateOrders = () => {
  const location = useLocation();
  const state=location.state.deliveryType;

  return (
    <div className='CreatePage'><Create state={state}/></div>
  )
}

export default CreateOrders