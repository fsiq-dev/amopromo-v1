import styled from 'styled-components'
import { FiTrash } from 'react-icons/fi'
export const Container = styled.div`
margin-top: 10px;
padding: 10px;
height: 60px;
max-height: 60px;
border-radius: 4px;
background-color: #fff;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
cursor: grab;
span {
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #212529;
}
&:hover {
  .hover{
    display: block
  }
}
`

export const Tag = styled.div`
width: 50px;
text-align: center;
position: relative;
top: 15px;
background-color: ${props => props.color};
border-radius: 5px;
span {
  color: #fff;
  font-weight: 500;
}

`
export const Trash = styled(FiTrash)`
position: relative;
left: 280px;
top: -40px;
cursor: pointer;
display: none;
`
