import styled from 'styled-components'

export const FooterStyles = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background: black;
  color:white;
  .info{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin-top:10px;
    .name{
      span{
        font-weight:bold;
        font-size:18px;
        
      }
      .two{
        color:rgb(0,212,212);
      }
      .one{
        color:white;
      }
    }
    span{
      margin-top:5px;
    }
  }
  .links{
    display:flex;
    justify-content:space-between;
    flex-direction:row;
    span{
      margin:15px;
      padding:8px;
      border-radius:10px;
      &:hover{
        cursor:pointer;
        background: #26282b;
      }
    }
  }
`