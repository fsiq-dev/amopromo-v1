import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 30px;
  height: calc(100 - 80px);
`
export const CustomButton = styled.div`
  display: flex;
  align-items: center;
  background-color: #cbd1d6;
  width: 250px;
  height: 30px;
  border-radius: 6px;
  padding: 10px 25px;
  cursor: pointer;

  span {
    margin-left: 10px;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: -0.02em;
    color: #212529;
  }
`
