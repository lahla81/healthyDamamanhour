import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';

import './product-card.styles.scss';
import Button from '../button/button.component';
import { selectCartItems } from '../../store/cart/cart.selector';

const ProductCard = ({product}) => {
    const {name, imageUrl, price, arName, size, unit} = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems)
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product))
    return(
        <div className='col-md-3 col-sm-6 col-6 my-1 product-card-container'>
            <img alt={name} src={imageUrl}/>
            <div className='footer'>
                <h4 className='name green-color'>{arName}</h4>
                <h3 className='unit main-color'>{size} {unit}</h3>
                <h3 className='price text-bold main-color'>{price} LE</h3>
            </div>
            <Button onClick={addProductToCart} buttonType='inverted'>Add To Card</Button>
        </div>
    )
}

export default ProductCard;