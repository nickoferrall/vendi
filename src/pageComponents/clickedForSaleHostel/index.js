import React from 'react'

import Header from '../../components/Header'
import PanelDisplay from './PanelDisplay'

const ClickedForSaleHostel = ({ hostelData }) => {
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
