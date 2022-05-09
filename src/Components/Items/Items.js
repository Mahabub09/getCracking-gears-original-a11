import useItems from '../../hooks/useItems';
import './Items.css';
import Item from '../Item/Item';

const Items = () => {
    const [items] = useItems()


    return (
        <div >
            <h1 className='fs-2 font-serif underline underline-offset-2 text-center my-1'>ALL ITEMS</h1>

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