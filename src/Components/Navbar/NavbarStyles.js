import styled from "styled-components";

export const NavbarStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: black;
  color: white;
  overflow-x: hidden;
  //position: relative;
  .popup {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    z-index: 10;
    position:absolute;
  }
  .head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .logo {
      img {
        height: 80px;
        width: 100px;
        border-radius: 10px;
        margin: 5px 5px 5px 10px;
        border: 1.8px solid rgb(0, 212, 212);
      }
    }
    .name {
      span {
        font-weight: bold;
        font-size: 22px;
      }
      .two {
        color: rgb(0, 212, 212);
      }
      .one {
        color: white;
      }
    }
  }
  .pages {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 10px;
    .page {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin: 7px 10px;
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 7px;
      padding: 5px;
      &:hover {
        cursor: pointer;
        background: rgba(255, 255, 255, 0.2);
      }
      span {
        font-size: 13px;
        margin-left: 4px;
      }
    }
  }
  .mobile {
    .menu {
      margin-right: 15px;
    }
    .dropdown {
    }
  }
  @media (max-width: 830px) {
    .head {
      .logo {
        img {
          height: 70px;
          width: 80px;
        }
      }
      .name {
        span {
          font-size: 21px;
        }
      }
    }
    .pages {
      .page {
        span {
          font-size: 12px;
        }
      }
    }
  }
  @media (max-width: 400px) {
    .head {
      .logo {
        img {
          height: 60px;
          width: 70px;
        }
      }
      .name {
        span {
          font-size: 18px;
        }
      }
    }
  }
`;
