import styled from 'styled-components'

export const SharedTitle = styled.div`
  font-size: 56px;
  overflow-wrap: normal;
  font-weight: 600;
  margin: 10px 0;
  
  span {
    font-weight: 100;
    margin-right: 12px;
    margin: 0;
    padding-right: 10px;
  }
`

export const SharedDescription = styled.p`
  font-weight: 300;
  max-width: 780px;
  font-size: 24px;
  line-height: 30px;
  margin: 0px;
`

export const SharedButton = styled.button`
  font-size: 21px;
  text-decoration: none;
  color: #ffff;
  padding: 15px 20px;
  margin: 10px 0;
  background-color : transparent; 
  border: 2px solid #455757;
  transition: all linear 0.5s;
  cursor : pointer;
  &:hover {
    color: #ffff;
    opacity: 0.8;
    box-shadow: 5px 5px #ebda86;
  }
`

export const SharedDetailBlock = styled.div`
color : #FFFF;
display : flex;
flex-direction : column ;
align-items : center;
.title {
    font-size: 48px;
    font-weight: 700;
}
.description {
    font-size:14px;
    margin : 5px 0;
    font-weight: 700;
}
`

export const SharedForum = styled.div`
border : 1px solid #FFFF;
padding : 10px 25px;
font-weight : 300;
font-size : 24px;
border-radius : 8px;
`