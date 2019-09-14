import React, { useContext } from 'react'

import { HostelDataContext } from '../../context/HostelDataContext'

import Header from '../../components/Header'
import PanelDisplay from './PanelDisplay'

import styles from './ClickedForSaleHostelStyles.jss'
import { withStyles } from '@material-ui/core/styles'

const ClickedForSaleHostel = ({ hostelData, classes }) => {
    const { clickedHostelData } = useContext(HostelDataContext)
    return (
        <>
            <Header title={clickedHostelData.title} />
            <PanelDisplay hostelData={clickedHostelData} />
        </>
    )
}

export default withStyles(styles)(ClickedForSaleHostel)
