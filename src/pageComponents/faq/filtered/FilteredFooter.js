// import React, { useState } from 'react'

// import Pagination from 'material-ui-flat-pagination'

// import Box from '@material-ui/core/Box'

// import styles from './filtered.jss'
// import { withStyles } from '@material-ui/core/styles'

// const FilteredFooter = ({ classes, totalPages, updateQuestionRange }) => {
//   const [offset, setOffset] = useState(0)

//   return (
//     <Box fullWidth align="center">
//       <Pagination
//         className={classes.footer}
//         offset={offset}
//         onClick={(event, page) => {
//           setOffset(page)
//           updateQuestionRange(page + 1)
//         }}
//         size="large"
//         total={totalPages}
//       />
//     </Box>
//   )
// }

// export default withStyles(styles)(FilteredFooter)
