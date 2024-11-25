import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingBasket, faTrash, faWindowClose} from '@fortawesome/free-solid-svg-icons';
import '../styles/cart.scss';
import {useDispatch, useSelector} from "react-redux";
import {addToCart, decreaseQuantity, removeFromCart} from "../redux/cartSlice";

const RightSideNav = () => {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false);
    const cartItems = useSelector((state) => state.cart.products);
    const products = useSelector((state) => state.products);

    const productsInCart = products.filter((product) =>
        cartItems.some((cartItem) => cartItem.productId === product.id)
    );

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleQuantity = (type, product) => {
        if (type === "increase") {
            dispatch(addToCart(product));
        } else if(type === "decrease") {
            dispatch(decreaseQuantity(product));
        }
    };

    const deleteItemFromCart = (product) => {
        dispatch(removeFromCart(product));
    };

    return (
        <>
            <Link className="cart-hover" onClick={toggleSidebar}>
                <FontAwesomeIcon color="#FAFAFA" height={30} width={30} size="2x" icon={faShoppingBasket}/>
            </Link>
            <div className={`right-side-bar ${isOpen ? 'active' : ''}`}>
                <div style={{display: 'flex', flexDirection: 'column', gap: '50px', justifyContent: 'start'}}>
                    <div style={{display: 'flex', justifyContent: 'start', width: "80%"}}>
                        <FontAwesomeIcon icon={faWindowClose} onClick={toggleSidebar} size={"2xl"} color={"#3066BEA3"}/>
                    </div>
                    <div className="cart-items">
                        {productsInCart.map(item => (
                            <div key={item.id} className="cart-item">
                                <div className="product-image">
                                    <img src={item.image} width="50px" height="50px" alt={item.name}/>
                                </div>
                                <div className="item-information">
                                    <div style={{display: "flex", gap: "20px"}}>
                                        <p>{item.title}</p>
                                        <p>${item.price.toFixed(2)}</p>
                                    </div>
                                    <div className="item-actions">
                                        <button onClick={handleQuantity("decrease", item)}>-</button>
                                        <p>{item.quantity}</p>
                                        <button onClick={handleQuantity("increase", item)}>+</button>
                                        <button className="delete-button">
                                            <FontAwesomeIcon icon={faTrash} color={"white"} size={"sm"}/></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default RightSideNav;
