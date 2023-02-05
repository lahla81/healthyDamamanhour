
const CartItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return(
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={imageUrl} className="img-fluid rounded-start" alt={`${name}`}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h6 className="card-title">{name}</h6>
                        <p className="card-text">{quantity} X {price}LE</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem