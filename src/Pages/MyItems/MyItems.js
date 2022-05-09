import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios'

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    useEffect(() => {

        const getMyItems = async () => {
            const email = user.email;
            const url = `https://immense-stream-59373.herokuapp.com/myItems?email=${email}`;
            const { data } = await axios.get(url);
            setMyItems(data);
        }
        getMyItems();
    }, [user])
    console.log(myItems.name)
    return (
        <div>
            <h1>MY Items {myItems.length}</h1>
            {
                myItems.map(myItem => <div key={myItem._id}>
                    <p>{myItem.email} : {myItem.name}</p>
                </div>)
            }
        </div>
    );
};

export default MyItems;