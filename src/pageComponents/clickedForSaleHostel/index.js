import React, { useContext } from 'react'

import { HostelDataContext } from '../../context/HostelDataContext'

import Header from '../../components/Header'
import PanelDisplay from './PanelDisplay'

const ClickedForSaleHostel = () => {
    const { clickedHostelData } = useContext(HostelDataContext)
    console.log("from clicked...", clickedHostelData)
    if (clickedHostelData) {
        return (
            <>
                <Header title={clickedHostelData.title} />
                <PanelDisplay hostelData={clickedHostelData} />
            </>
        )
    }
    else {
        return (
            <>
                {"Nothing to see here!"}
            </>
        )
    }
}

export default ClickedForSaleHostel
