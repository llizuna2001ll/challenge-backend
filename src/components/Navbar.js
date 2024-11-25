import '../styles/navbar.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingBasket, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {useQuery} from "react-query";
import {fetchCategories, fetchProducts} from "../services/product_api";
import Cart from "./Cart";
function Navbar() {

    const {data, isLoading, error} = useQuery('categories', () => fetchCategories());

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching products</p>;

    return (
        <>
            <div className={"header-container"}>
                <div>
                    <Link style={{textDecoration:"none",color:"white"}} to={'/'}><h2>Ecommerce App</h2></Link>
                    <ul className="categories">
                        {data.data.map((category) => (
                            <Link key={category} style={{textDecoration:"none", color:"white"}} to={`/${category}`}><li>{category}</li></Link>
                        ))}
                    </ul>
                    <Cart/>
                </div>
            </div>
        </>
    );
}

export default Navbar;