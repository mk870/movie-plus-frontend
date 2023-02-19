import styled from "styled-components";
import pic from '../../Components/Assets/back.jpg'

export const WatchVideoStyles = styled.div`
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
    display:grid;
    grid-template-columns: 1fr 1fr;
    justify-content:center;
    
    grid-gap:20px;
    margin:40px 20px;
    max-width:1200px;
    padding:20px;
    .video{
      
      .embed{
        
        .iframe{
          width:700px;
          height:500px;
        }
      }
      .segment{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        h4{
          color:rgb(0,212,212);
        }
      }
    }
    .videoList{
      display:flex;
      flex-direction:column;
      justify-content:start;
      height:100%;
      .item{
        display:flex;
        flex-direction:row;
        justify-content:start;
        align-items:center;
        margin-bottom:10px;
        
        border-bottom:1px solid rgb(0,212,212);
        
        &:hover{
          background: rgba(255, 255, 255, 0.3);
          cursor:pointer;
          .image{
            border:1px solid rgb(0,212,212);
        }
        }
        .image{
          width:220px;
          height:140px;
        }
        .content{
          width:50%;
          .header{
            margin:0px 10px;
          }
        }
      }
    }

  }
  .container-trailer{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin:40px 20px;
    max-width:1200px;
    padding:20px;
    .video{
      
      .embed{
        
        .iframe-trailer{
          width: 90vw;
          max-width:1500px;
          height: 95vh;
        }
      }
      .segment{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        h4{
          color:rgb(0,212,212);
        }
      }
    }
  }
  @media (max-width:1100px){
    .container{
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
    }
  }
  @media (max-width:800px){
    .container{
      .video{
        .embed{
          .iframe{
            width:80vw;
            height:90vh;
          }
        }
      }
    }
  }
  @media (max-width:500px){
    .container-trailer{
      .video{
        .embed{
          .iframe-trailer{
            width:90vw;
            height:60vh;
          }
          .segment{
            .header{
              
            }
          }
        }
      }
    }
  }
  @media (max-width:400px){
    .container{
      padding:10px;
      .video{
        .embed{
          .iframe{
            width:80vw;
            height:60vh;
          }
        }
      }
      .videoList{
        .item{
          .image{
            width:120px;
            height:80px;
          }
          .content{
            .header{
              margin:0px 5px;
            }
          }
        }
      }
    }
  }
`