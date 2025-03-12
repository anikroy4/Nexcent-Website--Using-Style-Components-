import React from 'react'
import styled from 'styled-components'
import Container from '../common/Container'
import { FaArrowRightLong } from 'react-icons/fa6'

const Demo = () => {
  return (
    <Background>
        <Container>
            <InnerContainer>
                <h2>Pellentesque suscipit fringilla libero eu.</h2>
            </InnerContainer>
            <Button>
            <InnerButton>
            Get a Demo <FaArrowRightLong/>
            </InnerButton>
            </Button>
        </Container>
    </Background>
  )
}

export default Demo


const Background= styled.div`
    background: var(--Neutral-Silver, #F5F7FA);
    align_items:center;
`;
const InnerContainer= styled.div`
    color: var(--Neutral-Black, #263238);
    text-align: center;
    font-family: Inter;
    font-size: 64px;
    font-style: normal;
    font-weight: 600;
    line-height: 76px; /* 118.75% */
    padding:32px 0; 
`;

const Button=styled.div`
    display: flex;
    justify-content: center;
    padding: 32px 0;
`;


const InnerButton=styled.button`
    border-radius: 4px;
    background: var(--Brand-Primary, #4CAF4F);
    color: var(--Neutral-White, #FFF);
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
    display: flex;
    padding: 14px 32px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border: none;
`;