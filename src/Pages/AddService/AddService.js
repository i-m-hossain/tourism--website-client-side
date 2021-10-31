import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        axios.post("https://cryptic-beach-46798.herokuapp.com/services/add", data)
        .then(res=> {
            if (res.data.insertedId){
                alert("A new service is added");
                reset()
            }
            
        })
    };
   

    return (
        <div>
            <h2>Add a new service</h2>
            <div className="d-flex justify-content-center m-5">
                <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column w-50">
                    <input {...register("title", { required: true })} className="p-3 mb-2" placeholder="Service title" />
                    <input {...register("description", { required: true })} className="p-3 mb-2" placeholder="Service description" />
                    <input {...register("image_url", { required: true })} className="p-3 mb-2" placeholder="Image url" />
                    <input type="submit" value="Add service" className="p-3 mb-2" />
                </form>
            </div>
        </div>
    );
};

export default AddService;