import axios from 'axios';
import {
    GET_PRODUCTS_BY_SELL,
    GET_PRODUCTS_BY_ARRIVAL,
    GET_BRANDS,
    GET_WOODS,
    GET_PRODUCTS_TO_SHOP
} from './types'

import { PRODUCT_SERVER } from '../components/untils/misc';

export function getProductBySell(){
    const request = axios.get(`${PRODUCT_SERVER}/articles?sortBy=sold&order=desc&limit=4`)
    .then(response => response.data);
    return {
        type: GET_PRODUCTS_BY_SELL,
        payload: request
    }
}
export function getProductByArrival(){
    const request = axios.get(`${PRODUCT_SERVER}/articles?sortBy=createdAt&order=desc&limit=4`)
    .then(response => response.data);
    return {
        type: GET_PRODUCTS_BY_ARRIVAL,
        payload: request
    }
}

export function getBrands(){
    const request = axios.get(`${PRODUCT_SERVER}/brands`)
            .then(response => response.data);
    return {
        type: GET_BRANDS,
        payload: request
    }
}
export function getWoods(){
    const request = axios.get(`${PRODUCT_SERVER}/woods`)
            .then(response => response.data);
    return {
        type: GET_WOODS,
        payload: request
    }
}
export function getProductsToShop(skip, limit, filters = [], previousState =[]){
    const data = {
        limit,
        skip,
        filters
    }
    const request = axios.post(`${PRODUCT_SERVER}/shop`, data)
                .then(response => {
                    let newState = [
                        ...previousState,
                        ...response.data.articles
                    ];
                    return {
                        size: response.data.size,
                        articles: newState
                    }
                });
    return {
        type: GET_PRODUCTS_TO_SHOP,
        payload: request
    }
}