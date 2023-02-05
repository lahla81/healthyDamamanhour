import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
    const cartItems = useSelector(selectCartItems); 
    const cartTotal = useSelector(selectCartTotal);

    return(
        <div className='mt-5'>
            {cartItems.map((cartItem) =>(
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))}
            <div className="fw-bold h4 text-center">Total: {cartTotal} LE</div>
        </div>
    )
}

export default Checkout;