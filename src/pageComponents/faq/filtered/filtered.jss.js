const styles = theme => ({
    textBody: {
        color: theme.palette.primary.main,
        [theme.breakpoints.down('xs')]: {
            fontSize: theme.typography.body2.fontSize - 2
        }
    },
    footer: {
        width: '50%',
        display: 'flex',
        textAlign: 'center'
    },
    icon: {
        color: theme.palette.secondary[700]
    },
    listItem: {
        backgroundColor: theme.palette.secondary[100]
    },
    listItemText: {
        padding: '1%'
    },
    subtitle: {
        color: theme.palette.secondary.main,
        marginBottom: '0.5%',
        [theme.breakpoints.down('xs')]: {
            fontSize: theme.typography.subtitle2.fontSize - 2
        }
    }
})

export default styles
