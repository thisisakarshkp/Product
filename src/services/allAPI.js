import apiService from "../api/apiService";

export const getAllProductsAPI = async () => {
    return await apiService("GET",'/products',{})
}

export const getSingleProductAPI = async (id) => {
    return await apiService("GET",`/products/${id}`,{})
}

export const addProductAPI = async (product) => {
    return await apiService("POST",'/products',product)
}

export const editProductAPI = async (id, product) => {
    return await apiService("PUT",`/products/${id}`,product)
}

export const deleteProductAPI = async (id) => {
    return await apiService("DELETE",`/products/${id}`,{})
}
