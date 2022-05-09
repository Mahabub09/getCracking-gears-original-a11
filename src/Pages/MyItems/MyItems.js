import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios'
import { Link } from 'react-router-dom';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    useEffect(() => {

        const getMyItems = async () => {
            const email = user.email;
            const url = `https://radiant-meadow-31133.herokuapp.com/myItems?email=${email}`;
            const { data } = await axios.get(url);
            setMyItems(data);
        }
        getMyItems();
    }, [user])
    console.log(myItems.name)
    return (
        <div>
            <h1 className='fs-2 font-serif underline underline-offset-2 text-center my-1'> <i>Your Added Items</i></h1>

            <div className='grid grid-cols-3'>
                {
                    myItems.map(myItem => <div className='shadow p-3 mx-auto my-3' key={myItem._id}>

                        <div >
                            <div >
                                <img src={myItem.img} alt="" />
                            </div>
                            <div>
                                <h3 className='fs-3'>{myItem.name}</h3>
                                <small><i> QUANTITY: {myItem.quantity}  Items</i></small>
                                <p> <small><i>PRICE: {myItem.price} $</i></small></p>


                                <Link className='btn btn-danger py-2 mt-2' to="/manageItems"> DELETE</Link>


                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyItems;