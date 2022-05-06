import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Item.css"

const Item = ({ item }) => {

    const navigate = useNavigate();

    const navigateToItemDetail = id => {
        navigate(`/item/${id}`);
    }
    const { _id, name, img, supplier_name, price, short_description, quantity } = item
    return (

        <div>
            <div className='grid-cols-3 container shadow-lg p-3 mb-5 bg-body rounded imag'>
                <img className='image-set' src={img} alt="" />
                <div className=' d-flex justify-content-between align-items-center px-3 my-2'>
                    <div><h4><i>{name}</i></h4>
                        <h6><b>{supplier_name}</b></h6>
                    </div>
                    <div>
                        <h5>{quantity}<small><i>ITEMS</i></small></h5>
                        <p><b>Cost: {price}</b></p>
                    </div>

                </div>
                <p>{short_description}</p>

                <button onClick={() => navigateToItemDetail(_id)} className='btn btn-primary align-items-center' >MANAGE</button>
                <button onClick={() => navigateToItemDetail(_id)} className='btn btn-danger align-items-center' >Delete</button>
            </div>
        </div>
    );
};

export default Item;