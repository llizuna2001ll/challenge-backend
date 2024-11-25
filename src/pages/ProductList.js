import {useQuery} from 'react-query';
import {fetchProducts} from '../services/product_api';
import {Link, Route, useNavigate} from "react-router-dom";
import ProductCard from "../components/ProductCard";
import '../styles/productList.scss';
import {useState} from "react";
import SortingDropdown from "../components/SortingDropdown";
import ProductHeader from "../components/ProductHeader";
import {useDispatch} from "react-redux";
import {setProducts} from "../redux/productSlice";

const ProductList = () => {
    const [sort, setSort] = useState(null);
    const dispatch = useDispatch();

    const { data, isLoading, error } = useQuery(['products', sort], () => fetchProducts(sort), {
        onSuccess: (data) => {
            dispatch(setProducts(data.data));
        },
    });

    const navigate = useNavigate();

    if (isLoading) return <p>Loading...</p>;

    if (error) return <p>Error fetching products</p>;

    return (
        <>
            <ProductHeader onSortChange={setSort} title={"Product List"}/>
            <div className="product-list">
                {data.data.map((product) => (
                    <ProductCard key={product.id} id={product.id} name={product.title} price={product.price}
                                     category={product.category} img={product.image} rating={product.rating.rate}/>
                ))}
            </div>
        </>
    );
};

export default ProductList;
