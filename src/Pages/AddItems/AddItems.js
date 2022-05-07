
import React from 'react';
import { useForm } from "react-hook-form";
import frm_bg from '../../Images/frm-bg.jpg'
const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => { console.log(result) })
    }
    return (
        <div>
            <h1 className='text-center fs-3 fst-italic mb-2 mt-5'>IMPORT ITEM DETAILS</h1>
            <div className='container d-flex justify-center  gap-2' >

                <div className='w-50'>
                    <img src={frm_bg} alt="" />
                </div>
                <form className='d-flex flex-column gap-2 w-50' onSubmit={handleSubmit(onSubmit)}>

                    <input placeholder='Item Name' className='border border-dark p-2 rounded' {...register("name", { required: true, maxLength: 20 })} />
                    <input placeholder='Supplier Name' className='border border-dark p-2 rounded' {...register("supplier_name")} />
                    <input placeholder='Quantity' className='border border-dark p-2 rounded' type="number" {...register("quantity")} />
                    <input placeholder='Price' className='border border-dark p-2 rounded' type="number" {...register("price")} />
                    <input placeholder='Image URL' className='border border-dark py-2 rounded' {...register("img")} />
                    <textarea placeholder='Description' className='border border-dark p-2 rounded' {...register("short_description", { required: true, maxLength: 20 })} />



                    <input className='btn btn-outline-dark py-2 rounded w-50 mx-auto' type="submit" value="ADD ITEM" />
                </form>
            </div>
        </div>


    );
};

export default AddItems;