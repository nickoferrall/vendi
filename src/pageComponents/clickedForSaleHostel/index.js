import React, { useContext } from 'react'

import { HostelDataContext } from '../../context/HostelDataContext'

import Header from '../../components/Header'
import PanelDisplay from './PanelDisplay'

const ClickedForSaleHostel = ({ hostelData }) => {
    // const { clickedHostelData } = useContext(HostelDataContext)
    if (hostelData) {
        return (
            <>
                <Header title={hostelData.hostelName} />
                <PanelDisplay hostelData={hostelData} />
            </>
        )
    }
    else {
        return null
    }
}

export default ClickedForSaleHostel
