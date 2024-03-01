import styled from "styled-components";

export const AboutStyle = styled.div`
  width: 100%;
  max-height: 100vh;
  height: 35vh;
  background: #252525;
  margin-top: 3vw;

  @media screen and (max-width: 1400px) {
    height: 55vh;
  }

  @media screen and (max-width: 823px) {
    height: 80vh;
  }

  @media screen and (max-width: 420px) {
    height: 75vh;
  }
`;

export const ContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  @media screen and (max-width: 823px) {
    flex-direction: column;
  }

  @media screen and (max-width: 420px) {
    height: 70%;
    gap: 2em;
  }
`;

export const AboutContent = styled.div`
  height: 100%;
  margin-left: 50px;

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
    font-size: 24px;
    font-style: normal;
    font-weight: 500;

    margin-bottom: 25px;

    @media screen and (max-width: 823px) {
      font-size: 32px;
    }
  }
  p {
    color: #fff;
    font-size: 24px;
    font-weight: 600;
    line-height: normal;
    width: 50%;

    @media screen and (min-width: 1800px) {
      width: 28%;
    }

    @media screen and (min-width: 1980px) {
      width: 18%;
    }

    @media screen and (max-width: 823px) {
      font-size: 18px;
      width: 80%;
    }

    @media screen and (max-width: 1400px) {
      font-size: 18px;
      width: 70%;
    }
    @media screen and (max-width: 420px) {
      font-size: 15px;
    }
  }

  span {
    color: #b3b3b3;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.5;
    display: block;
    max-width: 80%;
    text-align: justify;

    @media screen and (min-width: 1700px) {
      width: 60%;
    }

    @media screen and (min-width: 1800px) {
      width: 58%;
    }

    @media screen and (max-width: 823px) {
      font-size: 16px;
      width: 80%;
    }
    @media screen and (max-width: 1400px) {
      font-size: 14px;
      width: 100%;
    }
  }
`;

export const AboutImage = styled.img`
  max-width: 466px;
  height: 311px;
  margin-right: 50px;

  @media screen and (max-width: 823px) {
    width: 280px;
    height: 135px;
    margin-bottom: 25px;
    object-fit: cover;
  }

  @media screen and (max-width: 1400px) {
    width: 400px;
    height: 201px;
    margin-bottom: 25px;
    object-fit: cover;
  }
  @media screen and (max-width: 420px) {
    width: 350px;
    height: 201px;
    margin: 0;
    object-fit: cover;
  }
`;
