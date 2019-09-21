
const styles = theme => ({
    card: {
        height: theme.spacing(57),
        width: theme.spacing(42),
        [theme.breakpoints.down('md')]: {
            marginBottom: theme.spacing(6)
        }
    },
    gridContainer: {
        padding: theme.spacing(4)
    },
    media: {
        height: theme.spacing(28)
    },
    boxTitle: {
        margin: theme.spacing(4),
        padding: theme.spacing(2),
        width: theme.spacing(100)
    },
    title: {
        padding: theme.spacing(2)
    }
})

export default styles