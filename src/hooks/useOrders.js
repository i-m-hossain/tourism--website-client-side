import axios from 'axios';
import  { useEffect, useState } from 'react';
const useOrders =() =>{
    const [orders, setOrders] = useState([])
    useEffect(() => {
        axios.get(`https://cryptic-beach-46798.herokuapp.com/orders`)
            .then(res => setOrders(res.data))
    }, [])
    return [orders, setOrders]
}
export default useOrders;