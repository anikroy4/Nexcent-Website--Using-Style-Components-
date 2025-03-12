import React from 'react'
import styled from 'styled-components'
import Container from '../common/Container'
import List from '../common/List'
import ListItem from '../common/ListItem'


const Navbar = () => {
  return (
    <Background>
        <Container>
            <SideBySide>
                <Logo>
                  <img src="../public/Logo.png" alt="logo" />
                </Logo>
                <MenuItem>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Service</ListItem>
                    <ListItem>Feature</ListItem>
                    <ListItem>Product</ListItem>
                    <ListItem>Testimonial</ListItem>
                    <ListItem>FAQ</ListItem>
                </List>
                </MenuItem>
               <Button>
                  <GroupButton>Log In</GroupButton>    
                  <GroupButton>Sign Up</GroupButton> 
                </Button>   
            </SideBySide>    
        </Container>    
    </Background>
  )
}

export default Navbar


const Background = styled.div `
  background: #F5F7FA;
`;
const SideBySide = styled.div `
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
`;

const Button= styled.div `
  display: flex;
  column-gap: 20px;
`;

const GroupButton = styled.button `
  color: var(--Default-White, #FFF);
  text-align: center;
  font-feature-settings: 'salt' on, 'liga' off, 'clig' off;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  // border-radius: 6px;
  background: #4CAF4F;
   padding: 10px 20px;
    border: none;
    &:hover {
      background: none;
      color: var(--Brand-Primary, #4CAF4F);
    }

`;
const Logo = styled.div `
`;
const MenuItem = styled.div `
`;