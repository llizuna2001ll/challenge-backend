import { useQuery } from 'react-query';
import { fetchProductDetails } from '../services/product_api';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams();
    const { data, isLoading, error } = useQuery(['product', id], () => fetchProductDetails(id));

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching product details</p>;

    const product = data.data;

    return (
        <div className="product-details">
            <img src={product.image} alt={product.title} />
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>Category: {product.category}</p>
        </div>
    );
};

export default ProductDetails;
