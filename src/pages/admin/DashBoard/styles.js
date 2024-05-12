import styled from "styled-components";

export const NewsLetterPanelContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

export const DashBoardHeader = styled.aside`
  width: 100%;
  height: 10vh;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 5rem;
  margin-bottom: 2rem;

  .logo {
    width: 124px;
  }
`;

export const UserInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const UserInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .userPhoto {
    width: 36px;
  }
`;

export const UserControlDropDown = styled.div`
  margin-top: 1rem;
  background-color: red;
  width: 100px;
  padding: 0.5rem;

  position: absolute;
  bottom: -3rem;
`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
