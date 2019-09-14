import React, { useContext } from "react"

import Homepage from '../pageComponents/homepage'
import Nav from '../components/Nav'
import { HostelDataContext } from '../../gatsby-browser'

const IndexPage = () => {
  const defaultState = useContext(HostelDataContext)
  console.log("defaultState..", defaultState)
  return (
    <>
      <Nav />
      {defaultState.testing}
      <Homepage />
    </>
  )
}

export default IndexPage
