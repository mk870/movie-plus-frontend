import styled from "styled-components"

export const Button = styled.button`
  border-radius: 6px;
  background-color: rgb(0,212,212);
  cursor: pointer;
  color: #fff;
  border: none;
  padding: 8px 20px 8px 20px;
  font-size:15px;
  font-weight:600;
  margin:2px 0px 2px 0px;
  display: flex;
  align-items:end;
  text-align:center;
  justify-content:center;
  span{
    margin-left:5px;
  }
  &:hover{
    background-color: #42f5ec;
    color:black;
  }
  @media (max-width:410px){
    font-size:12px;
    padding:9px;
    border-radius: 10px;
  }
`