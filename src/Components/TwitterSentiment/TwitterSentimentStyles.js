import styled from 'styled-components'
import pic from '../Assets/back.jpg'

export const TwitterSentimentStyles = styled.div`
  background-image: url(${pic});
  background-color: rgb(26, 24, 29);
  background-blend-mode: overlay;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  color:white;
  text-align:center;
  min-height:90vh;
  .container{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin:25px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(3px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius:20px;
    padding:12px;
    h2{
     color:rgb(0,212,212);
    }
    .p-score{
       display:flex;
       flex-direction:column;
       justify-content:center;
       align-items:center;
       .present-score{
         font-size:19px;
         margin-bottom:5px;
       }
       .score{
         font-size:22px;
         color: ${props=>props.colour};
         font-weight:bold;
       }
    }
    .cloud-wrapper{
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      
      .cloud{
        border-radius: 10px;
        border: 3px solid ${props=>props.colour};
        background: white;
        margin:10px;
        width: 700px;
        height:500px;
      }
    }
  }
  @media (max-width:880px){
    .container{
     
     .cloud-wrapper{
      .cloud{
        width: 450px;
        height:450px;
      }
     }
    }
  }
  @media (max-width:550px){
    .container{
     padding:10px;
     .cloud-wrapper{
      .cloud{
        width: 360px;
        height:360px;
      }
     }
    }
  }
  @media (max-width:430px){
    .container{
     
     .cloud-wrapper{
      .cloud{
        width: 290px;
        height:290px;
      }
     }
    }
  }
  @media (max-width:370px){
    .container{
     
     .cloud-wrapper{
      .cloud{
        width: 260px;
        height:260px;
      }
     }
    }
  }
  `