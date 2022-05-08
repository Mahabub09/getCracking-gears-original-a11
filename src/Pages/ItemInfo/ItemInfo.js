import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemInfo = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/item/${itemId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, []);

    const handleDelivered = async () => {
        let deliver = 1;
        let quantityParse = parseInt(item.quantity);
        let quantity = quantityParse - deliver;
        const ItemInfo = {
            supplier: item.supplier_name,
            price: item.price,
            description: item.short_description,
            img: item.img,
            name: item.name,
            quantity: quantity,
        };
        const url = `http://localhost:5000/item/${itemId}`;
        console.log(url);
        fetch(url, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(ItemInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setItem(ItemInfo);
            });
    };
    return (
        <div className='container d-flex justify-center w-75 my-5 shadow bg-slate-100 pe-5'>
            <div >
                <img className='w-50' src={item.img} alt="" />
            </div>
            <div className='mt-3' >
                <h2 className='fs-3 font-mono my-2'>{item.name}</h2>
                <p className='my-2'><span className='underline underline-offset-2'><i>About:</i></span> {item.short_description}</p>

                <h4 className='fs-4 my-2'>Supplier: <i> {item.supplier_namer}</i></h4>
                <h4 className='fs-4 my-2'>Price:{item.price}</h4>
                <h4 className='fs-5'><i> Quantity: {item.quantity}    Items</i></h4>
                <div>
                    <button onClick={handleDelivered} className='btn btn-success my-2 p-2'>DELIVERD</button>

                </div>

            </div>


        </div>
    );
};

export default ItemInfo;