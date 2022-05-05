
// import { useEffect, useState } from 'react';
import useItems from '../../hooks/useItems';

import Item from '../Item/Item';

const Items = () => {
    const [items] = useItems()

    // const [items, setItems] = useState([])
    // useEffect(() => {
    //     fetch('items.json')
    //         .then(res => res.json())
    //         .then(data => setItems(data))
    // }, [])
    return (
        <div >

            <div className='grid grid-cols-3 gap-3'>
                {
                    items.map(item => <Item
                        key={item.id}
                        item={item}
                    ></Item>)
                }
            </div>

        </div>
    );
};

export default Items;