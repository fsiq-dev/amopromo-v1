import styled from 'styled-components'

import { MdClose } from 'react-icons/md'
import Textarea from 'react-textarea-autosize'

export const Container = styled.div`
display: flex;
flex-direction: column;
margin-top: 10px;
padding: 10px;
height: 40px;
max-height: 60px;
border-radius: 4px;
background-color: #fff;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
export const StyledTextarea = styled(Textarea)`
resize: none;
width: 100%;
border: none;
`
export const Buttons = styled.div`
display: flex;
align-items: center;
padding-top: 5px;
padding-bottom: 20px;
`

export const Add = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #48a870;
border-radius: 4px;
width: 50px;
text-align: center;
text-transform: uppercase;
color: #fff;
font-weight: 700;
height: 30px;
width: 60px;
cursor: pointer;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`
export const Close = styled(MdClose)`
cursor: pointer;
width: 30px;
height: 24px;
`
