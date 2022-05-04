import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({ item }) => {
    const { id, name, img, supplier_name, price, short_desciption, quantity } = item
    const navigate = useNavigate();

    const navigateToItemDetail = id => {
        navigate(`/item/${id}`);
    }
    return (

        <div>
            <div className='grid-cols-3 container shadow-lg p-3 mb-5 bg-body rounded'>
                <img className='w-100' src={img} alt="" />
                <div className=' d-flex justify-content-between align-items-center px-3 my-2'>
                    <div><h4><i>{name}</i></h4>
                        <h6><b>{supplier_name}</b></h6>
                    </div>
                    <div>
                        <h5>{quantity}</h5>
                        <p><b>Cost: {price}</b></p>
                    </div>
                </div>

                <button onClick={() => navigateToItemDetail(id)} className='btn btn-primary align-items-center' >GET: {name}</button>
            </div>
        </div>
    );
};

export default Item;