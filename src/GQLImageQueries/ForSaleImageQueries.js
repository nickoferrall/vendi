import { graphql, useStaticQuery } from 'gatsby'

// It's not currently possible to pass variables into static queries
// according to: https://github.com/gatsbyjs/gatsby/issues/10482
// This is a known issue and when it's resolved, we can pass
// an image path variable into a static query and just have 1 hook for
// images queries. For now, I'm repeating the query for each image

const useImageQueries = () => {
    const imageData = useStaticQuery(graphql`
        query {
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
        }
  `)
    return [
        imageData.oasisCali.childImageSharp.fluid,
        imageData.renacer.childImageSharp.fluid
    ]
}

export default useImageQueries
