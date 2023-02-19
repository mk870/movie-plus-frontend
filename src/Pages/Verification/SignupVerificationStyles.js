import styled from "styled-components";
import pic from '../../Components/Assets/back.jpg'

export const SignupVerificationStyles =styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background-image: url(${pic});
  background-color: rgb(26, 24, 29);
  background-blend-mode: overlay;
  min-height:90vh;
  color:white;
  text-align:center;
  h2{
    color:rgb(0,212,212);
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(3px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius:20px;
    padding:22px;
  }
`