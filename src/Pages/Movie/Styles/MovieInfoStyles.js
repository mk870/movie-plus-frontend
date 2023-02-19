import styled from 'styled-components'


export const MovieInfoStyles = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  color:white;
  .popup{
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      width: 100%;
      z-index:10;
    }
  .InfoCard{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(3px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius:20px;
    margin:25px;
    padding: 25px 15px;
    
    .videos{
      display:flex;
      flex-direction:row;
      justify-content:space-around;
      align-items:center;
      width: 100%;
      margin-top: 15px;
    }
    .container{
      display:grid;
      grid-template-columns: 1fr 1fr ;
      grid-gap:10px;
      
      justify-content:center;
      text-align:center;
      
      .poster{
        
        img{
          width:520px;
          height:640px;
          border-radius:20px;
          border: 2px solid white;
        }
      }
      .details{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        
        .descr{
          margin-bottom:10px;
          display:flex;
          flex-direction:column;
          span{
            margin-bottom:7px;
            font-weight:bold;
          }
          .genre{
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            width:100%;
            align-items:center;
            p{
              margin:7px;
            }
            
          }
          .title{
            font-size:25px;
          }
          span{
            font-size:17px;
          }
        }
        .characteristics{
          display:grid;
          grid-template-columns: 1fr 1fr ;
          grid-gap:10px;
          justify-content:center;
          align-items:center;
          .info{
            p{
              color:rgb(0,212,212);
            }
            a{
              color:white;
            }
          }
        }
        .production{
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          span{
            margin-bottom:7px;
            margin-top:12px;
            font-weight:bold;
          }
          .card{
            display: grid;
            grid-template-columns: 1fr  1fr ;
            .company{
              .name{
                margin:5px;
                
              }
            }
          }
          .card2{
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            .company{
              .name{
                margin:5px;
                
              }
            }
          }
        }

      }
    }
  }
  @media (max-width:1060px){
    .InfoCard{
      .container{
        .poster{
          img{
            height:440px;
            width:360px;
          }
        }
      }
    }
  }
  @media (max-width:860px){
    .InfoCard{
      .container{
        grid-template-columns: 1fr  ;
        .poster{
          img{
            height:440px;
            width:360px;
          }
        }
      }
    }
  }
  @media (max-width:610px){
    .InfoCard{
      .videos{
        display:grid;
        grid-template-columns: 1fr ;
        width:80%;
        grid-gap:10px;
        margin:15px;
      }
    }
  }
  @media (max-width:410px){
    .InfoCard{
      .container{
        grid-template-columns: 1fr  ;
        .poster{
          img{
            height:360px;
            width:240px;
          }
         
        }
        .details{
         .characteristics{
          grid-template-columns: 1fr;
           
         }
        }
      }
    }
  }
  
  @media (max-width:350px){
    .InfoCard{
      font-size:14px;
     margin:10px;
     padding: 15px 7px;
      .container{
        grid-template-columns: 1fr  ;
        .poster{
          img{
            height:360px;
            width:240px;
          }
         
        }
        .details{
         .characteristics{
          grid-template-columns: 1fr;
           
         }
        }
      }
    }
  }
  `