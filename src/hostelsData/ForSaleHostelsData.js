// This is a bit hacky. I would like to have a json file or js file
// that has all of the hostel data. But to get the optimised gatsby images,
// we have to use the Gatsby useStaticQuery hook in GQLImageQueries. It's
// not currently possible to pass variables into the hook. 
// As we're calling a hook to get the image data, this file has to be a React
// function or hook - otherwise it will break the rules of hooks.

// Calling useForSaleHostels() will return an array with the for sale hostels

import { useState } from 'react'

import useImageQueries from '../GQLImageQueries/ForSaleImageQueries'

const useForSaleHostels = () => {
    const [oasisCaliImgData, renacerImgData] = useImageQueries()

    const oasisCali = {
        address: "Calle 2 Oeste #25 28, San Fernando, Cali, Colombia",
        body: "Oasis Cali Hostel is Cali's most interesting and well rated hostel. A cross-over between backpacker and flash-packer it has something for everyone and is more a home and than a hostel but with the mod-cons of a boutique hotel. Located next to the popular night spot parque del perro in the green and leafy neighbourhood of San Fernando Viejo, its in walking distance to 90% of Cali's attractions, most notable the famous Galeria farmers market",
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
        image: oasisCaliImgData,
        price: '$50,000 USD',
        shortDescription: "Oasis Cali Hostel is Cali's most interesting and well rated hostel. A cross-over between backpacker and flash-packer it has something for everyone and is more a home and than a hostel but with the mod-cons of a boutique hotel.",
        title: "Oasis Cali Hostel",
    }
    const renacer = {
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
        image: renacerImgData,
        price: '$891,000 USD',
        shortDescription: "Hostal Renacer is a hostel in Villa de Leyva. We offer a beautiful, safe and strategically located country style hostel, close to the center of Villa de Leyva, where you will feel at home. We are so lucky to have a property in the middle of the nature and just a 15/20 minutes walking or 6 min in a car. (1.2 KM)",
        title: "Hostel Renacer",
    }
    const [forSaleHostelsArr] = useState([oasisCali, renacer])

    return [
        forSaleHostelsArr
    ]
}

export default useForSaleHostels