import useItems from '../../hooks/useItems';
import './Items.css';
import Item from '../Item/Item';

const Items = () => {
    const [items] = useItems()


    return (
        <div >

            <div className='grid grid-cols-3 responsive  gap-3'>
                {
                    items.map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
            </div>

        </div>
    );
};

export default Items;