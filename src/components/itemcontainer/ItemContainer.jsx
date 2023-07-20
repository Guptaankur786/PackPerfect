/* eslint-disable react/prop-types */
import Item from '../item/Item'
import './ItemContainer.css'
const ItemContainer = ({items, onToggleItem, onToggleDelete,onSortItems,onClearList}) => {
  return (
    <ul className='container'>
        <div className='list'>
          {items.map((item)=><Item item={item} key={item.id} onToggleItem={onToggleItem} onToggleDelete={onToggleDelete}/>)}
        </div>
        <div className='filter'>
            <button onClick={()=>onSortItems()}>Sort by packed status</button>
            <button onClick={()=>onClearList()}>Clear List</button>
        </div>
    </ul>
  )
}

export default ItemContainer