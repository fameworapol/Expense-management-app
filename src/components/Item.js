import PropTypes , {number,string} from 'prop-types';
import { useContext } from 'react';
import DataContext from '../data/DataContext';
import './item.css'


function Item({title,amount}) {
    const status = amount<0?"expense":"income"
    const symbol = amount<0?"-":"+"
    return (
        <div>
            <li className={status}>{title} <span>{symbol}{Math.abs(amount)}</span></li>
        </div>
    )
}

//Define Proptypes
Item.propTypes = {
    title: PropTypes.string,
    price:PropTypes.number
}
 
export default Item 