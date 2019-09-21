import React from 'react';

// import AllHostelsContainer from './displayHostelsOld/allHostels'
import DisplayHostelsContainer from './displayHostels'
import useAllHostelsData from '../../hostelsData/AllHostelsData'
import useForSaleHostels from '../../hostelsData/ForSaleHostelsData'
import Headline from './headline'

const Homepage = () => {
    const [forSaleHostelsArr] = useForSaleHostels()
    const [allHostelsArr] = useAllHostelsData()
    return (
        <>
            <Headline />
            <DisplayHostelsContainer
                hostelData={forSaleHostelsArr}
                subtitle={"Find Hostels that are currently looking for buyers"}
                title={"For Sale"}
            />
            <DisplayHostelsContainer
                hostelData={allHostelsArr}
                subtitle={"Browse all the hostels in Colombia"}
                title={"All Hostels"}
            />
            {/* <ForSaleHostelsContainer /> */}
            {/* <AllHostelsContainer /> */}
        </>
    );
};

export default Homepage