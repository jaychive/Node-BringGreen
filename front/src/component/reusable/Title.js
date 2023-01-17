import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';

function Title(props) {
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
    <div></div>
    // <h2 className='titleSpace text-center'>{propsdata[props.type].h2}</h2>
  );
}

export default Title;