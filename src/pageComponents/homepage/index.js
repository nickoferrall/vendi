import React from 'react';

import DisplayHostelsContainer from './displayHostels'
import Headline from './headline'
import useAllHostelsData from '../../hostelsData/AllHostelsData'
import useForSaleHostels from '../../hostelsData/ForSaleHostelsData'

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
                subtitle={"Browse all hostels in Colombia"}
                title={"All Hostels"}
            />
        </>
    );
};

export default Homepage