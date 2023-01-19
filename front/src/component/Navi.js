import { useEffect, useState } from "react";
import Scrollspy from "react-scrollspy";
import axios from 'axios';
import { useCallback } from "react";

function Navi(props){
    const [navdata, updateNav] = useState([])

    const axiosData = useCallback(async()=>{
      const response = await axios.get("http://localhost:8080/navProxy/navdb");
      updateNav(response.data.navDB)
    },[])

    useEffect(()=>{
      axiosData();
    },[axiosData]);

    return(
        <Scrollspy className={ 'd-md-flex mb-0 gnb_ul ' + props.cls + ' ' + props.toggle } items={[]} currentClassName="is-current">
        {
          navdata.map((item, index) =>{
            return(
              <li id={ 'naivID'+index } key={ 'naivID'+index } ><a href={'#'+item.navLink} className="text-decoration-none text-center px-4">{item.navText}</a></li>
            )
          })
        }
      </Scrollspy>
    )
  }

  export default Navi;