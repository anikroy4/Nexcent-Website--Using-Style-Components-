import React from 'react'
import styled from 'styled-components'
import Container from '../common/Container'

const Designway = () => {
  return (
    <Background>
        <Container>
            <SidebySide>
                <DesignwayImage>
                    <img src="../public/pana.png" alt="pana.png" />  
                </DesignwayImage>
                <DesignwayText>
                        <DesignwayHeading>How to design your site footer like we did</DesignwayHeading>
                        <DesignwayParagraph>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</DesignwayParagraph>
                        <Button>Learn More</Button>
                </DesignwayText>
            </SidebySide>
        </Container>
    </Background>

)
}

export default Designway



const Background = styled.div`
background-color: #ffffff;
padding-bottom: 48px;
`;


const SidebySide = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  padding: 0 24px 0 39px;
`;


const DesignwayImage = styled.div`
width: 100%;
  height: auto;
`;


const DesignwayText = styled.div`
  max-width: 657px;
  text-align: start;
`;


const DesignwayHeading = styled.h2`
    color: var(--Neutral-D_Grey, #4D4D4D);
    font-family: Inter;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 44px; /* 122.222% */

`;


const DesignwayParagraph = styled.p`
    color: var(--Neutral-Grey, #717171);
    /* Body/Regular/Body 3 */
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    margin-top: 16px;
    margin-bottom: 32px;
`;

const Button = styled.button`
background-color: #4CAF4F;
border: none;
color: white;
padding: 14px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 4px 2px;
cursor: pointer;
border-radius: 4px;
`;  
