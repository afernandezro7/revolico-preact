import { useCallback, useEffect, useState } from "preact/hooks"
import { fetApiSrv, storageSrv } from "../../services"


export const useProduct = (initialValue=[]) => {
    const [products, setproducts] = useState(initialValue)
    const [criteria, setcriteria] = useState('')

    const searchProduct = useCallback(
        (criteria) => {   
            const storageProductList = storageSrv.getProducts()
            return criteria 
                ? storageProductList.filter(
                    (product)=>product.brand.toLowerCase().includes(criteria.toLowerCase()) || product.model.toLowerCase().includes(criteria.toLowerCase())
                ) 
                : storageProductList
        },
        [],
    )


    const assignProducts = () =>{
        const filterProducts = searchProduct(criteria)
        setproducts(filterProducts)
    }


	
	useEffect(() => {
		fetApiSrv.getProducts().then((res)=>{
			setproducts(res)
			storageSrv.setProducts(res)
		})
	}, [])

	useEffect(() => {
		const interval = setInterval( async () => {
			const res = await fetApiSrv.getProducts()
			setproducts(res)
			storageSrv.setProducts(res)
		}, 1000*60*60);
		return () => clearInterval(interval);
	}, [])

    useEffect(() => {
        assignProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [criteria])

    return {products, setproducts, setcriteria}
}
