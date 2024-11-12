import axios from 'axios';

const api = axios.create({
    baseURL: 'https://fakestoreapi.com/',
});


export const getProducts=()=>{
    return api.get("/products");
}

export const getProductDetails = (id) => {
    return api.get(`/products/${id}`);
};


