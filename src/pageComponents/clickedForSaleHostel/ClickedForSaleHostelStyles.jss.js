const styles = theme => ({
    box: {
        paddingBottom: theme.spacing(1),
        paddingTop: theme.spacing(1)
    },
    contactButtonGrid: {
        marginTop: theme.spacing(1)
    },
    keyInfo: {
        padding: theme.spacing(3)
    },
    panelInfoGrid: {
        margin: theme.spacing(2)
    },
    paperContainer: {
        padding: theme.spacing(3),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(1)
        }
    }
})

export default styles
