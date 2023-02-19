import styled from "styled-components";

export const PersonalInfoStyles = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
  text-align:center;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius:7px;
  width:100%;
  min-width:40vw;
  .btn{
    margin:10px;
    width:100%;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
  }
  .info{
    display:flex;
    justify-content:center;
    flex-direction:column;
    padding:10px;
    h3{
      color:rgba(0,212,212);
    }
    .popup{
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    width: 10%;
  }
    .detail{
      display:grid;
      grid-template-columns: 1fr 1fr ;
      grid-gap:10px;
      justify-content:center;
      margin:10px 0px;
      
      .descr-data{
        font-size:17px;
        color:rgba(0,212,212);
      }
      .data{
        color:white;
        margin-left:10px;
      }
      a{
        color:white;
      }
      .data-link{
        color:white;
        margin-left:10px;
        cursor:pointer;
      }
    }
  }
  @media (max-width:1000px){
    .info{
      .popup{
      display:flex;
      justify-content:center;
      flex-direction:column;
      align-items:center;
      width: 100%;
      }
    }
    
  }
`