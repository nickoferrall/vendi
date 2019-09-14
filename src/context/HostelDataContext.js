import React, { createContext, useState } from "react"

const theCrankyCrocHostel = {
    body: "Located nearby to Bogota most interesting sites, museums & nightlife, this beautifully remodeled colonial house features outdoor patios, lounge with big screen TV, netflix and directv, bar & restaurant, fully equipped guest kitchen, huge TV for sports, WiFi & internet terminals, 24 hour hot water, lockers with electrical sockets & many hooks in the dorms, tourist information, big beds with duvets & reading lamps, towels included, free luggage storage, laundry service & many social events.",
    city: "Bogota",
    country: "Colombia",
    title: "The Cranky Croc Hostel",
}
export const HostelDataContext = createContext(theCrankyCrocHostel)

export const HostelDataProvider = ({ children }) => {
    const [clickedHostelData, setClickedHostelData] = useState("");
    return (
        <HostelDataContext.Provider value={{ clickedHostelData, setClickedHostelData }}>
            {children}
        </HostelDataContext.Provider>
    );
};