import { createContext } from "preact";
import { useState } from "preact/hooks";



export const urlContext = createContext({});
const { Provider } = urlContext;

const initialValue = {
    model:null,
    path:null
}

export const UrlProvider = ({ children }) => {
    const [state, setstate] = useState(initialValue)

    const reset = () => {
        setstate(initialValue)
    }
    const linkToProduct = ({model,path}) => {
        setstate({model,path})
    }

    return (
        <Provider value={{
            state,
            reset,
            linkToProduct
        }}>           
            { children }           
        </Provider>
    )
}