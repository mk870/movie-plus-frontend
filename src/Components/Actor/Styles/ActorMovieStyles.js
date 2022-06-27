import styled from "styled-components";

export const ActorMoviesStyles = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
  color:white;
  .list{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    h3{
      color:rgb(0,212,212);
    }
    .card-list{
      display:grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap:10px;
      justify-content:center;
      margin-bottom:15px;
     .item{
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      padding:7px;
      img{
        height:360px;
        width:240px;
        border: 2px solid white;
        border-radius:7px;
        &:hover{
          box-shadow: 0 0 25px white;
        }
      }
     }
    }
   
  }
  @media (max-width:1100px){
    .list{
      .card-list{
        .item{
          img{
            height:300px;
            width:200px;
          }
        }
      }
    }
  }
  @media (max-width:920px){
    .list{
      .card-list{
        grid-template-columns: 1fr 1fr 1fr;
        .item{
          img{
            height:300px;
            width:200px;
          }
        }
      }
    }
  }
  @media (max-width:690px){
    .list{
      .card-list{
        grid-template-columns: 1fr 1fr;
        .item{
          img{
            height:300px;
            width:200px;
          }
        }
      }
    }
  }
  @media (max-width:500px){
    .list{
      .card-list{
        grid-template-columns: 1fr;
        .item{
          img{
            height:300px;
            width:200px;
          }
        }
      }
    }
  }
`