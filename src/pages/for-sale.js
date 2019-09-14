import React, { useContext } from 'react'

import { HostelDataContext } from '../context/HostelDataContext'

import ClickedForSaleHostel from '../pageComponents/clickedForSaleHostel'
import Nav from '../components/Nav'

const ForSale = () => {
    const { clickedHostelData } = useContext(HostelDataContext)
    return (
        <>
            <Nav />
            {clickedHostelData ?
                <ClickedForSaleHostel hostelData={clickedHostelData} />
                : null
            }
        </>
    );
};

export default ForSale;