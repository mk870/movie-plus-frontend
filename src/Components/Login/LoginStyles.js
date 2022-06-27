import styled from 'styled-components'
import pic from '../Assets/back.jpg'

export const LoginStyles = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  background-image: url(${pic});
  background-color: rgb(26, 24, 29);
  background-blend-mode: overlay;
  min-height:75vh;
  color:white;
  text-align:center;
  .card{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin:25px;
    padding:20px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(3px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius:20px;
    width: 500px;
    
    h2{
      color:rgb(0,212,212);
    }
    .form{
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      .wrapper{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        label{
          margin:5px 0px;
        }
        input{
          background: none;
          outline: none;
          border: none;
          border-bottom: 1px solid rgb(0,212,212);
          font-size: 1.2em;
          color:white;
          text-align:center;
          width:100%;
        }
        p{
          color:red;
        }
      }

      .submit{
        width:100%;
        display:flex;
        flex-direction:column;
        .link{
          cursor:pointer;
          text-decoration:underline;
          margin-top:10px;
          color:rgb(0,212,212);
        }
      }
    }
  }
  .item{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:20vh;
  }
  @media (max-width:600px){
    .card{
      width:75%;
    }
  }
`