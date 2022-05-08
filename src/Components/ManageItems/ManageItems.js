import React from 'react';
import useItems from '../../hooks/useItems';
import { BsArrowRight } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';

const ManageItems = () => {
    const [items, setItems] = useItems();
    const itemDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data =>
                    console.log(data));
            const remaining = items.filter(item => item._id !== id);
            setItems(remaining);

        }
    }

    return (
        <div className='container font-serif'>
            <h2 className='text-indigo-900 text-center fs-2 underline underline-offset-4 '>MANAGE ITEMS</h2>
            {

                items.map(item => <div className='' key={item._id}>

                    <div className='d-flex align-items-center justify-between  my-3 rounded shadow px-3' >

                        <div className='my-1 py-1 d-flex align-items-center'>
                            <div><img className='w-20 m-2' src={item.img} alt="" /></div>
                            <BsArrowRight></BsArrowRight>
                            <div className='ms-3'><h3 className=' fs-4'>{item.name} </h3>
                                <i><small>Price:{item.price}</small></i><br />
                                <i><small>Quantity:{item.quantity}</small></i>
                            </div>
                        </div>
                        < div className='align-items-center gap-1 d-flex'>
                            <button className='btn btn-success '>STOCK</button>
                            <button onClick={() => itemDelete(item._id)}><MdDelete className='fs-3'></MdDelete></button></div>
                    </div>


                </div>)
            }


        </div>
    );
};

export default ManageItems;