import React, { createContext, useState } from "react"

const defaultState = {
    test: "john"
}
export const HostelDataContext = createContext(defaultState)

export const HostelDataProvider = ({ children }) => {
    const [clickedHostelData, setClickedHostelData] = useState("");
    return (
        <HostelDataContext.Provider value={{ clickedHostelData, setClickedHostelData }}>
            {children}
        </HostelDataContext.Provider>
    );
};