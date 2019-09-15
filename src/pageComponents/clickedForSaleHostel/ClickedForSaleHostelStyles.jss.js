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
    listItem: {
        width: '48%',
        [theme.breakpoints.down('md')]: {
            width: '100%'
        }
    },
    panelInfoGrid: {
        margin: theme.spacing(2)
    },
    paperContainer: {
        padding: theme.spacing(3),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(1)
        },
        [theme.breakpoints.down('sm')]: {
            padding: 0
        }
    }
})

export default styles
