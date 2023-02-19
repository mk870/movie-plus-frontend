import styled from 'styled-components'


export const ReviewsStyles = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  color:white;
  text-align:center;
  margin-bottom:15px;
  .reviews-wrapper{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    .review{
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(3px);
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius:20px;
      padding:10px;
      margin:10px;
      width:85%;
      .pic{
        margin-bottom:15px;
        img{
          width: 120px;
          height:120px;
          border-radius:45%;
        }
      }
      .name{
        font-weight:bold;
        margin-bottom:15px;
        color:rgb(0,212,212);
      }
      .content{
        margin-bottom:15px;
      }
    }
    .btn{
      display:grid;
      grid-template-columns: 1fr ;
      width:30%;
      margin:15px;
      
    }
  }

  @media (max-width:760px){
    .reviews-wrapper{
      
      .btn{
        width:60%;
      }
    }
    
    }
    @media (max-width:380px){
    .reviews-wrapper{
      .review{
        
        .content{
          font-size:12px;
        }
      }
      .btn{
        width:60%;
      }
    }
   
  }
  `