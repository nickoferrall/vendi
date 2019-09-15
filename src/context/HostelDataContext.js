import React, { createContext, useState } from "react"

const defaultState = {
    address: "Finca Renacer, Villa de Leyva, Colombia",
    body: "Renacer Hostel has been operating for 15 years. Lonely Planet guides have selected it as 'Our Choice'. It also appears as a recommended listing in Footprint, Bradt, Rough, Moon, Frommer’s, Viva Travel Guide, Petit Futé, Michelin, Kolumbien Sebra Verlag, Panamericana Das Handbuch, Colombia Pocket Guide, Colombia Fácil, etc. It is also highlighted as one of the best hostels in South America for overlanders. Over the last 7 years, it has received the Traveler's Choice and Excellence in Service awards from TripAdvisor. This has lead to high occupancy rates and steadily rising revenues.\n\n Located in the foothills of the Flora and Fauna Sanctuary of Iguaque, Renacer Hostel has a total area of 4,050 mt2. Its colonial style buildings have been distributed to generate a natural environment where the combination of gardens and reforestation areas allow native species to thrive.",
    facilities: {
        "Air Conditioning": false,
        "Ceiling Fans": false,
        "English Speaking Staff": true,
        "Towels": true,
        "Tour Desk": true,
        "Showers": true,
        "Swimming Pool": false,
        "Wifi": true,
    },
    price: '$891,000 USD',
    shortDescription: "Hostal Renacer is a hostel in Villa de Leyva. We offer a beautiful, safe and strategically located country style hostel, close to the center of Villa de Leyva, where you will feel at home. We are so lucky to have a property in the middle of the nature and just a 15/20 minutes walking or 6 min in a car. (1.2 KM)",
    title: "Hostel Renacer",
}
export const HostelDataContext = createContext(defaultState)

export const HostelDataProvider = ({ children }) => {
    const [clickedHostelData, setClickedHostelData] = useState();
    return (
        <HostelDataContext.Provider value={{ clickedHostelData, setClickedHostelData }}>
            {children}
        </HostelDataContext.Provider>
    );
};