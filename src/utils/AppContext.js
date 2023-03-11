/* eslint-disable no-unreachable */
import { createContext } from "react";
export const Context = createContext();


function Appcontext({ children }) {
    return (
        <Context.Provider>
            {children}
        </Context.Provider>
    );
}

export default Appcontext;