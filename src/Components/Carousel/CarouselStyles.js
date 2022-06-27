import styled from 'styled-components'

export const CarouselStyles = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;
  padding:20px 10px 10px 10px;
  
  .preview{
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:rgb(0,212,212);
    text-align:center;
  }
  .slidercontent{
    display: flex;
    justify-content:center;
    align-items:center;
    
  }
  
  img{
    height:450px;
    width: 400px;
    border:2px solid silver;
    &:hover{
        box-shadow: 0 0 25px white;
      }
  }
  .arrow{
    border:2px solid white;
    border-radius:50%;
    background:transparent;
    color:white;
    width: 2rem;
    height: 2rem;
    top:255%;
    margin:20px;
    cursor:pointer;
    z-index:10;
    &:hover{
      background:rgb(255,255,255,0.5);
    }
  }
  .next{    
    right:1.5rem;
  }
  .prev{
    left:1.5rem;
  }
  .current{
    opacity:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    transform:translateX(-10%);
    transition:all 0.5s ease;
    transform: translateX(0)
  }
  .slide{
    opacity:0;
    transform:translateX(-10%);
    transition:all 0.5s ease;
  }
  .newmoviesGrid{
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   span{
     color:white;
     margin-bottom:10px;
   }
   .grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    .movie{
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      
      img{
       height:100px;
       width:80px;
       &:hover{
        box-shadow: 0 0 25px white;
       }
      }
      
    }
   }
  }
  @media (max-width:1200px){
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   img{
     height:500px;
     width:460px;
   }
   .newmoviesGrid{
     span{
       margin-top:15px;
     }
   }
  }
  @media (max-width:600px){

    img{
      height: 400px;
      width: 360px;
    }
    .arrow{
      width: 1.5rem;
      height:1.5rem;
      margin: 5px;
    }
  }
  @media (max-width:430px){
    .slidercontent{
      margin:1px;
    }
    .arrow{
      width:1.1rem;
      height: 1.1rem;

    }
  }
  @media (max-width:380px){
    img{
      height:250px;
      width:220px;
    }
    .slidercontent{
      margin:1px;
    }
    .arrow{
      width:1.1rem;
      height: 1.1rem;

    }
    .newmoviesGrid{
     .grid{
       grid-template-columns: 1fr 1fr 1fr;
     }
    }
  }
`