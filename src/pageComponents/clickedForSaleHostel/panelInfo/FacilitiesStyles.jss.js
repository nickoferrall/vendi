const styles = theme => ({
    listItem: {
        width: '48%',
        [theme.breakpoints.down('md')]: {
            width: '100%'
        }
    },
    paperContainer: {
        padding: theme.spacing(3),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(1)
        }
    }
})

export default styles
