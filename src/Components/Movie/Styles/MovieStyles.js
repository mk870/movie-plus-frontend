import styled from 'styled-components'
import pic from '../../Assets/back.jpg'

export const MovieStyles = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background-image: url(${pic});
  background-color: rgb(26, 24, 29);
  background-blend-mode: overlay;
  min-height:90vh;
  color:white;
  .heading{
    color:rgb(0,212,212);
  }
  .wrapper{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    .m-infor{
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      .m-info-heading{
        font-size:25px;
        color:rgb(0,212,212);
        margin-bottom:15px;
        margin-top:25px;
        text-align:center;
      }
    }
    .m-actors{
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      .m-info{
        font-size:25px;
        color:rgb(0,212,212);
        margin-top:10px;
        margin-bottom:15px;
      }
    }
    .m-reviews{
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      .m-info{
        font-size:25px;
        color:rgb(0,212,212);
        margin-bottom:15px;
      }
    }
  }
  `