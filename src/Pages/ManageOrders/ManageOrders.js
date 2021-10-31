

import axios from 'axios';
import { Table} from 'react-bootstrap';
import useOrders from '../../hooks/useOrders';
import OrderItem from './OrderItem';
const ManageOrders = () => {
    const [orders, setOrders] = useOrders()
    
    const handleDeleteOrder = (id) => {
        const confirm = window.confirm('Are you sure want to delete?');
        if (confirm) {
            return axios.delete(`http://localhost:5000/orders/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        const restOrders = orders.filter(order => order._id !== id)
                        console.log(restOrders);
                        console.log(id);
                        setOrders(restOrders)
                    }
                })
        }
    }
    

    return (
        <div className="m-5">
            {
                orders.length > 0 ? <Table striped bordered hover size="sm" >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Image</th>
                            <th>status</th>
                            <th> Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <OrderItem order={order} index={index} key={order._id} handleDeleteOrder={handleDeleteOrder}></OrderItem>)

                        }

                </tbody>
                </Table>
                :
<h4>Orders not found</h4>
           }
        </div >
    );
};

export default ManageOrders;