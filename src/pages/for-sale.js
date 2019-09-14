import React from 'react'

import ClickedForSaleHostel from '../pageComponents/clickedForSaleHostel'
import Nav from '../components/Nav'

const index = ({ location }) => {
    console.log("location is....", location.state.hostelData)
    return (
        <>
            <Nav />
            <ClickedForSaleHostel hostelData={location.state.hostelData} />
        </>
    );
};

export default index;