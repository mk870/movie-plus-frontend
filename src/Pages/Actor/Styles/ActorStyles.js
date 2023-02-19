import styled from "styled-components";
import pic from '../../../Components/Assets/back.jpg'

export const ActorStyles = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  background-image: url(${pic});
  background-color: rgb(26, 24, 29);
  background-blend-mode: overlay;
  min-height:90vh;
  color:white;
  .cover{
    display:flex;
    justify-content:center;
    flex-direction:column;
  }
  .personal-infor{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width:80%;
  }
  @media (max-width:1000px){
    .cover{
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
    }
  }
`