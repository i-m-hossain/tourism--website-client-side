import axios from "axios";
import { useEffect, useState } from "react";

const useService =()=>{
    const [services, setServices] = useState([])
    useEffect(()=>{
        axios.get('https://cryptic-beach-46798.herokuapp.com/services/')
        .then(res => setServices(res.data))
    },[])

    return[services, setServices]
}
export default useService;