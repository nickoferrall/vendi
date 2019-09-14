import React from 'react'

import Header from '../../components/Header'
import PanelDisplay from './PanelDisplay'

import styles from './ClickedForSaleHostelStyles.jss'
import { withStyles } from '@material-ui/core/styles'

const ClickedForSaleHostel = ({ hostelData, classes }) => {
    return (
        <>
            <Header title={hostelData.title} />
            <PanelDisplay hostelData={hostelData} />
        </>
    )
}

export default withStyles(styles)(ClickedForSaleHostel)
