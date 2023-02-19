import styled from 'styled-components'
import pic from '../../Components/Assets/back.jpg'

export const MyMoviesStyles = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  min-height:85vh;
  background-image: url(${pic});
  background-color: rgb(26, 24, 29);
  background-blend-mode: overlay;
  color:white;
  padding-top:50px;
  text-align:center;
  h2{
    color:rgb(0,212,212);
  }
  .movies-list{
    display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 10px;
        justify-content:center;
      align-items:center;
    width:80%;
    margin:10px;
    padding:0px 20px 0px 20px;
    border:2px solid grey;
    border-radius:7px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(3px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    
    .movie{
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      margin:3px 3px;
      .description{
        font-weight:bold;
        text-align:center;
        color:rgb(0,212,212);
        margin-bottom:6px;
      }

    }
    .btn{
      display: grid;
        grid-template-columns: 1fr ;
        grid-gap: 10px;
        justify-content:center;
      align-items:center;
      padding:5px;
      
    }
  }

  @media (max-width:1020px){
    .movies-list{
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      width:60%;
      min-width:250px;
      .movie{
        font-size:16px;
        .description{
          font-size:16px;
        }
      }
      .btn{
        width:90%;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 10px;
        align-items:center;
        margin: 10px 0px;
        
      }
    }
  }
`