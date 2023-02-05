import { useSelector, useDispatch } from "react-redux";
import { 
    selectCartItems  
} from "../../store/cart/cart.selector";

import {
    clearItemFromCart,
    addItemToCart,
    removeItemFromCart,
} from '../../store/cart/cart.action';

const CheckoutItem = ({cartItem}) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const dispatch = useDispatch();

    const cartItems = useSelector(selectCartItems); 

    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

    return(
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-4">
                        <img src={imageUrl} className="img-fluid w-100 rounded-start" style={{height:180}} alt={`${name}`}/>
                    </div>
                    <div className="col-7">
                        <div className="card-body">
                            <h6 className="card-title h2 main-color">{name}</h6>
                            <p className="card-text h3">
                            <span className="cursor-pointer px-2 green-color" onClick={removeItemHandler}>
                                &#10094;
                            </span>
                            {quantity}
                            <span className="cursor-pointer px-2 green-color" onClick={addItemHandler}>
                                &#10095;
                            </span>
                            x {price}LE = {price*quantity}LE</p>
                        </div>
                    </div>
                    <div className="col-1">
                        <h4 
                            className="text-red fw-bold mt-3 mr-3 text-danger cursor-pointer"
                            onClick={clearItemHandler}
                        >&#10005;</h4>
                    </div>
                </div>
            </div>
        )
}

export default CheckoutItem;