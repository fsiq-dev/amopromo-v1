import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 20px;
  height: 100%;
  flex: 0 0 320px;
  background: ${props => props.color};
  border-top: 5px solid rgba(0 ,0 ,0, 0.5);
  border-radius: 4px;
  & + div {
    margin-left: 25px;
  }
  ul {
    margin-top: 20px
  }
`
export const TitleContainer = styled.div`
display: flex;
align-items: center;
margin-top: 10px;
`

export const Title = styled.h2`
  font-weight: 700;
  font-size: 18px;
  color: #fff;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: -0.02em;
`
export const CustomButton = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: #fff;
  padding: 15px 0;
  cursor: pointer;

  span {
    margin-left: 10px;
  }
`
