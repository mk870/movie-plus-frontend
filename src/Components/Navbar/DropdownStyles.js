import styled from 'styled-components'

export const DropdownStyles = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  overflow-x:hidden;
  position:absolute;
  z-index:20;
  background:black;
  margin-top:20px;
  animation: slideInAnimation ease 0.6s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;

    @keyframes slideInAnimation {
      0%{
        transform:translateX(50%);
        }
      100%{
        transform:translateX(-64%);
        }
    }
  .pages-drop{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:10px;
    .page-drop{
      display:flex;
      flex-direction:row;
      justify-content:center;
      align-items:center;
      width: 100%;
      width:100%;
      height:40px;
      border-bottom:1px solid grey;
      padding:1px;
      &:hover{
        cursor:pointer;
        background:#595759;
      }
      span{
        font-size:17px;
        margin-left:4px;
      }
    }
  }
`