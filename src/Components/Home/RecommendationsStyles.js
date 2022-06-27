import styled from "styled-components";

export const RecommendationStyles = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  color:white;
  margin-bottom:20px;
  .searched-movie{
    display: grid;
    grid-template-columns: 1fr 1fr ;
    grid-gap:10px;
    width:80%;
    max-width:1300px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(3px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    
    .searched_image{
      img{
        border: 2px solid white;
        border-radius: 20px;
        width: 300px;
        height:420px;
      }
    }
    .searched_info{
      display: flex;
      flex-direction: column;
      text-align: center;
      padding-top: 2px;
      .title{
        font-size:22px;
      }
      .infocard{
        display:grid;
        grid-template-columns: 1fr 1fr ;
        grid-gap:10px;
        margin-bottom:15px;
        .info{
          display: flex;
          flex-direction: column;
          justify-content:center;
          align-items:center;
          p{
            color:rgb(0,212,212);
          }
         }
        .id{
         display:none;
        }
      }
      
    }
  }
  .heading{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
  }
  .recom-movies{
    width:80%;
    max-width:1500px;
    display:grid;
    
    justify-content:center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap:10px;
    .card{
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      text-align:center;
      margin-bottom:10px;
      .recom-h{
        margin-top:10px;
        
      }
      img{
        width: 240px;
        height:360px;
        border: 2px solid white;
        border-radius: 20px;
        &:hover{
          box-shadow: 0 0 25px white;
        }
      }
    }
  }
  .error{
    color:rgb(0,212,212);
    width:100%;
    min-width: 180px;
    text-align: center;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius:7px;
    padding:7px 5px;
  }
  @media (max-width:1020px){
   .searched-movie{
    width:90%;
   }
   .recom-movies{
     width:95%;
     
     .card{
      img{
        width:180px;
        height:240px;
      }
     }
   }
  }
  @media (max-width:920px){
   
   .recom-movies{
     width:95%;
     grid-template-columns: 1fr 1fr ;
     .card{
      img{
        width:240px;
        height:360px;
      }
     }
   }
  }
  @media (max-width:780px){
   .searched-movie{
   
      grid-template-columns: 1fr ;
      .searched_image{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
      }
   }
   .recom-movies{
     width:95%;
     grid-template-columns: 1fr 1fr ;
     
   }
  }
  @media (max-width:520px){
   .searched-movie{
     grid-template-columns: 1fr ;
   .searched_image{
     img{
       width:280px;
       height:360px;
     }
   }
  }
   .recom-movies{
     width:95%;
     grid-template-columns: 1fr 1fr ;
     .card{
      img{
        width:180px;
        height:240px;
      }
     }
   }
  }
  @media (max-width:450px){
   
   .recom-movies{
     width:95%;
     grid-template-columns: 1fr  ;
     .card{
      img{
        width:180px;
        height:240px;
      }
     }
   }
  }
  @media (max-width:360px){
   .searched-movie{
     grid-template-columns: 1fr ;
   .searched_image{
     img{
       width:180px;
       height:240px;
     }
   }
  }
   
  }
  `