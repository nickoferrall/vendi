const styles = theme => ({
    headerContainer: {
        backgroundColor: '#FFF',
        borderRadius: '5px',
        opacity: 0.85,
        padding: '16px',
        [theme.breakpoints.down('md')]: {
            minWidth: '50%'
        }
    },
    headlineText: {
        [theme.breakpoints.down('md')]: {
            fontSize: '40px',
        }
    }
})

export default styles