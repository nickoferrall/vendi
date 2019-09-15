const styles = theme => ({
    headlineBox: {
        backgroundColor: '#FFF',
        borderRadius: '5px',
        opacity: 0.85,
        padding: theme.spacing(1.5),
        [theme.breakpoints.down('md')]: {
            minWidth: '50%'
        }
    },
    headlineText: {
        [theme.breakpoints.down('md')]: {
            fontSize: '56px',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '40px',
        }
    }
})

export default styles