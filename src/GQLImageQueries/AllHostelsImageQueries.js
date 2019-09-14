import { graphql, useStaticQuery } from 'gatsby'

// It's not currently possible to pass variables into static queries
// according to: https://github.com/gatsbyjs/gatsby/issues/10482
// This is a known issue and when it's resolved, we can pass
// an image path variable into a static query and just have 1 hook for
// images queries. For now, I'm repeating the query for each image

const useImageQueries = () => {
    const imageData = useStaticQuery(graphql`
        query {
            blackSheepMedellin: file(relativePath: { eq: "hostels/black-sheep-hostel.jpg" }) {
            childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
            ...GatsbyImageSharpFluid
            }}}

            casaBellavista: file(relativePath: { eq: "hostels/casa-bellavista.jpg" }) {
            childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
            ...GatsbyImageSharpFluid
            }}}

            cocoaHostel: file(relativePath: { eq: "hostels/cocoa-hostel.jpg" }) {
            childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
            ...GatsbyImageSharpFluid
            }}}

            dreamerHostel: file(relativePath: { eq: "hostels/dreamer-hostel-santa-marta.jpg" }) {
            childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
            ...GatsbyImageSharpFluid
            }}}

            hostelTralalaSalento: file(relativePath: { eq: "hostels/hostel-tralala-salento.jpg" }) {
            childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
            ...GatsbyImageSharpFluid
            }}}

            makako: file(relativePath: { eq: "hostels/makako.jpg" }) {
                childImageSharp {
                fluid(maxWidth: 1000, quality: 90) {
                ...GatsbyImageSharpFluid
            }}}

            oasisCali: file(relativePath: { eq: "hostels/oasis-cali.jpg" }) {
            childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
            ...GatsbyImageSharpFluid
            }}}

            renacer: file(relativePath: { eq: "hostels/renacer-hostel.jpg" }) {
            childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
            ...GatsbyImageSharpFluid
            }}}

            theCrankyCrocHostel: file(relativePath: { eq: "hostels/the-cranky-croc-hostel.jpg" }) {
            childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
            ...GatsbyImageSharpFluid
            }}}
        }
    
  `)
    return [
        imageData.blackSheepMedellin.childImageSharp.fluid,
        imageData.casaBellavista.childImageSharp.fluid,
        imageData.cocoaHostel.childImageSharp.fluid,
        imageData.dreamerHostel.childImageSharp.fluid,
        imageData.hostelTralalaSalento.childImageSharp.fluid,
        imageData.makako.childImageSharp.fluid,
        imageData.oasisCali.childImageSharp.fluid,
        imageData.renacer.childImageSharp.fluid,
        imageData.theCrankyCrocHostel.childImageSharp.fluid
    ]
}

export default useImageQueries
