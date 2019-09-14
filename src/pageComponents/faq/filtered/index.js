import React, { useEffect, useState } from 'react'

import Grid from '@material-ui/core/Grid'

// import FilteredFooter from './FilteredFooter'
import QuestionAndAnswer from '../filtered'

const FilteredContainer = ({ filteredQuestions }) => {
    const [firstQueIndex, setFirstQueIndex] = useState(0)
    const [lastQueIndex, setLastQueIndex] = useState(9)
    const [totalPages, setTotalPages] = useState(1)

    const updateQuestionRange = currentPage => {
        setFirstQueIndex(currentPage * 10 - 10)
        setLastQueIndex(currentPage * 10)
    }

    useEffect(() => {
        const numOfPages = Math.ceil(filteredQuestions.length / 10)
        setTotalPages(numOfPages)
    })

    return (
        <Grid xs={12}>
            {filteredQuestions.map((qAndA, index) => {
                return firstQueIndex <= index && index < lastQueIndex ? (
                    <QuestionAndAnswer
                        currentPage
                        key={`${index}-${qAndA.id}-${qAndA.question}`}
                        qAndA={qAndA}
                    />
                ) : null
            })}
            {/* <FilteredFooter
        totalPages={ totalPages }
        updateQuestionRange={ updateQuestionRange }
      /> */}
        </Grid>
    )
}

export default FilteredContainer
