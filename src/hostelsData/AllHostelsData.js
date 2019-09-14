// This is a bit hacky. I would like to have a json file or js file
// that has all of the hostel data. But to get the optimised gatsby images,
// we have to use the Gatsby useStaticQuery hook in GQLImageQueries. It's
// not currently possible to pass variables into the hook. 
// As we're calling a hook to get the image data, this file has to be a React
// function or hook - otherwise it will break the rules of hooks.
// Calling useForSaleHostels() will return an array with the for sale hostels

import { useState } from 'react'

import useImageQueries from '../GQLImageQueries/AllHostelsImageQueries'

const useAllHostelsData = () => {
    const [
        blackSheepMedellinImgData,
        casaBellavistaImgData,
        cocoaHostelImgData,
        dreamerHostelImgData,
        hostelTralalaSalentoImgData,
        makakoImgData,
        oasisCaliImgData,
        renacerImgData,
        theCrankyCrocHostelImgData
    ] = useImageQueries()

    const blackSheepMedellin = {
        body: "The Black Sheep Hostel is a thirteen year old New Zealand/ Colombian run hostel located in the best area of Medellin. Less than ten minutes walk from the Metro Station Poblado, two major shopping centers, one of the largest supermarkets in the city and the top University for studying Spanish, EAFIT. Plus we are only ten to fifteen minutes walk to the Zona Rosa, hundreds of bars and restaurants.",
        city: "Medellin",
        country: "Colombia",
        image: blackSheepMedellinImgData,
        title: "Black Sheep Hostel",
    }
    const casaBellavistaHostel = {
        body: "I'm going to tell you a secret, pay attention. If you are going to start your trip, to finish it, or maybe just to be in step, you will want to feel happy, excited, expectant to meet new people, to live new experiences, to feel the world, to be free, to be a traveler. Casa Bellavista is the perfect place for your trip and even more for you, the atmosphere is incredible, in our house you can get to know Colombia, our family, as friendly and warm as our people, our mascot (Maya) a little dog who receives everyone as if he knew them for centuries. Anyway, in Casa Bellavista you will be another Colombian, that's why in our house we are all willing to help you and guide you in everything you need. Are you willing to discover it? If your answer is yes, please continue. If your answer is no, come and we will show you the opposite.",
        city: "Bogotta",
        country: "Colombia",
        image: casaBellavistaImgData,
        title: "Casa Bellavista Hostel",
    }
    const cocoaHostel = {
        body: "Cocoa Hostel differs from the rest of the hostels by being a space with atmospheres that will make you feel like home, quiet and comfortable. Our service will make you feel like if you were family, we will help you with everything you need to make your stay in Medellin unforgettable.",
        city: "Medellin",
        country: "Colombia",
        image: cocoaHostelImgData,
        title: "Cocoa Hostel",
    }
    const dreamerHostel = {
        body: "Welcome to a unique and friendly hostel, built by travelers for travelers. VOTED BEST HOSTEL IN COLOMBIA, the Dreamer is the CLOSEST hostel to TAYRONA PARK and Minca making us an excellent base for discovering the natural beauty of the Sierra Nevadas while also providing easy access to the city sights and fun nightlife of downtown Santa Marta.",
        city: "Santa Marta",
        country: "Colombia",
        image: dreamerHostelImgData,
        title: "Dreamer Hostel",
    }
    const hostelTralalaSalento = {
        body: "Hostel Tralala Salento is located in a traditional coffee-region house that has been converted into a tasteful, comfortable hostel, just one block from the central town square. It offers an ideal starting point for the trek to the Cocora Valley or a visit to a coffee farm.",
        city: "Salento",
        country: "Colombia",
        image: hostelTralalaSalentoImgData,
        title: "Hostel Tralala Salento",
    }
    const makako = {
        body: "Beautiful Colonial house located in the center of the Old Town, inside the Walled City on the safest and most picturesque and colorful street. Surrounded by museums, restaurants, bars, supermarkets and more. Exclusive Party bus for guests including open bar , food and free entrance to clubs. Also we offer you free entrance to clubs every night.",
        city: "Cartagena",
        country: "Colombia",
        image: makakoImgData,
        title: "Makako Hostel",
    }
    const oasisCali = {
        address: "Calle 2 Oeste #25 28, San Fernando, Cali, Colombia",
        body: "Oasis Cali Hostel is Cali's most interesting and well rated hostel. A cross-over between backpacker and flash-packer it has something for everyone and is more a home and than a hostel but with the mod-cons of a boutique hotel. Located next to the popular night spot parque del perro in the green and leafy neighbourhood of San Fernando Viejo, its in walking distance to 90% of Cali's attractions, most notable the famous Galeria farmers market",
        city: "Cali",
        country: "Colombia",
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
        city: "Boyaca",
        country: "Colombia",
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
        shortDescription: 'We offer a beautiful, safe and strategically located country style hostel, close to the center of Villa de Leyva, where you will feel at home.',
        title: "Hostel Renacer",
    }
    const theCrankyCrocHostel = {
        body: "Located nearby to Bogota most interesting sites, museums & nightlife, this beautifully remodeled colonial house features outdoor patios, lounge with big screen TV, netflix and directv, bar & restaurant, fully equipped guest kitchen, huge TV for sports, WiFi & internet terminals, 24 hour hot water, lockers with electrical sockets & many hooks in the dorms, tourist information, big beds with duvets & reading lamps, towels included, free luggage storage, laundry service & many social events.",
        city: "Bogota",
        country: "Colombia",
        image: theCrankyCrocHostelImgData,
        title: "The Cranky Croc Hostel",
    }

    const [allHostelsArr] = useState([
        blackSheepMedellin,
        casaBellavistaHostel,
        cocoaHostel,
        dreamerHostel,
        hostelTralalaSalento,
        makako,
        oasisCali,
        renacer,
        theCrankyCrocHostel
    ])

    return [allHostelsArr]
}

export default useAllHostelsData