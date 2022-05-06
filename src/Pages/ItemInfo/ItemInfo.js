import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemInfo = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/item/${itemId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [])
    return (
        <div>
            <h2>Welcome to detail: {item.name}</h2>
            <h2>Welcome to detail: {item.price}</h2>
            <h2>Welcome to detail: {item.quantity}</h2>
            <h2>Welcome to detail: {item.img}</h2>
            <h2>Welcome to detail: {item.short_description}</h2>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>

        </div>
    );
};

export default ItemInfo;