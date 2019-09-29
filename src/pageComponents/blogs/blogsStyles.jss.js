const styles = theme => ({
    card: {
        cursor: 'pointer',
        height: theme.spacing(60),
        marginBottom: theme.spacing(8),
        width: theme.spacing(70)
    },
    cardContent: {
        height: theme.spacing(20)
    },
    headerCard: {
        cursor: 'pointer',
        height: theme.spacing(40),
        marginBottom: theme.spacing(6),
        position: 'relative',
        top: theme.spacing(-5),
        width: theme.spacing(130)
    },
    headerCardContent: {
        height: theme.spacing(35),
    },
    headerImg: {
        height: theme.spacing(40)
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