import React from 'react'
import styled from 'styled-components'
import Container from '../common/Container'

const Pixelgrade = () => {
  return (
    <Background>
        <Container>
            <SidebySide>
                <PixelImage>
                    <img src="../public/Frame35.png" alt="Frame35.png" />  
                </PixelImage>
                <PixelText>
                        <PixelHeading>The unseen of spending three years at Pixelgrade</PixelHeading>
                        <PixelParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</PixelParagraph>
                        <Button>Learn More</Button>
                </PixelText>
            </SidebySide>
        </Container>
    </Background>

)
}

export default Pixelgrade



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


const PixelImage = styled.div`
width: 100%;
`;


const PixelText = styled.div`
  max-width: 657px;
  text-align: start;
`;


const PixelHeading = styled.h2`
    color: var(--Neutral-D_Grey, #4D4D4D);

    /* Heading/Headline 2 */
    font-family: Inter;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 44px; /* 122.222% */

`;


const PixelParagraph = styled.p`
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
