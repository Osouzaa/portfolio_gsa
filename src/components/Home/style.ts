import styled from "styled-components";

export const HomeStyle = styled.div`
  width: 100%;
  max-height: 100vh;
  height: 40vh;
  background: #252525;
  margin-top: 3vw;

  @media screen and (max-width: 1400px) {
    height: 45vh;
  }

  @media screen and (max-width: 823px) {
    height: 60vh;
  }

  @media screen and (max-width: 420px) {
    height: 50vh;
  }
`;

export const InfoStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  @media screen and (max-width: 823px) {
    flex-direction: column;
    justify-content: center;
  }


`;

export const ContentInfo = styled.div`
  p {
    color: #b3b3b3;
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    @media screen and (max-width: 823px) {
      font-size: 18px;
    }
  }

  h3 {
    background: linear-gradient(
      90deg,
      #b72b56 6.08%,
      #e66b23 37.81%,
      #b72b56 58.21%,
      #e28117 88.64%,
      #dd4f3e 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 42px;
    font-style: normal;
    font-weight: 500;

    @media screen and (max-width: 823px) {
      font-size: 32px;
    }
    @media screen and (max-width: 1400px) {
      font-size: 32px;
      width: 100%;
    }
  }
  margin-left: 50px;

  @media screen and (max-width: 823px) {
    margin-left: 20px;
  }

  button {
    background: linear-gradient(
      90deg,
      #b72b56 6.08%,
      #e66b23 37.81%,
      #b72b56 58.21%,
      #e28117 88.64%,
      #dd4f3e 100%
    );
    background-clip: text;

    padding: 12px 20px;
    cursor: pointer;
    border-radius: 10px;
    border: 1px solid #e66b23;
    color: #b3b3b3;

    @media screen and (max-width: 823px) {
      display: none;
    }
  }
`;

export const ContentImage = styled.img`
  object-fit: cover;
  margin-right: 50px;
  cursor: pointer;
`;
