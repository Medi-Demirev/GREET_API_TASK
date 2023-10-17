import React, { createContext } from 'react'
import {  useEffect, useState } from 'react'

export const ProductContext = createContext();

const ProductProvider = ({children}) => {

    const [data, setData] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            try {
            const response = await fetch('https://greet.bg/wp-json/wc/store/products?page=1')
            const allData = await response.json()
            setData(allData)
        } catch (error) {
            throw new error
          }
       }
        fetchData();
    },[])
   
  return (
    <ProductContext.Provider value={{data}}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider