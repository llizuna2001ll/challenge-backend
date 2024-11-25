import { Link } from "react-router-dom";
import "../styles/productCard.scss";
import RatingBadge from "./RatingBadge";
import { useDispatch, useSelector } from "react-redux";
import {addToCart, removeFromCart} from "../redux/cartSlice";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingBasket} from "@fortawesome/free-solid-svg-icons";

function ProductCard({ name, price, category, img, id, rating }) {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.products);

    const isInCart = cartItems.some((item) => item.productId === id);

    const handleAddToCart = () => {
        if (!isInCart) {
            dispatch(addToCart({ id, name, price, category, img, rating }));
        }
    };

    return (
        <div className="product">
            <RatingBadge rating={rating} />
            <img className="product-image" src={img} alt={name} />
            <hr />

            <div className="card-information">
                <p>{category}</p>
                <div className="product-card-header">
                    <h5 className="product-title">{name}</h5>
                    <h5 className="product-price">$ {price}</h5>
                </div>
                <div className="product-button">
                    <button
                        className="product-button add-to-cart"
                        onClick={handleAddToCart}
                        disabled={isInCart}
                        style={{
                            backgroundColor: isInCart ? "#ccc" : "",
                            cursor: isInCart ? "default" : "pointer",
                        }}
                    >
                        <FontAwesomeIcon icon={faShoppingBasket} size={"lg"} color={"white"}/>
                    </button>
                    <button className="product-button">
                        <Link
                            style={{ color: "white", textDecoration: "none" }}
                            to={`/products/${id}`}
                        >
                            Buy Now
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
