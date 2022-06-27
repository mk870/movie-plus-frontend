import styled from "styled-components";

export const ActorBioStyles = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
  color:white;
  .bio{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    h3{
      color:rgb(0,212,212);
    }
    .picture-personalInfo{
      display:grid;
      grid-template-columns: 1fr 1fr ;
      grid-gap:10px;
      width:80%;
      img{
        height:490px;
        width:360px;
        border-radius:15px;
        border:1px solid white;
      }
    }
    
    .bio-data{
      display:flex;
      flex-direction:column;
      justify-content:start;
      align-items:center;
      margin: 25px;
      //min-width:90%;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius:10px;
      padding:10px;
      .bio-descr{
        font-size:19px;
        margin:10px 0px;
        color:rgb(0,212,212);
      }
    }
  }
  @media (max-width:1000px){
   .bio{
    .picture-personalInfo{
     display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      width:90%;
      
    }
   }

  }
  @media (max-width:370px){
     .bio{
       .picture-personalInfo{
         img{
          height:440px;
          width:310px;
         }
       }
     }
  }
`