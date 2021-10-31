import axios from 'axios';
import { Table } from 'react-bootstrap';
import useService from '../../hooks/useService';
import ServiceItem from './ServiceItem';
const ManageService = () => {
    const [services, setServices] = useService([])

    const handleDeleteService = (id) => {
        const confirm = window.confirm('Are you sure want to delete?');
        if (confirm) {
            return axios.delete(`https://cryptic-beach-46798.herokuapp.com/services/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        const restServices = services.filter(service => service._id !== id)
                        setServices(restServices)
                    }
                })
        }
    }


    return (
        <div className="m-5">
            {
                services.length > 0 ? <Table striped bordered hover size="sm" >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th> Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            services.map(
                                (service, index) =>
                                    <ServiceItem
                                        index={index}
                                        key={service._id}
                                        service={service}
                                        handleDeleteService={handleDeleteService}
                                    >

                                    </ServiceItem>)
                        }

                    </tbody>
                </Table>
                    :
                    <h4> Service not found </h4>
            }
        </div >
    );
};

export default ManageService;