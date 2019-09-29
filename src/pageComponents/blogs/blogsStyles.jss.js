const styles = theme => ({
    card: {
        cursor: 'pointer',
        height: theme.spacing(60),
        marginBottom: theme.spacing(8),
        width: theme.spacing(70),
        [theme.breakpoints.down('md')]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(4),
            width: '100%'
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(1),
            width: '100%'
        },
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
        width: theme.spacing(130),
        [theme.breakpoints.down('md')]: {
            height: theme.spacing(35),
            width: theme.spacing(100)
        },
        [theme.breakpoints.down('sm')]: {
            height: theme.spacing(25),
            width: theme.spacing(80)
        }
    },
    headerCardContent: {
        height: theme.spacing(35),
        [theme.breakpoints.down('md')]: {
            height: theme.spacing(29),
        },
        [theme.breakpoints.down('sm')]: {
            height: theme.spacing(20),
        },
    },
    headerImg: {
        height: theme.spacing(40),
        [theme.breakpoints.down('sm')]: {
            height: theme.spacing(30),
        },
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