import React, { useContext } from 'react'

import { HostelDataContext } from '../../context/HostelDataContext'

import Header from '../../components/Header'
import PanelDisplay from './PanelDisplay'

const ClickedForSaleHostel = () => {
    const { clickedHostelData } = useContext(HostelDataContext)
    if (clickedHostelData) {
        return (
            <>
                <Header title={clickedHostelData.title} />
                {/* <PanelDisplay hostelData={clickedHostelData} /> */}
            </>
        )
    }
    else {
        return null
    }
}

export default ClickedForSaleHostel
