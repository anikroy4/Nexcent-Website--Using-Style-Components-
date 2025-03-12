import React, { children } from 'react'
import styled from 'styled-components';

const ListItem = ({ children }) => {
  return (
    <ListInnerItem>{children}</ListInnerItem>
  )
}

export default ListItem


const ListInnerItem = styled.li `
    justify-content: space-between;
    padding: 10px;
    list-style-type: none;
    font-family: Inter;
    font-size: 16px;
    color: #4F4F4F;
    font-weight: 500;
    cursor: pointer;
    &:hover {
      color: var(--Text-Gray-900, #18191F);
      font-style: normal;
    }

`;	