import React from 'react'

import Img from 'gatsby-image'
import Slider from 'react-slick'
import styled from 'styled-components'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
    padding: 16px;
    width: 100%;
`

const BusinessImages = ({ hostelData }) => {
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