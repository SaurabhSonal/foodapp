import { Link } from "react-router-dom";

import React from "react";

const Navbar = () => {

    const icon_style = {
           height:45,
         }

    const cart_Style = {
            background: '#F59E0D',
            display: 'flex',
            padding: '6px 12px',
            borderRadius:'50px'
    }

    return (
        <>
            <nav className="container mx-auto flex items-center justify-between py-4 ">
                <Link to="/">
                    <img style={icon_style} src="image/logo.png" alt="Logo" />
                </Link>
                <ul className="flex items-center">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li className="ml-6">
                        <Link to="/Product">Product</Link>
                    </li>
                    <li className="ml-6">
                        <Link to="/Cart">
                        <div style={cart_Style}>
                        <span>
                            10
                        </span>
                        <img className="ml-2" src="image/cart.png" alt="cart-logo" />
                    </div>
                        </Link>
                    </li>
                  </ul>
            </nav>
            </>
    );
    };

export default Navbar;

// const Navbar=()=> {

//  
//turn (
//     <>
//
//     </>
//
// }
// export default Navbar;
