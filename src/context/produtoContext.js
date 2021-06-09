import React, { createContext, useState } from 'react';
import { carroucelInfo } from '../assets/info';

export const ProdutoContext = createContext({});

function ProductProvider(props) {
    const [info] = useState(carroucelInfo);
    
    const [singleProduct, setSingleProduct] = useState({});
    
    let [quatity, setQuatity] = useState(0);
    
    const [products, setProducts] = useState([]);

    const handleInfos = (data) =>{
        setProducts(oldArray => [...oldArray, data]);
        setQuatity(quatity + 1);
        setSingleProduct(data);
        console.log(data, products);
    }

    return(
        <ProdutoContext.Provider value={{
                handleInfos, 
                info, 
                singleProduct,
                quatity,
                products
            }}
        >
            {props.children}
        </ProdutoContext.Provider>
    );
}

export default ProductProvider;