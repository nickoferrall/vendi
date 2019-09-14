import React, { createContext, useState } from "react"

export const HostelDataContext = createContext()

export const HostelDataProvider = ({ children }) => {
    const [clickedHostelData, setClickedHostelData] = useState("");
    return (
        <HostelDataContext.Provider value={{ clickedHostelData, setClickedHostelData }}>
            {children}
        </HostelDataContext.Provider>
    );
};