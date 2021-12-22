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

//TODO HOT-FIX CHANGE SERVICES TO GET SESSION COOKIE [PROBLEM WITH CORS]
export const addProduct= async(product)=> {
    try {
        const url = `${urlBase}api/cart`
        const response = await fetch(url,{
            method:'POST',
            // credentials: 'include',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        // console.log(response)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
        return []
    }
}