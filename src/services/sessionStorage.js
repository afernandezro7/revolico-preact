const productsKey = 'revolico-product-list'

export const getProducts=() => {
    return JSON.parse(localStorage.getItem(productsKey)) || []
}

export const setProducts=(productList) => {
    localStorage.setItem(productsKey,JSON.stringify(productList))
    return true
}