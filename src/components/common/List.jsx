import React, { Children } from 'react'
import styled from 'styled-components'
const List = ({children}) => {
  return (
    <ListItem>{children}</ListItem>
  )
}

export default List

const ListItem = styled.ul `
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-size: 16px;
  color: #4F4F4F;
  font-weight: 500;
  cursor: pointer;
`;  
