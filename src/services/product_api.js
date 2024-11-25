import axios from 'axios';

const API_URL = 'https://fakestoreapi.com';

export const fetchProducts = (sort) => {
    const url = sort ? `${API_URL}/products?sort=${sort}` : `${API_URL}/products`;
    return axios.get(url);
};

export const fetchInCategory = (category, sort) => {
    const url = sort ? `${API_URL}/products/category/${category}?sort=${sort}`
        : `${API_URL}/products/category/${category}`;
    return axios.get(url);
};

export const fetchProductDetails = (id) => axios.get(`${API_URL}/products/${id}`);

export const fetchCategories = () => axios.get(`${API_URL}/products/categories/`);