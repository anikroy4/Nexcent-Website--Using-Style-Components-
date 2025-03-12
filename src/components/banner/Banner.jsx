import React from 'react'
import styled from 'styled-components';
import Container from '../common/Container';


const Banner = () => {
  return (
    <Background>
        <Container>
            <SideBySide>
                <BannerText>
                    <Heading>Lessons and insights <InnerHeading>from 8 years</InnerHeading></Heading>
                    <BannerParagraph>
                        We are team of talented designers making websites with Bootstrap
                    </BannerParagraph>
                    <Button>Register</Button>
                </BannerText>
                <BannerImage>
                    <img src="../public/illustration.png" alt="illustration" />
                </BannerImage>
            </SideBySide>
        </Container>
    </Background>
  )
}

export default Banner
const Background = styled.div `
  background-color: #F5F7FA;
  padding: 161px 0;
  font-weight: 500;
`;

const SideBySide = styled.div `
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  padding: 0 24px 0 39px;
`;

const BannerText = styled.div `
    max-width: 657px;
    text-align: start;
`;


const BannerParagraph = styled.p `
    color: #717171;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    margin-top: 16px;
    margin-bottom: 32px;
`;


const Heading = styled.h1 `
   color: var(--Neutral-D_Grey, #4D4D4D);
    font-family: Inter;
    font-size: 64px;
    font-style: normal;
    font-weight: 600;
    line-height: 76px;
`;

const InnerHeading = styled.span `
    color: var(--Brand-Primary, #4CAF4F);
    font-family: Inter;
    font-size: 64px;
    font-style: normal;
    font-weight: 600;
    line-height: 76px;
`;

const Button = styled.button `
    display: flex;
    padding: 14px 32px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 4px;
    background: var(--Brand-Primary, #4CAF4F);
    color: var(--Neutral-White, #FFF);
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */   
    border: none;
`;

const BannerImage = styled.div `
    img {
        width: 391px
    }
`;
