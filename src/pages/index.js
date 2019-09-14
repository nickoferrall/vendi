import React, { useContext } from "react"

import Homepage from '../pageComponents/homepage'
import Nav from '../components/Nav'
// import { HostelDataContext } from '../context/HostelDataContext'

const IndexPage = () => {
  // const { hostelData, setHostelData } = useContext(HostelDataContext)
  return (
    <>
      <Nav />
      <Homepage />
    </>
  )
}

export default IndexPage
