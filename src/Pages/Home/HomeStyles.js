import styled from 'styled-components'
import pic from '../../Components/Assets/back.jpg'

export const HomeStyles = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background-image: url(${pic});
  background-color: rgb(26, 24, 29);
  background-blend-mode: overlay;
  min-height:90vh;
  padding:10px;
  .newMovies{
    width:100%;
    border-bottom:1px solid rgb(0,212,212);
  }
  .search{
    max-width:800px;
    width:100%;
    display:flex;
    flex-direction:column;
    margin:25px 10px 25px 10px;
    
    .search-input{
      display:flex;
      flex-direction:row;
      justify-content:center;
      align-items:start;
      margin:0px 10px;
      
      .search-bar{
        display:flex;
        flex-direction:column;
        margin:0px 10px 0px 10px;
        width:40vw;
        min-width: 180px;
        
        input{
          width: 100%;
          min-width: 180px;
          text-align: center;
          font-size: 1em;
          height: 2em;
          border-radius: 7px;
          outline: none;
          
        }
        .suggestions{
          width:100%;
          min-width: 180px;
          text-align: center;
          background: rgba(255, 255, 255, 0.2);
          border-radius:7px;
          padding:7px 5px;
          color:white;
          
          .list-item{
            padding:7px 0px 7px 0px;
            &:hover{
              background:grey;
              cursor: pointer;
            }
            
          }
        }
        .error{
          width:100%;
          min-width: 180px;
          text-align: center;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-radius:7px;
          padding:7px 5px;
          color:rgb(0,212,212);
        }
        
      }
    }
  }
  .no-movies{
          width:100%;
          min-width: 180px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.5);
          background: rgba(255, 255, 255, 0.1);
          border-radius:7px;
          padding:7px 5px;
          
          h4{
            text-align:center;
            color:rgb(0,212,212);
          }
        }
  .recommendations{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:white;
    .heading{
      text-align:center;
    }
  }
  `