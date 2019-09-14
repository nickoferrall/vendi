const styles = theme => ({
    box: {
        backgroundColor: '#fff',
        padding: '50px',
        [theme.breakpoints.down('xs')]: {
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1)
        }
    },
    expansionPanel: {
        backgroundColor: theme.palette.secondary.main,
        margin: '5px 0px'
    },
    expansionPanelDetails: {
        backgroundColor: '#FFF',
        padding: 0
    },
    subtitle: {
        color: theme.palette.secondary.main,
        marginBottom: '5px',
        [theme.breakpoints.down('xs')]: {
            fontSize: theme.typography.subtitle2.fontSize - 2
        }
    },
    textBody: {
        color: theme.palette.primary.main,
        marginBottom: '18px',
        [theme.breakpoints.down('xs')]: {
            fontSize: theme.typography.body2.fontSize - 2
        }
    },
    title: {
        color: theme.palette.background.default,
        [theme.breakpoints.down('xs')]: {
            fontSize: theme.typography.subtitle2.fontSize - 2
        }
    }
})

export default styles
