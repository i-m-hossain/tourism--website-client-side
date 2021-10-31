import axios from 'axios';
import  { useEffect, useState } from 'react';
const useOrders =() =>{
    const [orders, setOrders] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/orders`)
            .then(res => setOrders(res.data))
    }, [])
    return [orders, setOrders]
}
export default useOrders;