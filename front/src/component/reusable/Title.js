import React, { useCallback } from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';

function Title(props) {
  const [propsdata, updateProps] = useState(null)

  const axiosData = useCallback(async()=>{
      const response = await axios.get("http://localhost:8080/propsProxy/propsdb")
      updateProps(response.data)
  },[]);

  useEffect(()=>{
    axiosData()
  },[axiosData]);

  return (
    <h2 className='titleSpace text-center'>
      {
        propsdata && propsdata[props.type].h2
      }
    </h2>
  );
}

export default Title;