import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';

function Btn(props) {
  // const [propsdata, updateProps] = useState({})

  // useEffect(()=>{
  //   axios
  //     .get("http://localhost:8080/propsProxy/propsdb")
  //     .then((res)=>{
  //       updateProps(()=>{
  //         return res.data
  //       });
  //     })
  // },[])
  // return (
  //   <div className='reusableBtn'>
  //     <div className='d-flex'>
  //       <a href={propsdata[props.type].btnLink} target={propsdata[props.type].btnTarget} rel="noopener noreferrer" className={`border border-${propsdata[props.type].btnColor} rounded-pill py-3 px-4 text-decoration-none text-${propsdata[props.type].btnColor} d-block`}>{propsdata[props.type].btnContent}</a>
  //     </div>
  //   </div>
  // );
}

export default Btn;