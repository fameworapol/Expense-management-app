import PropTypes , {number,string} from 'prop-types';
import './item.css'


function Item({title,amount}) {
    const status = amount<0?"expense":"income"
    const symbol = amount<0?"-":"+"
    return <li className={status}>{title} <span>{symbol}{Math.abs(amount)}</span></li>
}

//Define Proptypes
Item.propTypes = {
    title: PropTypes.string,
    price:PropTypes.number
}

export default Item 