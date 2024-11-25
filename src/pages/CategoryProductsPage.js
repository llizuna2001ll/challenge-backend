import {useState} from "react";
import {useQuery} from "react-query";
import {fetchInCategory} from "../services/product_api";
import ProductHeader from "../components/ProductHeader";
import ProductCard from "../components/ProductCard";
import {useParams} from "react-router-dom";

function CategoryProductsPage() {
    const { category } = useParams();
    const [sort, setSort] = useState(null);
    const {data, isLoading, error} = useQuery([`products/${category}}`, sort], () => fetchInCategory(category, sort));


    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching products</p>;
    console.log(data)
    return (
        <>
            <ProductHeader onSortChange={setSort} title={`${category} Products`}/>
            <div className="product-list">
                {data.data.map((product) => (
                    <ProductCard key={product.id} id={product.id} name={product.title} price={product.price}
                                 category={product.category} img={product.image} rating={product.rating.rate}/>
                ))}
            </div>
        </>
    );
};
export default CategoryProductsPage;