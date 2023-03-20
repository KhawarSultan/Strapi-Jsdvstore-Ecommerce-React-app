/* eslint-disable no-unreachable */
import { createContext } from "react";
import { useState } from "react"
export const Context = createContext();

function Appcontext({ children }) {
    const [categories, setCategories , products, setProducts  ] = useState();
    

    return (
  
        <Context.Provider value={{
            categories,
            setCategories,
            products,
            setProducts,
            
        }}
        >
            {children}
        </Context.Provider>
    );
}

export default Appcontext;