import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const CreateMember = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post("http://localhost:5000/members/add", data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("A new member is added");
                    reset()
                }

            })
    };


    return (
        <div>
            <h2>Add a new member</h2>
            <div className="d-flex justify-content-center m-5">
                <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column w-50">
                    <input {...register("name", { required: true })} className="p-3 mb-2" placeholder="Member name" />
                    <input {...register("role", { required: true })} className="p-3 mb-2" placeholder="Member role" />
                    <input {...register("image_url", { required: true })} className="p-3 mb-2" placeholder="Member Image url" />
                    <input type="submit" value="Add member to team" className="p-3 mb-2" />
                </form>
            </div>
        </div>
    );
};

export default CreateMember;