import styled from 'styled-components'


export const MovieActorsStyles = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  color:white;
  text-align:center;
  margin:1px 15px 15px 15px;
  .actors-wrapper{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap:10px;
    .actor{
      padding:10px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(3px);
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius:20px;
      border-radius:10px;
      margin:10px;
      .profile{
        img{
          height:180px;
          width:160px;
          border-radius:45%;
        }
      }
      .details{
       display:flex;
        flex-direction:column;
        align-items:center;
        margin-top:10px;
      .info{
        display:grid;
        grid-template-columns: 1fr 1fr;
        grid-gap:10px;
        justify-content:center;
        align-items:center;
        .descr{
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          .name{
            font-weight:bold;
          }
        }
      }
      .btns{
        display:grid;
        grid-template-columns: 1fr;
        grid-gap:10px;
        justify-content:center;
        align-items:center;
        margin-top:10px;
        width: 100%;
      }
     }
    }
  }
  
  @media (max-width:980px){
   .actors-wrapper{
     
     grid-template-columns: 1fr 1fr 1fr;
  }
 }
  @media (max-width:850px){
   .actors-wrapper{
     
     
     .actor{
      
      .profile{
        img{
          height:120px;
          width:100px;
          border-radius:45%;
        }
      }
     }
  }
 }
 @media (max-width:750px){
   .actors-wrapper{
     
     grid-template-columns: 1fr 1fr;
     .actor{
      .profile{
        img{
          height:180px;
          width:160px;
          border-radius:45%;
        }
      }
     }
  }
 }
 @media (max-width:500px){
   .actors-wrapper{
     grid-template-columns: 1fr;
     .actor{
      .profile{
        img{
          height:180px;
          width:160px;
          border-radius:45%;
        }
      }
     }
  }
 }
`