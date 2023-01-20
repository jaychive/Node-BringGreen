import React, { useCallback } from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';

function Btn(props) {
  const [propsdata, updateProps] = useState(null)

  const axiosData = useCallback(async()=>{
      const response = await axios.get("http://localhost:8080/propsProxy/propsdb")
      updateProps(response.data)
  },[]);

  useEffect(()=>{
    axiosData()
  },[axiosData]);

  return (
    <div className='reusableBtn'>
      <div className='d-flex'>
        <a href={propsdata&&propsdata[props.type].btnLink} target={propsdata&&propsdata[props.type].btnTarget} rel="noopener noreferrer" className={`border border-${propsdata&&propsdata[props.type].btnColor} rounded-pill py-3 px-4 text-decoration-none text-${propsdata&&propsdata[props.type].btnColor} d-block`}>{propsdata&&propsdata[props.type].btnContent}</a>
      </div>
    </div>
  );
}

export default Btn;