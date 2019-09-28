import React from 'react'

import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'
import Slider from 'react-slick'
import styled from 'styled-components'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography } from '@material-ui/core';

const Wrapper = styled.div`
    padding: 16px;
    width: 100%;
`;

const Page = styled.div`
    width: 100%;
`;

const BusinessImages = ({ hostelData }) => {
    const imageData = useStaticQuery(graphql`
        query {
        renacer: file(relativePath: { eq: "hostels/renacer-hostel.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 1000,  quality: 90) {
            ...GatsbyImageSharpFluid
            }
        }
        }
    }
    `)

    return (
        <Wrapper>
            <Slider
                dots={true}
                infinite={false}
                slidesToScroll={1}
                slidesToShow={1}
                speed={500}
            >
                {hostelData.image.map(img => {
                    return <Img fluid={img.fluid} />
                })}
            </Slider>
        </Wrapper>
    )
}

export default BusinessImages