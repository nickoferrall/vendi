import React, { useState } from "react"

import Filter from '../components/Filter'
// import FilteredContainer from '../pageComponents/faq/filtered'
import Header from '../components/Header'
import Layout from "../components/layout"
import Questions from '../pageComponents/faq/Questions'
import SEO from "../components/seo"
import UnfilteredContainer from '../pageComponents/faq/unfiltered'

import Grid from '@material-ui/core/Grid'

import styles from '../pageStyles/learn.jss'
import { withStyles } from '@material-ui/core/styles'

const Learn = ({ classes }) => {
    const [filteredQuestions, setFilteredQuestions] = useState('')
    const [userInput, setUserInput] = useState('')

    const filterQuestions = userInput => {
        setUserInput(userInput)
        const userInputLower = userInput.toLowerCase()
        const filtered = Questions.flatMap(section =>
            section.questions.filter(
                qAndA =>
                    qAndA.question.toLowerCase().includes(userInputLower) ||
                    qAndA.answer.toLowerCase().includes(userInputLower)
            )
        )
        setFilteredQuestions(filtered)
    }

    return (
        <Layout>
            <Header title="FAQs about running a hostel in Colombia " />
            <SEO title="Learn" />
            <Grid container justify="center">
                <Grid
                    className={classes.container}
                    container
                    justify="center"
                    xs
                >
                    <Filter
                        filterQuestions={filterQuestions}
                        setUserInput={setUserInput}
                    />
                    <UnfilteredContainer />
                    {/* {userInput.length === 0 ? (
                        <UnfilteredContainer />
                    ) : (
                            <FilteredContainer filteredQuestions={filteredQuestions} />
                        )} */}
                </Grid>
            </Grid>
        </Layout>
    )
}

export default withStyles(styles)(Learn)

