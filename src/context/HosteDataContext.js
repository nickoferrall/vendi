import React, { createContext, useState } from "react"

export const HostelDataContext = createContext()

export const HostelDataProvider = ({ children }) => {
    const [testing, setTesting] = useState("yeahh boooiiiii");
    return (
        <HostelDataContext.Provider value={{ testing, setTesting }}>
            {children}
        </HostelDataContext.Provider>
    );
};