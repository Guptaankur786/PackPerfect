/* eslint-disable react/prop-types */
import "./item.css";
const Item = ({ item,onToggleItem,onToggleDelete }) => {
  return (
    <li className="item-container">
      <div className="item">
        <input type="checkbox" checked={item.packed} onChange={()=>onToggleItem(item.id)} />
        <span>
          {item.quantity}
          <span> {item.description}</span>
        </span>
        <button className="close" onClick={()=>onToggleDelete(item.id)}>❌</button>
      </div>
    </li>
  );
};

export default Item;
