import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';

function EventTitle(props) {
  const [propsdata, updateProps] = useState({})

  useEffect(()=>{
    axios
      .get("http://localhost:8080/propsProxy/propsdb")
      .then((res)=>{
        const property = {...res.data};
        updateProps(property);
      },[])
  })
  return (
    <div>
      <div className='eventSpace text-center'>
        {/* <strong className='eventStrong'>{propsdata[props.type].strong}</strong>
        <p className='eventType'>{propsdata[props.type].eventType}</p>
        <h2 className='eventTitle'>{propsdata[props.type].h2}</h2> */}
      </div>
    </div>
  );
}

export default EventTitle;