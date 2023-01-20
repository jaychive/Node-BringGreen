import React, { useCallback } from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';

function EventTitle(props) {
  const [propsdata, updateProps] = useState(null)

  const axiosData = useCallback(async()=>{
      const response = await axios.get("http://localhost:8080/propsProxy/propsdb")
      updateProps(response.data)
  },[]);

  useEffect(()=>{
    axiosData()
  },[axiosData]);

  return (
    <div>
      <div className='eventSpace text-center'>
        <strong className='eventStrong'>{propsdata&&propsdata[props.type].strong}</strong>
        <p className='eventType'>{propsdata&&propsdata[props.type].eventType}</p>
        <h2 className='eventTitle'>{propsdata&&propsdata[props.type].h2}</h2>
      </div>
    </div>
  );
}

export default EventTitle;