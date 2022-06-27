import styled from "styled-components";

export const PopupStyles = styled.div`
  top: 0%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  color:white;
  text-align:center;
  position: fixed;
  width:70%;
  height: 10vh;
  border-radius:10px;
  background:rgb(0,212,212);
  animation: dropAnimation ease 0.6s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;

    @keyframes dropAnimation {
      0%{
        transform:translateY(-100%);
        }
      100%{
        transform:translateY(10%);
        }
    }
    @media (max-width:460px){
      width: 90%;
    }
    @media (max-width:460px){
      width: 96%;
    }
`