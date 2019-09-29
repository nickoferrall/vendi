const styles = theme => ({
    card: {
        height: theme.spacing(60),
        marginBottom: theme.spacing(8),
        width: theme.spacing(70)
    },
    headerCard: {
        height: theme.spacing(40),
        position: 'relative',
        top: theme.spacing(-5),
        width: theme.spacing(130)
    },
    headerCardContent: {
        height: '100%'
    },
    img: {
        height: theme.spacing(35)
    },
    readingTime: {
        marginLeft: 'auto',
        marginRight: theme.spacing(2)
    },
    readingTimeHeader: {
        marginLeft: 'auto',
        marginRight: theme.spacing(2),
    }
})

export default styles