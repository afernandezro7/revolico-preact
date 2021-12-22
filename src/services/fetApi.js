const urlBase = "https://front-test-api.herokuapp.com/";

export const getProducts = async()=> {
    try {
        const url = `${urlBase}api/product`
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
        return []
    }
}

export const getProductDetail= async(id)=> {
    try {
        const url = `${urlBase}api/product/${id}`
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
        return null
    }
}

export const addProduct= async(product)=> {
    try {
        const url = `${urlBase}api/cart`
        const response = await fetch(url,{
            method:'POST',
            credentials: "same-origin",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
        return []
    }
}