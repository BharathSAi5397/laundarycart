import React from 'react';
import OrderFooter from './orderfooter';
import "./orderfooter.css"
import OrderHeader from './orderHeader';
import "./order.css"
import Verticalnav from './verticalnav';
import {  Route, Routes } from 'react-router-dom';
import Tester from './tester';
import { Link } from 'react-router-dom'

// govind

const CreateOrder=()=> {
  return (
    <>
        <OrderHeader />
        <div className='ordergridContainer'>
            <div className='verticalnav'>
                <Verticalnav />
            </div>
            <div className='ordercomponent'>
                sfdjashvashvbjh
                {/* remove the code in this div when you make a copy */}
                

            </div>

        </div>
        <OrderFooter />
    </>
    )
}

export default CreateOrder;