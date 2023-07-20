/* eslint-disable react/prop-types */
import './footer.css'
const Footer = ({onPackedItemPer}) => {
  return (
    <div className='footer'>
         {onPackedItemPer ? <p>You have packed {onPackedItemPer}  % items from list </p> :<p>Start adding some items to your packing list </p>}
    </div>
  )
}

export default Footer