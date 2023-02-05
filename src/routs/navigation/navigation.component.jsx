import { Fragment, useState } from "react";
import { Outlet, Link } from "react-router-dom";

import logo from '../../components/assets/img/logo-background-center.jpg';
import './navigation.style.scss';
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser  } from "../../store/user/user.selector";
import { selectIsCartOpen } from '../../store/cart/cart.selector' 
import { signOutStart } from "../../store/user/user.action";

const Navigation = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);
    const signOutUser = () => dispatch(signOutStart())
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg mt-4">
                <div className="container-fluid navigation my-2">
                    <Link className="navbar-brand d-none d-sm-none d-md-none d-lg-block" to='/'>Healthy Damanhour</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to='/shop'>SHOP</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/contactUs'>Contact Us</Link>
                            </li>
                            {
                                currentUser ?(
                                    <li className="nav-item">
                                        <Link className="nav-link" onClick={signOutUser}> 
                                            {' '}
                                            SIGN OUT{' '}
                                        </Link>
                                    </li>
                                ) : (
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/auth'>Sign In</Link>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <CartIcon/>
                   {isCartOpen && <CartDropdown/>}
                </div>
            </nav>
            <Link className="" to='/'>
                <img className="d-block mx-auto" alt='logo' src={logo} height='100px'/>
            </Link>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation